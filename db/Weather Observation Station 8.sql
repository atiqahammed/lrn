SELECT DISTINCT 
CITY 
FROM STATION 
WHERE lower(SUBSTRING(CITY, LEN(CITY), 1)) in ('a','e','i','o','u') AND lower(SUBSTRING(CITY,1,1)) in ('a','e','i','o','u');