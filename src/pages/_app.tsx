import type { AppProps } from "next/app";
import { grommet, Grommet } from "grommet";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={grommet}>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp;
