import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import pickle

df = pd.read_csv("allocated_values3.csv")               # Load the csv file

print(df.head())

X = df[["BMI", "Cycle(R/I)", "FSH/LH", "PRL(ng/mL)"]]   # Select independent and dependent variable
y = df["Allocated Values"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=50)

sc = StandardScaler()                                   # Feature scaling
X_train = sc.fit_transform(X_train)
X_test= sc.transform(X_test)

classifier = RandomForestClassifier()                   # Instantiate the Random Forest Classifier model

classifier.fit(X_train, y_train)

pickle.dump(classifier, open("MlModel.pkl", "wb"))      # Make pickle file of our model