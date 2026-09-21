# Interactive Productive Dashboard 

### This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator

## Weekly Task Goals 
==> This feature provides a sum total(numerical value) of weekly goal (dailyGoal multiplied by 5 workdays) and weekly bonus tasks. For instance, if the daily taks goals are 5 tasks with weekly bonus task of 5, the total weekly goal is 30. 
```
weekly goal => daily task goal * 5 => 5 * 5 => 25 
total weekly goal => weekly goal + weekly bonus task => 25 + 5 => 30 
```

## Imperial/Metric Converter
==> This feature allows user to input a numerical value and convert it between US(Imperial - inch, foot, yard, mile) and Metric (centimeter, meter, kilometer) units. 

### Logic and Pseudocode for Imperial/Metric Converter
```
BEGIN
SET INCH_TO_CM to 2.54
SET FOOT_TO_CM to 30.48
SET YARD_TO_M to 0.91
SET MILE_TO_KM = 1.61
SET CM_TO_INCH = 0.39
SET CM_TO_FOOT = 0.028
SET M_TO_YARD = 1.09
SET KM_TO_MILE = 0.62
INPUT: Initial value as “initial value”
INPUT: Initial unit as “initial unit” 
INPUT: Final unit as “final unit”
IF initial unit is inch and the final unit is centimeter:
	SET final value = initial value * INCH_TO_CM
ELSE IF initial unit is foot and final unit is centimeter:
	SET final value = initial value * FOOT_TO_CM 
ELSE IF initial unit is yard and final unit is meter: 
	SET final value = initial value * YARD_TO_M
ELSE IF initial unit is mile and final unit is kilometer:
	SET final value = initial value * MILE_TO_KM
ELSE IF initial unit is centimeter and final unit is inch:
	SET final value = initial value * CM_TO_INCH
ELSE IF initial unit is centimeter and final unit is foot:
	SET final value = initial value * CM_TO_FOOT
ELSE IF initial unit is meter and final unit is yard:
	SET final value = initial value * M_TO_YARD
ELSE:
	SET final value = initial value * KM_TO_MILE
DISPLAY final value 
END
```
