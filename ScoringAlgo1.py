def assess_infertility_risk(bmi, menstrual_cycle, fsh_lh_ratio, prolactin):
    # Define thresholds for each variable, this is a dicltionary of thresholds 
    bmi_thresholds = {'low': 23 , 'medium': 25 , "high":25 }
    menstrual_cycle_thresholds = {'low':  2 , 'medium': 4  , "high": 4 } # 'regular' = 2 , 'irregular'= 4 
    fsh_lh_ratio_thresholds = {'low': 1 , 'medium': 0.7 , 'high': 0.4}
    prolactin_thresholds = {'low': 25 , 'medium': 50 , 'high': 100 }#add proper threashholds

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

    # Assign weights to variables
    weights = {'bmi': 0.8, 'menstrual_cycle': 0.6, 'fsh_lh_ratio': 0.4, 'prolactin': 0.2}

    # Map variable values to risk levels from each row for each of the 3 variables
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
        else:#outliers 
            return 'low'          

    # Map BMI to risk category
    bmi_category = map_to_category(bmi, bmi_thresholds)
    print(bmi_category)
    # Map cycle to risk category
    menstrual_cycle_category  = map_to_category_cycle(menstrual_cycle , menstrual_cycle_thresholds)
    print(menstrual_cycle_category)
    # Map fsh/lh to risk category
    fsh_lh_ratio_category  = map_to_category_fsh_lh_ratio(fsh_lh_ratio, fsh_lh_ratio_thresholds)
    print(fsh_lh_ratio_category)
    # Map prolactin to risk category
    prolactin_category = map_to_category(prolactin ,prolactin_thresholds)
    print(prolactin_category)


    """
    #the following code has to be changed to handle a threshhold as above . 
    menstrual_cycle_category = 'irregular' if menstrual_cycle not in menstrual_cycle_categories else menstrual_cycle
    # Map FSH/LH ratio to risk category, also all fake values have to enter proper ones 
    fsh_lh_ratio_category = 'low' if fsh_lh_ratio < 1 else ('high' if fsh_lh_ratio > 2 else 'medium')
    # Map prolactin levels to risk category, fake values substitute with proper ones 
    prolactin_category = 'normal' if prolactin < 20 else 'elevated"""

    # Calculate cumulative risk score
    """ the logic in here. 
        low = 0
        mid = 0.5 
        high = 1 

    """
    cumulative_risk_score = (
        weights['bmi'] * (0.1 if bmi_category == 'low' else (0.5 if bmi_category == 'medium' else 1)) +
        weights['menstrual_cycle'] * (0.1 if menstrual_cycle_category == 'low' else (0.5 if bmi_category == 'medium' else 1)) +
        weights['fsh_lh_ratio'] * (0.1 if fsh_lh_ratio_category == 'low' else (0.5 if bmi_category == 'medium' else 1)) +
        weights['prolactin'] * (0.1 if prolactin_category == 'low' else (0.5 if bmi_category == 'medium' else 1))
    )

    print("Cumulative risk score:",cumulative_risk_score)

    # Interpret cumulative risk score
    if 0 <= cumulative_risk_score <= 0.3:
        return 'Low risk'
    elif 0.31 <= cumulative_risk_score <= 0.6:
        return 'Medium risk'
    else:
        return 'High risk'

# Example usage
bmi = 38 
menstrual_cycle = 2
fsh_lh_ratio = 0.4
prolactin = 24

risk = assess_infertility_risk(bmi, menstrual_cycle, fsh_lh_ratio, prolactin)
print("Risk of infertility:", risk)