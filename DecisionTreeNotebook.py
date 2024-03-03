#!/usr/bin/env python
# coding: utf-8

# In[3]:


import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import make_classification
from sklearn.metrics import confusion_matrix
from sklearn.metrics import classification_report


# In[5]:


df = pd.read_excel("preprocesssed_dataset_with_no_removed_records.xlsx")


# In[6]:


df.head()


# In[7]:


X=df.drop(["PCOS (Y/N)","Sl. No","Patient File No."],axis = 1) 


# In[8]:


y=df["PCOS (Y/N)"]


# In[9]:


print(X.columns)


# In[10]:


print(y)


# In[11]:


X.shape


# In[12]:


y.shape


# In[14]:


X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=17, test_size=0.2)


# In[15]:


X_train.shape, y_train.shape


# In[16]:


X_test.shape, y_test.shape


# In[17]:


dtc = DecisionTreeClassifier()


# In[18]:


dtc.get_params()


# In[19]:


dtc.fit(X_train, y_train)


# In[20]:


y_pred = dtc.predict(X_test)


# In[21]:


print(confusion_matrix(y_test, y_pred))


# In[22]:


print(classification_report(y_test, y_pred))


# In[23]:


dtc.feature_importances_


# In[24]:


dtc2 = DecisionTreeClassifier(criterion='entropy',ccp_alpha=0.04)


# In[25]:


dtc2.fit(X_train, y_train)


# In[26]:


y_pred2 = dtc2.predict(X_test)


# In[27]:


print(confusion_matrix(y_test, y_pred2))


# In[28]:


print(classification_report(y_test, y_pred2))


# In[35]:


print(dtc.score(X_test, y_test))


# In[29]:


print(y_pred)


# In[32]:


print(y_test)


# In[34]:


print(dtc2.score(X_test, y_test))


# In[ ]:




