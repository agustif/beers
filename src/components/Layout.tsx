import { Box } from "grommet";
import { DirectionType } from "grommet/utils";

const layoutProps = {
  flex: true,
  direction: "row" as DirectionType,
  margin: { horizontal: "auto" },
  width: { max: "100%" },
  height: { max: "100%" },
};

export const Layout = ({ children }: { children: JSX.Element[] }) => {
  return <Box {...layoutProps}>{children}</Box>;
};
