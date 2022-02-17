import { FormField, Box, Button } from "grommet";
import { Group } from "grommet-icons";

import { useShallowStore } from "@/hooks/useShallowStore";
import { useEffect } from "react";

export const NumberInput = () => {
  const {
    participants,
    incrementParticipants,
    decrementParticipants,
    setParticipants,
    setBeers,
  } = useShallowStore();

  useEffect(() => {
    setBeers();
  }, [participants]);
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
            disabled={participants <= 2}
            primary
            label="-"
            onClick={decrementParticipants}
          />
          <input
            style={{
              color: "purple",
              fontWeight: 700,
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
            onChange={(e) => setParticipants(parseInt(e.target.value))}
            value={participants}
          />
          <Button
            disabled={participants >= 99}
            primary
            label="+"
            onClick={incrementParticipants}
          />
        </Box>
      </FormField>
    </Box>
  );
};
