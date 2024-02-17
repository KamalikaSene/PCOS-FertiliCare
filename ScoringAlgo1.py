def assess_infertility_risk(bmi, menstrual_cycle, fsh_lh_ratio, prolactin):
    # Define thresholds for each variable
    bmi_thresholds = {'low': 18.5, 'medium': 24.9}#add proper threashholds
    menstrual_cycle_categories = {'regular', 'irregular'}
    fsh_lh_ratio_categories = {'low', 'medium', 'high'}#add proper threashholds
    prolactin_categories = {'normal', 'elevated'}#add proper threashholds

    # Assign weights to variables
    weights = {'bmi': 0.2, 'menstrual_cycle': 0.2, 'fsh_lh_ratio': 0.3, 'prolactin': 0.3}#add the real weights

    # Map variable values to risk levels from each row for each of the 4 variables
    def map_to_category(value, thresholds):
        if value < thresholds['low']:
            return 'low'
        elif value <= thresholds['medium']:
            return 'medium'
        else:
            return 'high'

    # Map BMI to risk category
    bmi_category = map_to_category(bmi, bmi_thresholds)
    # Handle irregular menstrual cycle
    #the following code has to be changed to handle a threshhold as above . 
    menstrual_cycle_category = 'irregular' if menstrual_cycle not in menstrual_cycle_categories else menstrual_cycle
    # Map FSH/LH ratio to risk category, also all fake values have to enter proper ones 
    fsh_lh_ratio_category = 'low' if fsh_lh_ratio < 1 else ('high' if fsh_lh_ratio > 2 else 'medium')
    # Map prolactin levels to risk category, fake values substitute with proper ones 
    prolactin_category = 'normal' if prolactin < 20 else 'elevated'

    # Calculate cumulative risk score
    #the math here is correct , but it needs to be modified to refelect the chnages to be made before . 
    
    """ the logic in here, this is not what we are using . 
    low bmi = 1 
    medium mbi = 0.5 
    high bmi = 0 

    mestrual cycle 
    regular = 1
    irregular = 0 

    fsh /lh 
    high = 1
    medium = 0.5
    low = 0 

    prolactin 
    elevated = 1
    normal = 0 

    u can see in here the more normal the patient is higher the score , so we cant use these values . but thw formulae is correct. 
    """

    cumulative_risk_score = (
        weights['bmi'] * (1 if bmi_category == 'low' else (0.5 if bmi_category == 'medium' else 0)) +
        weights['menstrual_cycle'] * (1 if menstrual_cycle_category == 'regular' else 0) +
        weights['fsh_lh_ratio'] * (1 if fsh_lh_ratio_category == 'high' else (0.5 if fsh_lh_ratio_category == 'medium' else 0)) +
        weights['prolactin'] * (1 if prolactin_category == 'elevated' else 0)
    )

    # Interpret cumulative risk score
    if 0 <= cumulative_risk_score <= 0.3:
        return 'Low risk'
    elif 0.31 <= cumulative_risk_score <= 0.6:
        return 'Medium risk'
    else:
        return 'High risk'

# Example usage
bmi = 22
menstrual_cycle = 'regular'
fsh_lh_ratio = 2.5
prolactin = 25

risk = assess_infertility_risk(bmi, menstrual_cycle, fsh_lh_ratio, prolactin)
print("Risk of infertility:", risk)
