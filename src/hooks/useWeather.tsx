import { useEffect, useState } from "react";

export const useWeather = ({
  lat,
  lon,
  date,
}: {
  lat: number;
  lon: number;
  date: number;
}) => {
  const [weather, setWeather] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  // if (!lat || !lon) {
  //   // return ()
  //   setError({ error: `Missing required props, lat, lon, date` });
  // }
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts,current&appid=da9172990cbaa252f2ff09bb5426b0f3`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(setWeather)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { weather, error, loading };
};
