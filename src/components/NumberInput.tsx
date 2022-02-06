import { FormField, Box, Button } from "grommet";
import { SetStateAction, useState } from "react";
import { Group } from "grommet-icons";

const MIN_VALUE = 2;
const MAX_VALUE = 99;
const min = (
  value: number,
  setValue: { (value: SetStateAction<number>): void; (arg0: number): void }
) => {
  if (value <= MIN_VALUE) {
    window.alert("You can't have less than 2 people in a beer-ting");
  } else {
    setValue(value - 1);
  }
};

const max = (
  value: number,
  setValue: { (value: SetStateAction<number>): void; (arg0: number): void }
) => {
  if (value >= MAX_VALUE) {
    window.alert(
      "You can't have more than 99 people in a beer-ting, It's a party"
    );
  } else {
    setValue(value + 1);
  }
};

const minMax = (
  value: number,
  setValue: { (value: SetStateAction<number>): void; (arg0: number): void }
) => {
  if (value < MIN_VALUE) {
    window.alert(
      "You can't have less than 2 people in a beer-ting, It's a party"
    );
  } else if (value > MAX_VALUE) {
    window.alert(
      "You can't have more than 99 people in a beer-ting, It's a party"
    );
  } else {
    setValue(value);
  }
};

const NumberInput = ({}) => {
  const [value, setValue] = useState(2);
  const onKeyDown = (e: { key: string }) => {
    if (e.key == "ArrowUp" || e.key == "ArrowRight") {
      max(value, setValue);
    } else if (e.key == "ArrowDown" || e.key == "ArrowLeft") {
      min(value, setValue);
    }
  };
  return (
    <Box alignSelf="center" direction="row">
      <FormField
        contentProps={{ margin: "none", border: false, borderRadius: 20 }}
        props={{
          borderRadius: 20,
          border: false,
          borderBottom: 0,
        }}
        label={
          <Box direction="row" gap="small" pad="small">
            <Group />
            Participants
          </Box>
        }
        labelProps={{ margin: false }}
      >
        <Box direction="row" gap="small">
          <Button
            disabled={value <= 2}
            primary
            label="-"
            onClick={() => min(value, setValue)}
          />
          <input
            onKeyDown={onKeyDown}
            readOnly
            style={{
              color: "purple",
              fontWeight: 700,
              // paddingLeft: 5,
              fontSize: "1.2rem",
              width: 50,
              border: "#ccc solid 5px",
              borderRadius: 50,
              textAlign: "center",
            }}
            min="2"
            max="100"
            required
            type="number"
            onChange={(e) => minMax(parseInt(e.target.value), setValue)}
            value={value}
          />
          <Button
            disabled={value >= 99}
            primary
            label="+"
            onClick={() => max(value, setValue)}
          />
        </Box>
      </FormField>
    </Box>
  );
};
export { NumberInput };
