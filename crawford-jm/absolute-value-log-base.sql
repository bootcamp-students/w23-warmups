SELECT
  ABS(number1) AS abs,
  LOG(64, number2) AS log
FROM decimals;


--Given table 'decimals'
--Return a table with two columns
  --(abs, log)
  --where values in abs are absolute values of number1
  --where values in log are values from number2 in logarithm to base 64
