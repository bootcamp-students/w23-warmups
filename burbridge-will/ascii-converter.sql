SELECT *, ASCII(name) AS name,
ASCII(race) as race
FROM demographics
ORDER BY id;