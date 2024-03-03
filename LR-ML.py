#Importing necessary libraries
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

#Loading and exploring data
data = pd.read_csv ('preprocesssed_dataset_with_no_removed_records.csv')
print(data.head())
print(data.info())

#Data Pre-processing
data.fillna(0, inplace=True)
X = data.drop('infertility_label', axis=1)
y = data['infertility_label']

#Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#Feature Scaling
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

#Build and Train the Logistic Regression Model
model = LogisticRegression(random_state=42)
model.fit(X_train, y_train)

#Make Predictions
y_pred = model.predict(X_test)

#Evaluate the Model
print("Accuracy:", accuracy_score(y_test, y_pred))
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
print("Classification Report:\n", classification_report(y_test, y_pred))







