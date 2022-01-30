import Head from "next/head";
import { NumberInput } from "@/components/NumberInput";
import { RangeOrDateInput } from "@/components/DateInput";

import {
  Anchor,
  Avatar,
  Box,
  Button,
  CheckBox,
  FormField,
  Heading,
  Nav,
  Sidebar,
} from "grommet";
import React from "react";
export default function Home() {
  return (
    <Box
      flex
      direction="row"
      margin={{ horizontal: "auto" }}
      width={{ max: "100%" }}
      height={{ min: "100%" }}
    >
      <Sidebar
        width={{ max: "100%", min: "300px" }}
        height={{ min: "100%" }}
        background="brand"
        round="medium"
        header={
          <Box direction="row" align="center" gap="14px" alignSelf="center">
            <Avatar src="//upload.wikimedia.org/wikipedia/commons/9/9b/Emoji_u1f37b.svg" />
            <Heading>BEER UP!</Heading>
          </Box>
        }
        // footer={<Button hoverIndicator />}
      >
        <Nav gap="small">
          <NumberInput />
          <FormField
            contentProps={{ border: false }}
            label="One ore more days?"
          >
            <RangeOrDateInput />
          </FormField>
          {/* <Button hoverIndicator />
          <Button hoverIndicator /> */}
        </Nav>
      </Sidebar>
      {/* <Box flex role="main" pad={{ vertical: "large" }}>
        <Heading>
          Welcome to <Anchor href="https://nextjs.org">BEER UP</Anchor> and{" "}
          <Anchor href="https://v2.grommet.io">Grommet!</Anchor>
        </Heading>
      </Box> */}
    </Box>
  );
}
