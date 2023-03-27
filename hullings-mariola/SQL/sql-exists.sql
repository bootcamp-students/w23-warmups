SELECT id, name
FROM departments
WHERE EXISTS
(Select name from sales where sales.department_id = departments.id and price > 98.00 );

-- same
 
--  select d.id, d.name from departments d
-- where exists 
-- (select s.name from sales s where s.department_id = d.id and s.price > 98.00);