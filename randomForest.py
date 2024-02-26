import pandas as pd
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

# loaded the data set
df = pd.read_excel("PCOS_data_without_infertility.xlsx",sheet_name=1)
df.head()
