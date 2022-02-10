import shallow from "zustand/shallow";

import { useStore } from "@/lib/store";

export const useShallowStore = () => {
  const {
    beers,
    location,
    date,
    participants,
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
      setParticipants: store.setParticipants,
      incrementParticipants: store.incrementParticipants,
      decrementParticipants: store.decrementParticipants,
      reset: store.reset,
    }),
    shallow
  );

  return {
    participants,
    location,
    date,
    beers,
    setParticipants,
    incrementParticipants,
    decrementParticipants,
    reset,
  };
};
