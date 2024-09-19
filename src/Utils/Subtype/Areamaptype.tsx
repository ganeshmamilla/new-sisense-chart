import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

interface AreamapProps {
  subtypePosition: "world" | "usa";
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Areamaptype({
  subtypePosition,
  onLegendPositionChange,
}: AreamapProps) {
  const [subtypeEnabled, setSubtypeEnabled] = useState(false);

  const handleSubtypeToggle = () => {
    setSubtypeEnabled(!subtypeEnabled);
  };

  return (
    <>
      <FormLabel component="legend">Play With Options</FormLabel>
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
          label="MapType"
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
              value="world"
              control={<Radio size="small" />}
              label="World"
              style={{ fontSize: "1px", marginRight: "10px" }}
            />
            <FormControlLabel
              value="usa"
              control={<Radio size="small" />}
              label="USA"
              style={{ fontSize: "1px", marginRight: "10px" }}
            />
          </RadioGroup>
        )}
      </FormControl>
    </>
  );
}
