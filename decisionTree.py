import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import make_classification
from sklearn.metrics import confusion_matrix
from sklearn.metrics import classification_report

# loaded the data set
df = pd.read_excel("PCOS_data_without_infertility.xlsx",sheet_name=1)
df.head()

# remove the unnecessary columns and the target coloumn
X=df.drop(["PCOS (Y/N)","Sl. No","Patient File No."],axis = 1) 
y=df["PCOS (Y/N)"] # adding PCOS (Y/N as the target column

print(X.columns)   
print(y)
X.shape
y.shape

X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=17, test_size=0.2)

X_train.shape
X_test.shape
y_train.shape
y_test.shape

dtc = DecisionTreeClassifier()
dtc.get_params()