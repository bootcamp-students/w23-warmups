SELECT id, name
FROM departments
WHERE EXISTS 
(SELECT price FROM sales WHERE price>98.00 AND departments.id = sales.department_id)