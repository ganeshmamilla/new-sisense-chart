import React, { useState } from "react";
import {
  FormControl,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

interface LineSubtypeProps {
  subtypePosition: "line/spline" | "line/basic" | undefined;
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LineSubtype({
  subtypePosition,
  onLegendPositionChange,
}: LineSubtypeProps) {
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
            value="line/spline"
            control={<Radio size="small" />}
            label="Spline"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="line/basic"
            control={<Radio size="small" />}
            label="Basic"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
        </RadioGroup>
      )}
    </FormControl>
  );
}
