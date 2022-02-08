import { Box } from "grommet";
import { useWeather } from "hooks/useWeather";

export interface ForecastProps {
  lat?: number;
  lon?: number;
  date?: number;
}
const today = new Date().toISOString();

export const Forecast = ({
  lat = 0,
  lon = 0,
  date = Number(new Date().toTimeString()),
}: ForecastProps) => {
  const { weather, error, loading } = useWeather({ lat, lon, date });
  console.log(weather);
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  // if (weather)
  return <WeatherForecast weather={weather} />;
};

export const WeatherForecast = ({ weather }: { weather: any }) => {
  console.log("weather", weather);
  return <Box>Forecast</Box>;
};
