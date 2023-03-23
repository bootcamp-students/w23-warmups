SELECT id, name
FROM departments
WHERE EXISTS (SELECT price FROM sales WHERE departments.id = sales.department_id AND price > 98)


--Create a SELECT statement containing data about departments that had a sale
--with a price over 98.00 dollars
--SELECT statement will use EXISTS
