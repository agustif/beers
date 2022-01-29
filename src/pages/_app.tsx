import type { AppProps } from "next/app";

import { grommet, Grommet } from "grommet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={grommet}>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp;
