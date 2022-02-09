import { useLayoutEffect } from "react";
import create, { UseBoundStore } from "zustand";
import createContext from "zustand/context";
import { combine } from "zustand/middleware";

let store: any;

type InitialState = typeof initialState;
type UseStoreState = typeof initializeStore extends (
  ...args: never
) => UseBoundStore<infer T>
  ? T
  : never;

  const initialState = {
  beers: 0,
  participants: 2,
  location: { lat: 0, lon: 0 },
  date: new Date().toISOString(),
};

const zustandContext = createContext<UseStoreState>();
export const Provider = zustandContext.Provider;
export const useStore = zustandContext.useStore;

export const initializeStore = (preloadedState = {}) => {
  return create(
    combine({ ...initialState, ...preloadedState }, (set, get) => ({
      setLocation: ({lat, lon}:{lat: number, lon: number}) => {
        set({location:{lat, lon}});
      },
      setParticipants: (participants: number) => { set({participants}); },
      incrementParticipants: () => {
        set({
          participants: get().participants + 1,
        });
      },
      decrementParticipants: () => {
        set({
          participants: get().participants - 1,
        });
      },
      reset: () => {
        set({
          participants: 2,
          location: initialState.location,
        });
      },
    }))
  );
};

export const useCreateStore = (initialState: InitialState) => {
  // For SSR & SSG, always use a new store.
  if (typeof window === "undefined") {
    return () => initializeStore(initialState);
  }

  // For CSR, always re-use same store.
  store = store ?? initializeStore(initialState);
  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (initialState && store) {
      store.setState({
        ...store.getState(),
        ...initialState,
      });
    }
  }, [initialState]);

  return () => store;
};
