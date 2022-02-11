import shallow from "zustand/shallow";

import { useStore } from "@/lib/store";

export const useShallowStore = () => {
  const {
    beers,
    location,
    date,
    participants,
    multipleDays,
    setMultipleDays,
    setDate,
    setParticipants,
    incrementParticipants,
    decrementParticipants,
    reset,
  } = useStore(
    (store) => ({
      beers: store.beers,
      location: store.location,
      date: store.date,
      participants: store.participants,
      setDate: store.setDate,
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
    participants,
    setDate,
    setParticipants,
    multipleDays,
    setMultipleDays,
    incrementParticipants,
    decrementParticipants,
    reset,
  };
};
