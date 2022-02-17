import {
  Box,
  CalendarType,
  CheckBox,
  DateInput as GrommetDateInput,
  FormField,
} from "grommet";
import { FormSchedule } from "grommet-icons";

import { useShallowStore } from "@/hooks/useShallowStore";
import { useEffect } from "react";

export const DateInput = () => {
  const { date, setDate, multipleDays, setMultipleDays, setBeers } =
    useShallowStore();

  useEffect(() => {
    setBeers();
  }, [date, multipleDays]);
  const setDateInput = ({ value }: { value: string | string[] }) =>
    setDate(value);

  const onSetMultipleDays = (event: { target: { checked: boolean } }) => {
    const boolean = event.target.checked;
    setMultipleDays(boolean);
    if (boolean) {
      setDate([]);
    } else if (!boolean) {
      setDate("");
    }
  };
  const RangeOrDateInput = () => {
    const label = "Which date" + (multipleDays ? "s" : "") + "?";
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
          checked={multipleDays}
          pad="small"
          label="Multiple day meeting"
          onChange={onSetMultipleDays}
        />
        {multipleDays ? (
          <GrommetDateInput
            value={date}
            onChange={setDateInput}
            format={"mm/dd/yyyy-mm/dd/yyyy"}
            {...dateInputDefaultProps}
          />
        ) : (
          <GrommetDateInput
            format={"mm/dd/yyyy"}
            value={date}
            onChange={setDateInput}
            {...dateInputDefaultProps}
          />
        )}
      </FormField>
    );
  };

  return <RangeOrDateInput />;
};

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
  // Free tier of open weather map api only gives 1 week data.
  // Could add statistical/historical data for dates without real forecast data.
  bounds: [
    new Date().toISOString(),
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
  ],
};
const dateInputDefaultProps = {
  size: "medium",
  inline: true,
  calendarProps: calendarProps,
  style: dateInputStyle,
};
