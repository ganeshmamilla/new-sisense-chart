// Linewidth.tsx
import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
} from "@mui/material";

interface FunnelsizeProps {
  Funnelsizel: "wide" | "regular" | "narrow";
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Funnelsize({
  Funnelsizel,
  onLegendPositionChange,
}: FunnelsizeProps) {
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
        label="Size"
        style={{ fontSize: "1px" }}
      />
      {subtypeEnabled && (
        <RadioGroup
          row
          aria-label="legend-position"
          name="legend-position"
          value={Funnelsizel || "regular"}
          onChange={onLegendPositionChange}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <FormControlLabel
            value="regular"
            control={<Radio size="small" />}
            label="Regular"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="wide"
            control={<Radio size="small" />}
            label="Wide"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
          <FormControlLabel
            value="narrow"
            control={<Radio size="small" />}
            label="Narrow"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
        </RadioGroup>
      )}
    </FormControl>
  );
}
