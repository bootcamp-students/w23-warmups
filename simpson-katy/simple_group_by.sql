SELECT
  age,
  COUNT(people) as people_count
FROM people
GROUP BY age;