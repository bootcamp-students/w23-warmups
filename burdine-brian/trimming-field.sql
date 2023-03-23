SELECT id, name, 
CASE
  WHEN POSITION(',' IN characteristics) = 0 THEN characteristics
  WHEN POSITION(',' IN characteristics) > 0 THEN SUBSTRING(characteristics, 0, POSITION(',' IN characteristics)) 
END
as characteristic 
FROM monsters
ORDER BY id;