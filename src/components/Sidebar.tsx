import React, { ReactChild } from "react";
import { Nav, Sidebar as GrommetSidebar } from "grommet";

import { Logo } from "./Logo";

export const Sidebar = ({ children }: { children: ReactChild[] }) => {
  return (
    <GrommetSidebar
      height={{ height: "100vh" }}
      width={{ width: "400px", max: "420px", min: "280px" }}
      background="brand"
      round="medium"
      header={<Logo />}
    >
      <Nav gap="small">{children}</Nav>
    </GrommetSidebar>
  );
};
