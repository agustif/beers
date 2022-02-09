import type { AppProps } from "next/app";
import { grommet, Grommet } from "grommet";

import { useCreateStore, Provider } from "@/lib/store";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);
  return (
    <Provider createStore={createStore}>
      <Grommet theme={grommet}>
        <Component {...pageProps} />
      </Grommet>
    </Provider>
  );
}
