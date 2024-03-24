import numpy as np
import requests
from flask import Flask, jsonify, request
import pickle

flask_app = Flask(__name__)
model = pickle.load(open('MlModel.pkl', "rb"))

NESTJS_API_URL = 'http://localhost:4000/api/prediction'
    
@flask_app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        bmi = data['bmi']
        fsh_lh = data['fsh_lh']
        prl_ng_ml = data['prl_ng_ml']
        cycle_value = data['cycle_value']

    except Exception as e:
        return jsonify(error=str(e)), 500    
    
    
    features = np.array([[bmi, fsh_lh, prl_ng_ml, cycle_value]])
    prediction = model.predict(features)

    prediction_str = str(prediction[0])

    if prediction == 6:
        risk_level = "Medium"
    elif prediction == 4:
        risk_level = "High"
    elif prediction == 2:
        risk_level = "Low"
    else:
        risk_level = "Unknown"


    form_data = {
        'risk_level': risk_level
    }

    response = requests.post(NESTJS_API_URL, json=form_data)
    if response.status_code == 200:
        print("Data stored successfully in NestJS API")
    else:
        print("Failed to store data in NestJS API")

if __name__ == "__main__":
    flask_app.run(debug=True, port=5000)