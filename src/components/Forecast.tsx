import { Box } from "grommet";
import shallow from "zustand/shallow";

import { useWeather } from "@/hooks/useWeather";
import { useStore } from "@/lib/store";

const useShallowStore = () => {
  const { beers, participants, location, date, reset } = useStore(
    (store) => ({
      location: store.location,
      date: store.date,
      participants: store.participants,
      reset: store.reset,
      beers: store.beers,
    }),
    shallow
  );

  return { participants, location, date, beers, reset };
};

export const Forecast = () => {
  const { location, date, participants, beers } = useShallowStore();

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
  if (weather)
    return (
      <Box>
        Forecast {temp} ºC, for {participants} participants, bring {beers} beers
      </Box>
    );
  return <Box>No forecast</Box>;
};

