import {
  CalendarType,
  CheckBox,
  DateInput,
  DropType,
  FormField,
} from "grommet";
import { useState } from "react";

const dateInputStyle = { width: "300px", maxWidth: "320px", padding: "small" };
const calendarProps: CalendarType = {
  size: "medium",
  alignSelf: "center",
};
const RangeOrDateInput = () => {
  const [checked, setChecked] = useState(false);

  const DynamicDate = () => {
    const label = "Which date" + (checked ? "s" : "") + "?";
    return (
      <FormField label={label}>
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
      <CheckBox
        checked={checked}
        pad="small"
        label="More than one day"
        onChange={(event) => setChecked(event.target.checked)}
      />
      <DynamicDate />
    </>
  );
};

export { RangeOrDateInput };
