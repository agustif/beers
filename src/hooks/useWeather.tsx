import { useEffect, useState } from "react";
import { useShallowStore } from "./useShallowStore";

const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
const OPEN_WEATHER_MAP_UNIT = process.env.OPEN_WEATHER_MAP_UNIT || "metric";

export const useWeather = ({ lat, lon }: { lat: number; lon: number }) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts,current&appid=${OPEN_WEATHER_MAP_API_KEY}&units=${OPEN_WEATHER_MAP_UNIT}`;
  const { weather, setWeather } = useShallowStore();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(setWeather)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [setWeather, url]);

  return { weather, error, loading };
};
