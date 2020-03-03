SELECT CAST(
            (MAX(LAT_N) - MIN(LAT_N)) +
            (MAX(LONG_W) - MIN(LONG_W)
    ) AS DECIMAL(16, 4)        
) FROM STATION;