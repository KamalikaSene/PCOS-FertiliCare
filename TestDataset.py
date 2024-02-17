import copy
import time
import numpy as np
import pandas as pd
import warnings
import seaborn as sns
warnings.filterwarnings("ignore")
import matplotlib.pyplot as plt
import os
import openpyxl
import sklearn

# testing part 2

df = pd.read_excel("PCOS_data_without_infertility.xlsx",sheet_name=1)

df["Infertility (Y/N)"] = np.where(df['PCOS (Y/N)'] == 1, "Y", "N")

df["Infertility (Y/N)"] = df["Infertility (Y/N)"].map({"Y": 1, "N": 0})  # populating the infertility column with 1 , 0

non_numeric_columns = df.select_dtypes(exclude=[np.number]).columns
print("Columns with non-numeric values:", non_numeric_columns)

#Converting object data type to numeric type
df["AMH(ng/mL)"] = pd.to_numeric(df["AMH(ng/mL)"], errors="coerce") #converting object datatype to numeric
df["II    beta-HCG(mIU/mL)"] = pd.to_numeric(df["II    beta-HCG(mIU/mL)"], errors="coerce") #converting object datatypeTonumeric

print(pd.isnull(df).sum())  # prints the count of missing values in each column

for i in [' Age (yrs)', 'Weight (Kg)',
       'Height(Cm) ', 'Hb(g/dl)', 'Cycle(R/I)', 'Cycle length(days)', 'No. of aborptions',
        'Hip(inch)', 'Waist(inch)',
       'PRG(ng/mL)', 'RBS(mg/dl)', 'BP _Systolic (mmHg)', 'Follicle No. (L)', 'Follicle No. (R)',
       'Avg. F size (L) (mm)', 'Avg. F size (R) (mm)', 'Endometrium (mm)', 'BMI']:
  sns.set(rc = {'figure.figsize':(15,15)})
  df[df['PCOS (Y/N)'] == 1][i].value_counts().plot.bar()
  plt.title(i)
  plt.show()

df = df.rename(columns=lambda x: x.strip())  # replacing the leading spaces in column names

# dropping axes which are not useful
df = df.drop(columns=["Unnamed: 44"])

df = df.drop(['Sl. No'], axis = 1) # dropping not useful axis

df = df.drop(['Patient File No.'], axis = 1) # dropping not useful axis

# plotting heatmap to visualise missing values
plt.figure(figsize=(16,12))
sns.heatmap(df.isna().transpose(),
            cmap="winter",
            cbar_kws={'label': 'Missing Data'}, xticklabels=True, yticklabels=True)

# displaying the heatmap
plt.show()

for column in df.columns:
    df[column] = pd.to_numeric(df[column], errors='coerce')  # Convert to numeric


# column names with missing data
lst_missing_columns = df.columns[df.isna().any()].tolist()
print(lst_missing_columns)

for x in lst_missing_columns:
    df[x] = pd.to_numeric(df[x], errors='coerce')
    df[x] = df[x].fillna(df[x].median())  # filling columns with missing value with their median

#Verifying if any missing values are left
df.columns[df.isna().any()].tolist() #no more missing values left


df = df.dropna()  # Remove rows with missing values
# Plotting correlation heatmap
plt.figure(figsize=(20, 20))
# plotting correlation heatmap
dataplot = sns.heatmap(df.corr(), cmap="spring", annot=True)

# displaying heatmap
plt.show()

print(df.columns)
df.head( )
df.info()

#Identifying numerical and categorical features in dataframe
numerical_variables = []
categorical_variables = []
for x in df.columns:
    if len(df[x].value_counts()) < 9:
        if x not in ["RR (breaths/min)", "Cycle(R/I)", "No. of aborptions", "BP _Systolic (mmHg)", "BP _Diastolic (mmHg)"]:
            categorical_variables.append(x)
    else:
        numerical_variables.append(x)

print(numerical_variables)
print(categorical_variables)

relations = df.corr()
multicollinearity = (relations.where(np.triu(np.ones(relations.shape), k=1).astype(bool)).stack().sort_values(ascending=False))
print(multicollinearity.head())
print(multicollinearity.tail())

df.describe()

# def correlationFigure(featureVariablesMain, targetVariable):
#     # Calculate correlation
#     #print(featureVariablesMain.columns)
#     #print(targetVariable.values)
#     def correlationCalculation(targetVariable, featureVariables, features):
#         columns = [] # For maintaining the feature names
#         values = [] # For maintaining the corr values of features with "Infertility (Y/N)"
#
# # Plotting the correlations with respect to "Empathy" variable
#
# # Traverse through all the input features
#         for x in features:
#             if x is not None:
#                 columns.append(x) # Append the column name
#                 # Calculate the correlation
#                 c = np.corrcoef(featureVariables[x], featureVariables[targetVariable])
#                 absC = abs(c) # Absolute value because important values might miss
#                 values.append(absC[0,1])
#
#         corrValues = pd.DataFrame()
#         dataDict = {'features': columns, 'correlation_values': values}
#         corrValues = pd.DataFrame(dataDict)
#
# # Sort the value by correlation values
#         sortedCorrValues = corrValues.sort_values(by="correlation_values")
#
#         # Plot the graph to show the features with their correlation values
#         figure, ax = plt.subplots(figsize=(15, 45), squeeze=True)
#         ax.set_title("Correlation Coefficients of Features")
#         sns.barplot(x=sortedCorrValues.correlation_values, y=sortedCorrValues['features'], ax=ax)
#         ax.set_ylabel("-----------Corr Coefficients--------->")
#
#
#         plt.show()
#
#         return sortedCorrValues
#
#     # Make a list of columns
#         columns = []
#         for x in featureVariablesMain.columns:
#             columns.append(x)
#         columns.remove(targetVariable)
#     # Compute correlations
#         correlations = correlationCalculation(targetVariable, featureVariablesMain, columns)
#         return correlations
#
#
# target = "Infertility (Y/N)"
# targetVariable = df["Infertility (Y/N)"].to_frame()
# corrData = correlationFigure(df, target)
# importantFeatures = corrData.sort_values(by="correlation_values", ascending=True).tail(20)

def correlationFigure(featureVariablesMain, targetVariable):
    def correlationCalculation(targetVariable, featureVariables, features):
        print(featureVariablesMain.columns)
        columns = []  # For maintaining the feature names
        values = []  # For maintaining the corr values of features with "Infertility (Y/N)"

        # Corrected value access:
        target_values = featureVariablesMain.loc[:, targetVariable].values  # Extract target values directly
        # Traverse through all the input features
        for x in features:
            if x != targetVariable:  # Exclude the target variable from the features
                columns.append(x)  # Append the column name
                # Calculate the correlation
                c = np.corrcoef(featureVariablesMain.loc[x].values, target_values)
                # c = np.corrcoef(featureVariablesMain.loc[x].values, featureVariablesMain.loc[targetVariable].values)
                absC = abs(c)  # Absolute value because important values might miss
                values.append(absC[0, 1])

        corrValues = pd.DataFrame()
        dataDict = {'features': columns, 'correlation_values': values}
        corrValues = pd.DataFrame(dataDict)

        # Sort the value by correlation values
        sortedCorrValues = corrValues.sort_values(by="correlation_values")

        # Plot the graph to show the features with their correlation values
        figure, ax = plt.subplots(figsize=(15, 45), squeeze=True)
        ax.set_title("Correlation Coefficients of Features")
        sns.barplot(x=sortedCorrValues.correlation_values, y=sortedCorrValues['features'], ax=ax)
        ax.set_ylabel("-----------Corr Coefficients--------->")

        plt.show()

        return sortedCorrValues

    columns = [x for x in featureVariablesMain.columns if x != targetVariable]  # Fix: exclude targetVariable
    correlations = correlationCalculation(targetVariable, featureVariablesMain, columns)
    return correlations


target = "Infertility (Y/N)"
targetVariable = target  # Use the column name, not the DataFrame
corrData = correlationFigure(df, target)
importantFeatures = corrData.sort_values(by="correlation_values", ascending=True).tail(20)






# print(pearson_corr)



