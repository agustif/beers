import shallow from "zustand/shallow";

import { useStore } from "@/lib/store";

export const useShallowStore = () => {
  const {
    beers,
    location,
    date,
    weather,
    participants,
    multipleDays,
    setMultipleDays,
    setDate,
    setWeather,
    setTemp,
    setBeers,
    setParticipants,
    incrementParticipants,
    decrementParticipants,
    reset,
  } = useStore(
    (store) => ({
      beers: store.beers,
      location: store.location,
      weather: store.weather,
      date: store.date,
      participants: store.participants,
      setDate: store.setDate,
      setWeather: store.setWeather,
      setBeers: store.setBeers,
      setTemp: store.setTemp,
      multipleDays: store.multipleDays,
      setMultipleDays: store.setMultipleDays,
      setParticipants: store.setParticipants,
      incrementParticipants: store.incrementParticipants,
      decrementParticipants: store.decrementParticipants,
      reset: store.reset,
    }),
    shallow
  );

  return {
    beers,
    location,
    date,
    weather,
    participants,
    setDate,
    setWeather,
    setBeers,
    setTemp,
    setParticipants,
    multipleDays,
    setMultipleDays,
    incrementParticipants,
    decrementParticipants,
    reset,
  };
};
