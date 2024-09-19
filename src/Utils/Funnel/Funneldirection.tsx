// Linewidth.tsx
import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
} from "@mui/material";

interface FunneldirectionProps {
  FunnelPosition: "regular" | "inverted";
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FunnelDirection({
  FunnelPosition,
  onLegendPositionChange,
}: FunneldirectionProps) {
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
        label="Direction"
        style={{ fontSize: "1px" }}
      />
      {subtypeEnabled && (
        <RadioGroup
          row
          aria-label="legend-position"
          name="legend-position"
          value={FunnelPosition || "regular"}
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
            value="inverted"
            control={<Radio size="small" />}
            label=" Inverted"
            style={{ fontSize: "1px", marginRight: "10px" }}
          />
        </RadioGroup>
      )}
    </FormControl>
  );
}
