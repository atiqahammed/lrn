SELECT DISTINCT 
CITY 
FROM STATION 
WHERE NOT lower(SUBSTRING(CITY, LEN(CITY), 1)) in ('a','e','i','o','u') 
OR 
NOT lower(SUBSTRING(CITY,1,1)) in ('a','e','i','o','u');