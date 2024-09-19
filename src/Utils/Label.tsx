import React from "react";
import { FormControl, Checkbox, FormControlLabel } from "@mui/material";

interface LabelProps {
  labelEnabled: boolean;
  onLabelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: String;
}

export default function Label({ labelEnabled, onLabelChange }: LabelProps) {
  return (
    <FormControl
      component="fieldset"
      style={{ fontSize: "6px", display: "flex", flexDirection: "row" }}
    >
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={labelEnabled}
            onChange={onLabelChange}
          />
        }
        label="Label"
        style={{ fontSize: "1px" }}
      />
    </FormControl>
  );
}
