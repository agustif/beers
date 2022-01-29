import Head from "next/head";

import { Anchor, Box, Heading } from "grommet";
import React from "react";
export default function Home() {
  return (
    <Box
      flex
      margin={{ horizontal: "auto" }}
      width={{ max: "xlarge" }}
      height={{ min: "100%" }}
    >
      <Box flex role="main" pad={{ vertical: "large" }}>
        <Heading>
          Welcome to <Anchor href="https://nextjs.org">BEER UP</Anchor> and{" "}
          <Anchor href="https://v2.grommet.io">Grommet!</Anchor>
        </Heading>
      </Box>
    </Box>
  );
}
