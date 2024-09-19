import React, { useState } from "react";
import {
  FormControl,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

interface BarSubtypeProps {
  subtypePosition: "bar/classic" | "bar/stacked" | "bar/stacked100" | undefined;
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BarSubtype({
  subtypePosition,

  onLegendPositionChange,
}: BarSubtypeProps) {
  const [subtypeEnabled, setSubtypeEnabled] = useState(false);

  const handleSubtypeToggle = () => {
    setSubtypeEnabled(!subtypeEnabled);
  };

  return (
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
        label="SubType"
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
            value="bar/classic"
            control={<Radio size="small" />}
            label="Classic"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="bar/stacked"
            control={<Radio size="small" />}
            label="Stacked"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="bar/stacked100"
            control={<Radio size="small" />}
            label="Stacked100"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
        </RadioGroup>
      )}
    </FormControl>
  );
}
