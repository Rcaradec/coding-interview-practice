import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";

type CounterProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  count: number;
  increment: number;
  handleClick: () => void;
};

const Counter = ({
  inputRef,
  handleInputChange,
  count,
  increment,
  handleClick,
}: CounterProps) => {
  return (
    <>
      <Box>
        <Typography variant="h2">Counter</Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={3}
          marginBottom={6}
        >
          <TextField
            label="Saisissez un incrémenteur"
            placeholder="Incrémentation"
            type="number"
            name="incrementor"
            variant="outlined"
            inputRef={inputRef}
            onChange={handleInputChange}
          />
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" gap={3}>
          <Button variant="contained" onClick={handleClick}>
            Add by {increment}
          </Button>
          <Typography variant="h4">Count is {count}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Counter;
