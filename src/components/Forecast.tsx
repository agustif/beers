import { Box } from "grommet";
import shallow from "zustand/shallow";

import { useWeather } from "@/hooks/useWeather";
import { useStore } from "@/lib/store";

const useShallowStore = () => {
  const { location, date, reset } = useStore(
    (store) => ({
      location: store.location,
      date: store.date,
      reset: store.reset,
    }),
    shallow
  );

  return { location, date, reset };
};

export const Forecast = () => {
  const { location, date } = useShallowStore();

  const { weather, error, loading } = useWeather({
    lat: location.lat,
    lon: location.lon,
  });
  console.log(weather, location, date);
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Consulting weather api...</div>;
  }
  const temp = weather.daily[0].temp?.day;
  if (weather) return <Box>Forecast {temp}</Box>;
  return <Box>No forecast</Box>;
};

