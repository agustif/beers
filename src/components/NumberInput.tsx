import { FormField, Box, Button } from "grommet";
import shallow from "zustand/shallow";
import { Group } from "grommet-icons";

import { useStore } from "@/lib/store";
const useCounter = () => {
  const {
    participants,
    setParticipants,
    incrementParticipants,
    decrementParticipants,
    reset,
  } = useStore(
    (store) => ({
      participants: store.participants,
      setParticipants: store.setParticipants,
      incrementParticipants: store.incrementParticipants,
      decrementParticipants: store.decrementParticipants,
      reset: store.reset,
    }),
    shallow
  );

  return {
    participants,
    setParticipants,
    incrementParticipants,
    decrementParticipants,
    reset,
  };
};

const NumberInput = () => {
  const {
    participants,
    incrementParticipants,
    decrementParticipants,
    setParticipants,
    reset,
  } = useCounter();

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
export { NumberInput };
