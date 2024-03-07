"""Underweight: BMI less than 18.5
    Normal weight: BMI 18.5 to 22.9
    Overweight: BMI 23 to 24.9
    Obesity: BMI 25 or greater

    Prolactin 
    Low : <25
    Mid : 25 - 50
    High : 25 - 100 & > 100

    fsh/lh 
    low - 0.7 - 1
    mid - 0.4 - 0.7
    high - less than 0.4 

    weights :
    BMI	- 		0.8
    Cycle	- 		0.6
    FSH/LH ratio	- 	0.4
    Prolactin	- 	0.2
    """
import pandas as pd

# Function to write allocated values to a file
def write_allocated_values_to_file(values):
    with open('allocated_values.txt', 'a') as file:
        for value in values:
            file.write(str(value) + '\n')

# Initialize allocated values list
allocated_values = []

# Function to assess infertility risk
def assess_infertility_risk(bmi, menstrual_cycle, fsh_lh_ratio, prolactin):
    global allocated_values

    # Define thresholds for each variable
    bmi_thresholds = {'low': 23, 'medium': 25, "high": 25}
    menstrual_cycle_thresholds = {'low': 2, 'medium': 4, "high": 4}
    fsh_lh_ratio_thresholds = {'low': 1, 'medium': 0.7, 'high': 0.4}
    prolactin_thresholds = {'low': 25, 'medium': 50, 'high': 100}

    # Assign weights to variables
    weights = {'bmi': 0.8, 'menstrual_cycle': 0.6, 'fsh_lh_ratio': 0.4, 'prolactin': 0.2}

    # Define functions to map variable values to risk categories
    def map_to_category(value, thresholds):
        if value < thresholds['low']:
            return 'low'
        elif value < thresholds['medium']:
            return 'medium'
        else:
            return 'high'

    def map_to_category_cycle(value, thresholds):
        if value == thresholds['low']:
            return 'low'
        else:
            return 'high'

    def map_to_category_fsh_lh_ratio(value, thresholds):
        if value < thresholds['high']:
            return 'high'
        elif value < thresholds['medium']:
            return 'medium'
        elif value > thresholds["medium"] and value <= 1:
            return 'low'
        else:
            return 'low'  # outliers

    # Map BMI to risk category
    bmi_category = map_to_category(bmi, bmi_thresholds)
    print("BMI: ", bmi_category)
    # Map cycle to risk category
    menstrual_cycle_category = map_to_category_cycle(menstrual_cycle, menstrual_cycle_thresholds)
    print("CYCLE: ", menstrual_cycle_category)
    # Map fsh/lh to risk category
    fsh_lh_ratio_category = map_to_category_fsh_lh_ratio(fsh_lh_ratio, fsh_lh_ratio_thresholds)
    print("FSH/LH: ", fsh_lh_ratio_category)
    # Map prolactin to risk category
    prolactin_category = map_to_category(prolactin, prolactin_thresholds)
    print("PROLACTIN: ", prolactin_category)

    # Calculate cumulative risk score
    cumulative_risk_score = (
            weights['bmi'] * (0.1 if bmi_category == 'low' else (0.5 if bmi_category == 'medium' else 1)) +
            weights['menstrual_cycle'] * (
                0.1 if menstrual_cycle_category == 'low' else (0.5 if menstrual_cycle_category == 'medium' else 1)) +
            weights['fsh_lh_ratio'] * (
                0.1 if fsh_lh_ratio_category == 'low' else (0.5 if fsh_lh_ratio_category == 'medium' else 1)) +
            weights['prolactin'] * (
                0.1 if prolactin_category == 'low' else (0.5 if prolactin_category == 'medium' else 1))
    )

    print("Cumulative risk score:", cumulative_risk_score)

    # Interpret cumulative risk score
    if 0 <= cumulative_risk_score <= 0.3:
        risk = 'Low risk'
    elif 0.31 <= cumulative_risk_score <= 1.3:
        risk = 'Medium risk'
    else:
        risk = 'High risk'

    # Allocate values based on risk
    if risk == 'Low risk':
        allocated_value = 2
    elif risk == 'Medium risk':
        allocated_value = 4
    else:
        allocated_value = 6

    allocated_values.append(allocated_value)
    print("Allocated Value:", allocated_value)
    print("Allocated Values List:", allocated_values)

    # Write allocated values to file
    write_allocated_values_to_file(allocated_values)

    return risk

# Read the Excel sheet
df = pd.read_excel('/Users/isiri/Documents/finaldataset.xlsx')

# Iterate over each row in the DataFrame
for index, row in df.iterrows():
    # Extract the values for the four variables from the row
    bmi = row['BMI']
    menstrual_cycle = row['Cycle(R/I)']
    fsh_lh_ratio = row['FSH/LH']
    prolactin = row['PRL(ng/mL)']

    # Assess infertility risk
    risk = assess_infertility_risk(bmi, menstrual_cycle, fsh_lh_ratio, prolactin)

    # Print the risk
    print(f"Row {index + 1}: Risk of infertility: {risk}")

print("All rows processed.")

# /Users/isiri/Documents/finaldataset.xlsx