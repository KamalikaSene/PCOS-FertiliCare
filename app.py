import numpy as np
from flask import Flask, request, render_template
from flask_pymongo import PyMongo
import pickle
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Create flask app
flask_app = Flask(__name__)

# Configure MongoDB connection
flask_app.config['MONGO_URI'] = "mongodb+srv://isir20221073:<password>@cluster0.jsykn7a.mongodb.net/FertilicareDB?retryWrites=true&w=majority&appName=Cluster0"

# Initialize PyMongo with the Flask application
mongo = PyMongo(flask_app)

# Load ML model
model = pickle.load(open("MlModel.pkl", "rb"))

@flask_app.route("/")
def Home():
    return render_template("index.html")

@flask_app.route("/predict", methods=["POST"])
def predict():
    # Extract numerical feature values from form
    bmi = float(request.form['BMI'])
    cycle_value = float(request.form['Cycle(R/I)'])
    fsh_lh = float(request.form['FSH/LH'])
    prl_ng_ml = float(request.form['PRL(ng/mL)'])

    # Prepare features for prediction
    features = np.array([[bmi, cycle_value, fsh_lh, prl_ng_ml]])

    # Predict
    prediction = model.predict(features)

    # Check if the MongoDB connection is established
    if mongo.db is None:
        logging.error("Failed to connect to MongoDB")
        return "Failed to connect to MongoDB"

    # Store form input and prediction in MongoDB Atlas
    form_data = {
        'BMI': bmi,
        'FSH/LH': fsh_lh,
        'PRL(ng/mL)': prl_ng_ml,
        'Cycle(R/I)': cycle_value,
        'Prediction': prediction[0]
    }
    mongo.db.form_data.insert_one(form_data)

    # Map prediction to risk level
    if prediction == 6:
        risk_level = "High"
    elif prediction == 4:
        risk_level = "Medium"
    elif prediction == 2:
        risk_level = "Low"
    else:
        risk_level = "Unknown"

    return render_template("index.html", prediction_text="The infertility risk level is {}".format(risk_level))

if __name__ == "__main__":
    flask_app.run(debug=True)
