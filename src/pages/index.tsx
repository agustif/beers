import React from "react";
import { Box } from "grommet";
import { DirectionType } from "grommet/utils";

import { Sidebar } from "@/components/Sidebar";
import { Forecast } from "@/components/Forecast";
import { DateInput } from "@/components/DateInput";
import { NumberInput } from "@/components/NumberInput";
import { GeocoderInput } from "@/components/GeocoderInput";

const layoutProps = {
  flex: true,
  direction: "row" as DirectionType,
  margin: { horizontal: "auto" },
  width: { max: "100%" },
  height: { max: "100%" },
};

const Home = () => {
  return (
    <Box {...layoutProps}>
      <Sidebar>
        <NumberInput />
        <GeocoderInput />
        <DateInput />
      </Sidebar>
      <Forecast />
    </Box>
  );
};

export default Home;
