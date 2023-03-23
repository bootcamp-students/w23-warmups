-- Create your SELECT statement here
SELECT age, count(id) AS people_count
FROM people
GROUP BY age