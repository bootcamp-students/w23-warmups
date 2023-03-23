-- Create your SELECT statement here
SELECT id, name
FROM departments
WHERE EXISTS (SELECT department_id FROM sales WHERE departments.id = sales.department_id AND price > 98)