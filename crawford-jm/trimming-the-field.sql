SELECT 
  id, 
  name, 
  split_part(characteristics, ',', 1) as characteristic
FROM monsters
ORDER BY id ASC;

-- trim characteristics down so that each monster only has one characteristic
