import { useEffect, useState } from "react";

const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
const OPEN_WEATHER_MAP_UNIT = process.env.OPEN_WEATHER_MAP_UNIT || "metric";

export const useWeather = ({ lat, lon }: { lat: number; lon: number }) => {
  const [weather, setWeather] = useState({ daily: [{ temp: { day: null } }] });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts,current&appid=${OPEN_WEATHER_MAP_API_KEY}&units=${OPEN_WEATHER_MAP_UNIT}`;

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
