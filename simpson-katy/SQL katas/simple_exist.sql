SELECT id, name
FROM departments
WHERE EXISTS (SELECT price FROM sales WHERE departments.id = sales.department_id AND Price > 98);