import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
} from "@mui/material";

interface LinewidthProps {
  linewidthPosition: "thin" | "bold" | "thick";
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Linewidth({
  linewidthPosition,
  onLegendPositionChange,
}: LinewidthProps) {
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
        label="LineWidth"
        style={{ fontSize: "1px" }}
      />
      {subtypeEnabled && (
        <RadioGroup
          row
          aria-label="legend-position"
          name="legend-position"
          value={linewidthPosition || "thin"}
          onChange={onLegendPositionChange}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <FormControlLabel
            value="thin"
            control={<Radio size="small" />}
            label="Thin"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="bold"
            control={<Radio size="small" />}
            label="Bold"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="thick"
            control={<Radio size="small" />}
            label="Thick"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
        </RadioGroup>
      )}
    </FormControl>
  );
}
