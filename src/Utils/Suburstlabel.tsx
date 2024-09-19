import React from "react";
import { FormControl, Checkbox, FormControlLabel } from "@mui/material";

interface SurburstlabelProps {
  labelEnabled: boolean;

  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Surburstlabel({
  labelEnabled,

  onLegendChange,
}: SurburstlabelProps) {
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
                checked={labelEnabled}
                onChange={onLegendChange}
              />
            }
            label="Label"
            style={{ fontSize: "1px" }}
          />
        </div>
      </FormControl>
    </>
  );
}
