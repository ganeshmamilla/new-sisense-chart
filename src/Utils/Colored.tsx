import React from "react";
import { FormControl, Checkbox, FormControlLabel } from "@mui/material";

interface ColoredProps {
  colorEnabled: boolean;

  onColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Colored({
  colorEnabled,

  onColorChange,
}: ColoredProps) {
  return (
    <>
      <FormControl
        component="fieldset"
        style={{ fontSize: "6px", display: "flex", flexDirection: "row" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={colorEnabled}
                onChange={onColorChange}
              />
            }
            label="Color"
            style={{ fontSize: "1px" }}
          />
        </div>
      </FormControl>
    </>
  );
}
