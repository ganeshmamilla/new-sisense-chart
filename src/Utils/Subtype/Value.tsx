import React from "react";
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";

interface ValueProps {

    valueEnabled: boolean;
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Value({ valueEnabled, onValueChange }: ValueProps) {
  return (
    <FormControl
      component="fieldset"
      style={{ fontSize: "6px", display: "flex", flexDirection: "row" }}
    >
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={valueEnabled} 
            onChange={onValueChange}
          />
        }
        label="Title"
        style={{ fontSize: "1px" }}
      />
    </FormControl>
  );
}
