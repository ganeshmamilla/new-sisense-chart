import React, { useState } from "react";
import {
  FormControl,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

interface PolarSubtypeProps {
  subtypePosition: "polar/column" | "polar/area" | "polar/line";
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PolarSubtype({
  subtypePosition,

  onLegendPositionChange,
}: PolarSubtypeProps) {
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
            value="polar/column"
            control={<Radio size="small" />}
            label="Column"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="polar/area"
            control={<Radio size="small" />}
            label="Area"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="polar/line"
            control={<Radio size="small" />}
            label="Line"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
        </RadioGroup>
      )}
    </FormControl>
  );
}
