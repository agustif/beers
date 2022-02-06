import {
  Box,
  CalendarType,
  CheckBox,
  DateInput,
  DropType,
  FormField,
} from "grommet";
import { FormSchedule } from "grommet-icons";
import { useState } from "react";

const dateInputStyle = {
  width: "280px",
  maxWidth: "320px",
  padding: "small",
};
const calendarProps: CalendarType = {
  size: "medium",
  alignSelf: "center",
  daysOfWeek: true,
  fill: true,
  bounds: [
    new Date().toISOString(),
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
  ],
};
const RangeOrDateInput = () => {
  const [checked, setChecked] = useState(false);

  const DynamicDate = () => {
    const label = "Which date" + (checked ? "s" : "") + "?";
    return (
      <FormField
        label={
          <Box direction="row" gap="small">
            <FormSchedule />
            {label}
          </Box>
        }
      >
        <CheckBox
          checked={checked}
          pad="small"
          label="Multiple day meeting"
          onChange={(event) => setChecked(event.target.checked)}
        />
        {checked ? (
          <DateInput
            size="large"
            inline={true}
            calendarProps={calendarProps}
            style={dateInputStyle}
            format={"mm/dd/yyyy-mm/dd/yyyy"}
            defaultValue={[
              new Date().toISOString(),
              new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
            ]}
            onChange={({ value }) => {}}
          />
        ) : (
          <DateInput
            size="large"
            inline={true}
            calendarProps={calendarProps}
            style={dateInputStyle}
            format={"mm/dd/yyyy"}
            defaultValue={new Date().toISOString()}
            onChange={({ value }) => {}}
          />
        )}
      </FormField>
    );
  };

  return (
    <>
      <DynamicDate />
    </>
  );
};

export { RangeOrDateInput };
