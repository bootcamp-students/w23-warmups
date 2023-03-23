SELECT
  extract(month from payment_date) as month,
  COUNT(payment_id) as total_count,
  SUM(amount) as total_amount,
  COUNT(
    CASE
      WHEN staff_id = 1
      THEN 1
    END) as mike_count,
  SUM(
    CASE
      WHEN staff_id = 1
      THEN amount
      ELSE 0
    END) as mike_amount,
  COUNT(
    CASE
      WHEN staff_id = 2
      THEN 1
    END) as jon_count,
  SUM(
    CASE
      WHEN staff_id = 2
      THEN amount
      ELSE 0
    END) as jon_amount
FROM
  payment
GROUP BY
  month
ORDER BY
  month