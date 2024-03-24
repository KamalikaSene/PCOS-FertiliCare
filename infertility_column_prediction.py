# Define Threshold ranges
BMI_low = 0
BMI_high = 0
Normal_Cycle = 2
Prolactin_low = 0
Prolactin_high = 25
Normal_FSH_LH_Ratio = 1

def populate_infertility(df):
    Normal_infertility_risk = 0
    Medium_infertility_risk = 1
    High_infertility_risk = 2
    infertility_levels = []
    for index, row in df.iterrows():
        # Access values from the dataset row
        bmi_value = row['BMI']
        cycle_value = row['Cycle']
        prolactin_value = row['Prolactin']
        fsh_lh_value = row['FSH/LH']

        # Check conditions and assign infertility risk levels
        if prolactin_value > 25:
            infertility_levels.append(High_infertility_risk)
        elif cycle_value != 2:
            infertility_levels.append(High_infertility_risk)

    return infertility_levels

df["Infertility (Y/N)"] = populate_infertility(df)
