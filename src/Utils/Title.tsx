import React from "react";
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";

interface TitleProps {
    name: String;
  labelEnabled: boolean;
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Title({ labelEnabled, onTitleChange }: TitleProps) {
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
            onChange={onTitleChange}
          />
        }
        label="Title"
        style={{ fontSize: "1px" }}
      />
    </FormControl>
  );
}
