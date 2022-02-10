import { Avatar, Box, FormField, Heading, Nav, Sidebar } from "grommet";
import React from "react";

import { NumberInput } from "@/components/NumberInput";
import { DateInput } from "@/components/DateInput";
import { GeocoderInput } from "@/components/GeocoderInput";
import { Clock } from "grommet-icons";
import { Forecast } from "@/components/Forecast";
const Home = () => {
  return (
    <Box
      flex
      direction="row"
      margin={{ horizontal: "auto" }}
      width={{ max: "100%" }}
      height={{ max: "100%" }}
      overflow={{ vertical: "scroll" }}
    >
      <Sidebar
        // elevation="large"
        height={{ height: "100vh" }}
        width={{ width: "400px", max: "420px", min: "280px" }}
        // height={{ min: "100%" }}
        background="brand"
        round="medium"
        header={
          <Box direction="row" align="center" gap="14px" alignSelf="center">
            <Avatar src="//upload.wikimedia.org/wikipedia/commons/9/9b/Emoji_u1f37b.svg" />
            <Heading>BEER UP!</Heading>
          </Box>
        }
      >
        <Nav gap="small">
          <NumberInput />
          <GeocoderInput />
          {/* <FormField
            contentProps={{ border: false }}
            label={
              <Box gap="small" direction="row">
                <Clock />
                One ore more days?
              </Box>
            }
          ></FormField> */}
          <DateInput />
        </Nav>
      </Sidebar>
      <Forecast />
    </Box>
  );
};

export default Home;
