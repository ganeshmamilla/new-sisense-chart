import React, { useState } from "react";
import {
  FormControl,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

interface AreaSubtypeProps {
  subtypePosition:
    | "area/basic"
    | "area/stacked"
    | "area/stacked100"
    | "area/spline"
    | "area/stackedspline"
    | "area/stackedspline100"
    | undefined;
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AreaSubtype({
  subtypePosition,
  onLegendPositionChange,
}: AreaSubtypeProps) {
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
            value="area/basic"
            control={<Radio size="small" />}
            label="Basic"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="area/stacked"
            control={<Radio size="small" />}
            label="Stacked"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="area/stacked100"
            control={<Radio size="small" />}
            label="Stacked100"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="area/spline"
            control={<Radio size="small" />}
            label="Spline"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="area/stackedspline"
            control={<Radio size="small" />}
            label="Stackedspline"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="area/stackedspline100"
            control={<Radio size="small" />}
            label="Stackedspline100"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
        </RadioGroup>
      )}
    </FormControl>
  );
}
