SELECT DISTINCT 
CITY 
FROM STATION 
WHERE NOT lower(SUBSTRING(CITY, LEN(CITY), 1)) in ('a','e','i','o','u') 
AND 
NOT lower(SUBSTRING(CITY,1,1)) in ('a','e','i','o','u');