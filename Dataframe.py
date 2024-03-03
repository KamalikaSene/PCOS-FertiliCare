import pandas as pd
import numpy as np

data = {
    'Feature1': np.random.rand(100),
    'Feature2': np.random.randint(0, 2, size=100),
    'Target': np.random.randint(0, 2, size=100)
}

df = pd.DataFrame(data)
df.head()

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

X = df[['Feature1', 'Feature2']]
y = df['Target']

X_strain, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LogisticRegression()
model.fit(X_train, y_train)

_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
conf_matrix = confusion_matrix(y_test, y_pred)
class_report = classification_report(y_test, y_pred)

print("Accuracy:", accuracy)
print("Confusion Matrix:\n", conf_matrix)
print("Classification Report:\n", class_report)

