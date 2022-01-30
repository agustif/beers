import { CheckBox } from "grommet";
import React from "react";

export default function Example() {
  const [checked, setChecked] = React.useState(true);
  return (
    <CheckBox
      checked={checked}
      label="interested?"
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}
