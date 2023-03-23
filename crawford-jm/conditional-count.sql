SELECT
  EXTRACT(MONTH FROM payment_date) AS month,
  COUNT(rental_id) AS total_count,
  SUM(amount) AS total_amount,
  SUM(CASE WHEN staff_id = 1 THEN 1 ELSE 0 END) AS mike_count,
  SUM(CASE WHEN staff_id = 1 THEN amount ELSE 0 END) AS mike_amount,
  SUM(CASE WHEN staff_id = 2 THEN 1 ELSE 0 END) AS jon_count,
  SUM(CASE WHEN staff_id = 2 THEN amount ELSE 0 END) AS jon_amount
FROM payment
GROUP BY month
ORDER BY month


--Given a payments tabel (which is part of DVD Rental Sample Database)...
--produce a result set that shows side-by-side total amounts of payments
--made in Mike's and Jon's stores (broken down by months)
--Resulting data should be ordered by month using natural order (Jan, Feb, ...)
