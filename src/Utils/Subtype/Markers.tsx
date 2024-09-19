import React, { useState } from "react";
import {
  FormControl,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

interface MarkersProps {
  subtypePosition:
    | "filled"
    | "filled-light"
    | "hollow"
    | "hollow-bold"
    | undefined;
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Markers({
  subtypePosition,
  onLegendPositionChange,
}: MarkersProps) {
  const [subtypeEnabled, setSubtypeEnabled] = useState(false);

  const handleSubtypeToggle = () => {
    setSubtypeEnabled(!subtypeEnabled);
  };

  return (
    <>
      <FormControl
        component="fieldset"
        style={{ fontSize: "6px", display: "flex", flexDirection: "row" }}
      >
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={subtypeEnabled}
              onChange={handleSubtypeToggle}
            />
          }
          label="Markers"
          style={{ fontSize: "1px" }}
        />
        {subtypeEnabled && (
          <RadioGroup
            row
            aria-label="legend-position"
            name="legend-position"
            value={subtypePosition}
            onChange={onLegendPositionChange}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel
              value="filled"
              control={<Radio size="small" />}
              label="Filled"
              style={{ fontSize: "1px", marginRight: "10px" }}
            />
            <FormControlLabel
              value="filled-light"
              control={<Radio size="small" />}
              label="Filled-Light"
              style={{ fontSize: "1px", marginRight: "10px" }}
            />
            <FormControlLabel
              value="hollow"
              control={<Radio size="small" />}
              label="Hollow"
              style={{ fontSize: "1px", marginRight: "10px" }}
            />
            <FormControlLabel
              value="hollow-bold"
              control={<Radio size="small" />}
              label="Hollow-Bold"
              style={{ fontSize: "1px", marginRight: "10px" }}
            />
          </RadioGroup>
        )}
      </FormControl>
    </>
  );
}
