import { Box } from "grommet";

import { useWeather } from "@/hooks/useWeather";
import { useShallowStore } from "@/hooks/useShallowStore";

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
        Forecast {temp} ºC, on {date}, you should for {participants}{" "}
        participants, bring {beers} beers
      </Box>
    );
  return <Box>No forecast</Box>;
};
