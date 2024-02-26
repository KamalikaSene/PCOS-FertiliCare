import pandas as pd
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

# loaded the data set
df = pd.read_excel("PCOS_data_without_infertility.xlsx",sheet_name=1)
df.head()

# remove the unnecessary columns and the target coloumn
X=df.drop(["PCOS (Y/N)","Sl. No","Patient File No."],axis = 1) 
y=df["PCOS (Y/N)"] # adding PCOS (Y/N as the target column

print(X.columns)   
print(Y)
X.shape
Y.shape


# Random Forest Classifier
clf = RandomForestClassifier()
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

X_train.shape, y_train.shape
X_test.shape, y_test.shape

X_train.dtypes,y_train.dtypes

clf.fit(X_train, y_train)

y_pred = clf.predict(X_test)
print(y_pred)