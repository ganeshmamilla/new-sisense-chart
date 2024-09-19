import React from "react";
import {
  FormControl,
  FormLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

interface LegendProps {
  legendEnabled: boolean;
  legendPosition: "top" | "left" | "right" | "bottom" | null;
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Legend({
  legendEnabled,
  legendPosition,
  onLegendChange,
  onLegendPositionChange,
}: LegendProps) {
  return (
    <>
      <FormLabel component="legend">Play With Options</FormLabel>
      <FormControl
        component="fieldset"
        style={{ fontSize: "6px", display: "flex", flexDirection: "row" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={legendEnabled}
                onChange={onLegendChange}
              />
            }
            label="Legend"
            style={{ fontSize: "1px" }}
          />
          {legendEnabled && (
            <RadioGroup
              row
              aria-label="legend-position"
              name="legend-position"
              value={legendPosition}
              onChange={onLegendPositionChange}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                value="top"
                control={<Radio size="small" />}
                label="Top"
                style={{ fontSize: "1px", marginRight: "10px" }}
              />
              <FormControlLabel
                value="bottom"
                control={<Radio size="small" />}
                label="Bottom"
                style={{ fontSize: "1px", marginRight: "10px" }}
              />
              <FormControlLabel
                value="left"
                control={<Radio size="small" />}
                label="Left"
                style={{ fontSize: "1px", marginRight: "10px" }}
              />
              <FormControlLabel
                value="right"
                control={<Radio size="small" />}
                label="Right"
                style={{ fontSize: "1px", marginRight: "10px" }}
              />
            </RadioGroup>
          )}
        </div>
      </FormControl>
    </>
  );
}
