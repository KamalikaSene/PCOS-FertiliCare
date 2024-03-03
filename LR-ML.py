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




