import numpy as np
import requests
from flask import Flask, request, render_template
import pickle

# Create flask app
flask_app = Flask(__name__)
model = pickle.load(open("MlModel.pkl", "rb"))

# Define NestJS API endpoint
NESTJS_API_URL = "http://localhost:3000/api/prediction"  # Update with your actual endpoint URL

@flask_app.route("/predict")
def Home():
    return render_template("QueryForm.jsx")

@flask_app.route("/predict", methods=["POST"])
def predict():
    try:
        # Extract numerical feature values from form
        bmi = float(request.form['BMI'])
        fsh_lh = float(request.form['FSH/LH'])
        prl_ng_ml = float(request.form['PRL(ng/mL)'])
        cycle_value = float(request.form['Cycle(R/I)'])

        # Prepare features for prediction
        features = np.array([[bmi, fsh_lh, prl_ng_ml, cycle_value]])

        # Predict
        prediction = model.predict(features)

        # Convert prediction to JSON-serializable format
        prediction_str = str(prediction[0])

        # Store form input and prediction in MongoDB via NestJS API
        form_data = {
            'bmi': bmi,
            'cycle_value': cycle_value,
            'fsh_lh': fsh_lh,
            'prl_ng_ml': prl_ng_ml,
            'prediction': prediction_str
        }

        response = requests.post(NESTJS_API_URL, json=form_data)
        if response.status_code == 200:
            print("Data stored successfully in NestJS API")
        else:
            print("Failed to store data in NestJS API")

        # Map prediction to risk level
        if prediction == 6:
            risk_level = "High"
        elif prediction == 4:
            risk_level = "Medium"
        elif prediction == 2:
            risk_level = "Low"
        else:
            risk_level = "Unknown"

        return render_template("QueryForm.jsx", prediction_text="The infertility risk level is {}".format(risk_level))

    except Exception as e:
        print("Error:", e)
        print("Failed to connect to NestJS API")
        return "Error occurred", 500

if __name__ == "__main__":
    flask_app.run(debug=True)



# import numpy as np
# import requests
# from flask import Flask, request, jsonify, render_template
# import pickle

# # Create flask app
# flask_app = Flask(__name__)
# model = pickle.load(open("MlModel.pkl", "rb"))

# # Define NestJS API endpoint
# NESTJS_API_URL = "http://localhost:3000/api/prediction"

# @flask_app.route("/")
# def Home():
#   return render_template("QueryForm.jsx")

# @flask_app.route("/predict", methods=["POST"])
# def predict():
#   try:
#     # Extract data from JSON request, expecting a single object
#     data = request.json

#     # Extract numerical feature values directly, ensuring compatibility with NestJS API
#     bmi = data.get("bmi")
#     fsh_lh = data.get("FSH/LH")
#     prl_ng_ml = data.get("PRL(ng/mL)")
#     cycle_value = data.get("Cycle(R/I)")

#     # Prepare features for prediction
#     features = np.array([[bmi, fsh_lh, prl_ng_ml, cycle_value]])

#     # Predict
#     prediction = model.predict(features)

#     # Convert prediction to risk level
#     risk_level = {6: "High", 4: "Medium", 2: "Low"}.get(prediction, "Unknown")

#     # Store form input and prediction in MongoDB via NestJS API
#     response = requests.post(
#       NESTJS_API_URL, 
#       json={
#         "bmi": bmi,
#         "cycle_value": cycle_value,
#         "fsh_lh": fsh_lh,
#         "prl_ng_ml": prl_ng_ml,
#         "risk_level": risk_level
#       }
#     )

#     if response.status_code == 200:
#       print("Data stored successfully in NestJS API")
#     else:
#       print("Failed to store data in NestJS API")

#     # Return all data as JSON response
#     return jsonify({
#       "bmi": bmi,
#       "cycle_value": cycle_value,
#       "fsh_lh": fsh_lh,
#       "prl_ng_ml": prl_ng_ml,
#       "risk_level": risk_level
#     })

#   except Exception as e:
#     print("Error:", e)
#     print("Failed to connect to NestJS API")
#     return "Error occurred", 500

# if __name__ == "__main__":
#   flask_app.run(debug=True)

# import numpy as np
# import requests
# from flask import Flask, request, jsonify, render_template
# import pickle

# # Create flask app
# flask_app = Flask(__name__)
# model = pickle.load(open("MlModel.pkl", "rb"))

# # Define NestJS API endpoint
# NESTJS_API_URL = "http://localhost:3000/api/prediction"

# @flask_app.route("/")
# def Home():
#     return render_template("QueryForm.jsx")

# @flask_app.route("/predict", methods=["POST"])
# def predict():
#     try:
#         # Extract numerical feature values from JSON
#         data = request.json
#         bmi = float(data['bmi'])
#         fsh_lh = float(data['FSH/LH'])
#         prl_ng_ml = float(data['PRL(ng/mL)'])
#         cycle_value = float(data['Cycle(R/I)'])

#         # Prepare features for prediction
#         features = np.array([[bmi, fsh_lh, prl_ng_ml, cycle_value]])

#         # Predict
#         prediction = model.predict(features)

#         # Convert prediction to risk level
#         if prediction == 6:
#             risk_level = "High"
#         elif prediction == 4:
#             risk_level = "Medium"
#         elif prediction == 2:
#             risk_level = "Low"
#         else:
#             risk_level = "Unknown"

#         # Store form input and prediction in MongoDB via NestJS API
#         form_data = {
#             'bmi': bmi,
#             'cycle_value': cycle_value,
#             'fsh_lh': fsh_lh,
#             'prl_ng_ml': prl_ng_ml,
#             'risk_level': risk_level
#         }

#         response = requests.post(NESTJS_API_URL, json=form_data)
#         if response.status_code == 200:
#             print("Data stored successfully in NestJS API")
#         else:
#             print("Failed to store data in NestJS API")

#         # Return all data as JSON response
#         return jsonify({
#             "bmi": bmi,
#             "cycle_value": cycle_value,
#             "fsh_lh": fsh_lh,
#             "prl_ng_ml": prl_ng_ml,
#             "risk_level": risk_level
#         })

#     except Exception as e:
#         print("Error:", e)
#         print("Failed to connect to NestJS API")
#         return "Error occurred", 500

# if __name__ == "__main__":
#     flask_app.run(debug=True)


# import numpy as np
# import requests
# from flask import Flask, request, render_template
# import pickle

# # Create flask app
# flask_app = Flask(__name__)
# model = pickle.load(open("MlModel.pkl", "rb"))

# # Define NestJS API endpoint
# NESTJS_API_URL = "http://localhost:3000/api/prediction"

# @flask_app.route("/")
# def Home():
#     return render_template("QueryForm.jsx")

# @flask_app.route("/predict", methods=["POST"])
# def predict():
#     try:
#         # Extract numerical feature values from JSON
#         data = request.json
#         bmi = float(data['BMI'])
#         fsh_lh = float(data['FSH/LH'])
#         prl_ng_ml = float(data['PRL(ng/mL)'])
#         cycle_value = float(data['Cycle(R/I)'])

#         # Prepare features for prediction
#         features = np.array([[bmi, fsh_lh, prl_ng_ml, cycle_value]])

#         # Predict
#         prediction = model.predict(features)

#         # Convert prediction to risk level
#         if prediction == 6:
#             risk_level = "High"
#         elif prediction == 4:
#             risk_level = "Medium"
#         elif prediction == 2:
#             risk_level = "Low"
#         else:
#             risk_level = "Unknown"

#         # Store form input and prediction in MongoDB via NestJS API
#         form_data = {
#             'bmi': bmi,
#             'cycle_value': cycle_value,
#             'fsh_lh': fsh_lh,
#             'prl_ng_ml': prl_ng_ml,
#             #'prediction': prediction.tolist()  # Convert to list for JSON serialization
#             'risk_level' : risk_level
#         }

#         response = requests.post(NESTJS_API_URL, json=form_data)
#         if response.status_code == 200:
#             print("Data stored successfully in NestJS API")
#         else:
#             print("Failed to store data in NestJS API")

#         return {"prediction_text": "The infertility risk level is {}".format(risk_level)}

#     except Exception as e:
#         print("Error:", e)
#         print("Failed to connect to NestJS API")
#         return "Error occurred", 500

# if __name__ == "__main__":
#     flask_app.run(debug=True)


# import numpy as np
# import requests
# from flask import Flask, request, render_template
# import pickle

# # Create flask app
# flask_app = Flask(__name__)
# model = pickle.load(open("MlModel.pkl", "rb"))

# # Define NestJS API endpoint
# NESTJS_API_URL = "http://localhost:3000/api/prediction"  # Update with your actual endpoint URL

# @flask_app.route("/")
# def Home():
#     return render_template("QueryForm.jsx")

# @flask_app.route("/predict", methods=["POST"])
# def predict():
#     try:
#         # Extract numerical feature values from form
#         bmi = float(request.form['BMI'])
#         fsh_lh = float(request.form['FSH/LH'])
#         prl_ng_ml = float(request.form['PRL(ng/mL)'])
#         cycle_value = float(request.form['Cycle(R/I)'])

#         # Prepare features for prediction
#         features = np.array([[bmi, fsh_lh, prl_ng_ml, cycle_value]])

#         # Predict
#         prediction = model.predict(features)

#         # Convert prediction to JSON-serializable format
#         prediction_str = str(prediction[0])

#         # Store form input and prediction in MongoDB via NestJS API
#         form_data = {
#             'bmi': bmi,
#             'cycle_value': cycle_value,
#             'fsh_lh': fsh_lh,
#             'prl_ng_ml': prl_ng_ml,
#             'prediction': prediction_str
#         }

#         response = requests.post(NESTJS_API_URL, json=form_data)
#         if response.status_code == 200:
#             print("Data stored successfully in NestJS API")
#         else:
#             print("Failed to store data in NestJS API")

#         # Map prediction to risk level
#         if prediction == 6:
#             risk_level = "High"
#         elif prediction == 4:
#             risk_level = "Medium"
#         elif prediction == 2:
#             risk_level = "Low"
#         else:
#             risk_level = "Unknown"

#         return render_template("QueryForm.jsx", prediction_text="The infertility risk level is {}".format(risk_level))

#     except Exception as e:
#         print("Error:", e)
#         print("Failed to connect to NestJS API")
#         return "Error occurred", 500

# if __name__ == "__main__":
#     flask_app.run(debug=True)



# import numpy as np
# import requests
# from flask import Flask, request, render_template
# import pickle

# # Create flask app
# flask_app = Flask(__name__)
# model = pickle.load(open("MlModel.pkl", "rb"))

# # Define NestJS API endpoint
# NESTJS_API_URL = "http://localhost:3000/api/prediction"  # Update with your actual endpoint URL

# @flask_app.route("/")
# def Home():
#     return render_template("index.html")

# @flask_app.route("/predict", methods=["POST"])
# def predict():
#     try:
#         # Extract numerical feature values from form
#         bmi = float(request.form['BMI'])
#         fsh_lh = float(request.form['FSH/LH'])
#         prl_ng_ml = float(request.form['PRL(ng/mL)'])
#         cycle_value = float(request.form['Cycle(R/I)'])

#         # Prepare features for prediction
#         features = np.array([[bmi, fsh_lh, prl_ng_ml, cycle_value]])

#         # Predict
#         prediction = model.predict(features)

#         # Convert prediction to JSON-serializable format
#         prediction_str = str(prediction[0])

#         # Store form input and prediction in MongoDB via NestJS API
#         form_data = {
#             'bmi': bmi,
#             'cycle_value': cycle_value,
#             'fsh_lh': fsh_lh,
#             'prl_ng_ml': prl_ng_ml,
#             'prediction': prediction_str
#         }

#         response = requests.post(NESTJS_API_URL, json=form_data)
#         if response.status_code == 200:
#             print("Data stored successfully in NestJS API")
#         else:
#             print("Failed to store data in NestJS API")

#         # Map prediction to risk level
#         if prediction == 6:
#             risk_level = "High"
#         elif prediction == 4:
#             risk_level = "Medium"
#         elif prediction == 2:
#             risk_level = "Low"
#         else:
#             risk_level = "Unknown"

#         return render_template("index.html", prediction_text="The infertility risk level is {}".format(risk_level))

#     except Exception as e:
#         print("Error:", e)
#         print("Failed to connect to NestJS API")
#         return "Error occurred", 500

# if __name__ == "__main__":
#     flask_app.run(debug=True)


# import numpy as np
# import requests
# from flask import Flask, request, render_template
# import pickle

# # Create flask app
# flask_app = Flask(__name__)
# model = pickle.load(open("MlModel.pkl", "rb"))

# # Define NestJS API endpoint
# NESTJS_API_URL = "http://localhost:3000/api/prediction"  # Update with your actual endpoint URL

# @flask_app.route("/")
# def Home():
#     return render_template("index.html")

# @flask_app.route("/predict", methods=["POST"])
# def predict():
#     try:
#         # Extract numerical feature values from form
#         bmi = float(request.form['BMI'])
#         fsh_lh = float(request.form['FSH/LH'])
#         prl_ng_ml = float(request.form['PRL(ng/mL)'])
#         cycle_value = float(request.form['Cycle(R/I)'])

#         # Prepare features for prediction
#         features = np.array([[bmi, fsh_lh, prl_ng_ml, cycle_value]])

#         # Predict
#         prediction = model.predict(features)

#         # Convert prediction to JSON-serializable format
#         prediction_str = str(prediction[0])

#         # Store form input and prediction in MongoDB via NestJS API
#         form_data = {
#             'BMI': bmi,
#             'FSH/LH': fsh_lh,
#             'PRL(ng/mL)': prl_ng_ml,
#             'Cycle(R/I)': cycle_value,
#             'Prediction': prediction_str
#         }

#         response = requests.post(NESTJS_API_URL, json=form_data)
#         if response.status_code == 200:
#             print("Data stored successfully in MongoDB via NestJS API")
#         else:
#             print("Failed to store data in MongoDB via NestJS API")

#         # Map prediction to risk level
#         if prediction == 6:
#             risk_level = "High"
#         elif prediction == 4:
#             risk_level = "Medium"
#         elif prediction == 2:
#             risk_level = "Low"
#         else:
#             risk_level = "Unknown"

#         return render_template("index.html", prediction_text="The infertility risk level is {}".format(risk_level))

#     except Exception as e:
#         print("Error:", e)
#         print("Failed to connect to NestJS API")
#         return "Error occurred", 500
# if __name__ == "__main__":
#     flask_app.run(debug=True)


# import numpy as np
# from flask import Flask, request, render_template
# import pickle

# # Create flask app
# flask_app = Flask(__name__)
# model = pickle.load(open("MlModel.pkl", "rb"))

# @flask_app.route("/")
# def Home():
#     return render_template("index.html")

# @flask_app.route("/predict", methods=["POST"])
# def predict():
#     # Extract numerical feature values from form
#     float_features = [float(request.form['BMI']),
#                       float(request.form['FSH/LH']),
#                       float(request.form['PRL(ng/mL)'])]
    
#     # Extract cycleValue from hidden input field
#     cycle_value = float(request.form['Cycle(R/I)'])
#     float_features.append(cycle_value)  # Append cycleValue to the feature list
    
#     # Convert features to numpy array
#     features = np.array([float_features])
    
#     # Predict
#     prediction = model.predict(features)

#     # Map prediction to risk level
#     if prediction == 6:
#         risk_level = "High"
#     elif prediction == 4:
#         risk_level = "Medium"
#     elif prediction == 2:
#         risk_level = "Low"
#     else:
#         risk_level = "Unknown"

#     return render_template("index.html", prediction_text="The infertility risk level is {}".format(risk_level))

# if __name__ == "__main__":
#     flask_app.run(debug=True)
    