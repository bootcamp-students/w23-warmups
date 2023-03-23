SELECT
  departments.id, departments.name
FROM 
  departments
WHERE EXISTS
  (SELECT 
    sales.price 
   FROM 
    sales 
   WHERE 
    sales.department_id = departments.id
    AND sales.price > 98)