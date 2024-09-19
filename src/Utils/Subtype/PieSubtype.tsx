import React, { useState } from "react";
import {
  FormControl,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

interface PieSubtypeProps {
  subtypePosition: "pie/classic" | "pie/donut" | "pie/ring";
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PieSubtype({
  subtypePosition,
  onLegendPositionChange,
}: PieSubtypeProps) {
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
            value="pie/classic"
            control={<Radio size="small" />}
            label="Classic"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="pie/donut"
            control={<Radio size="small" />}
            label="Donut"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="pie/ring"
            control={<Radio size="small" />}
            label="Ring"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
        </RadioGroup>
      )}
    </FormControl>
  );
}
