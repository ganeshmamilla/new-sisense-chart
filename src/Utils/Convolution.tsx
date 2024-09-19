import React from "react";
import {
  FormControl,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

interface CovolutionProps {
  ConvoEnabled: boolean;
  legendPosition: "byPercentage" | "bySlicesCount";
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Convolution({
  ConvoEnabled,
  legendPosition,
  onLegendChange,
  onLegendPositionChange,
}: CovolutionProps) {
  return (
    <>
      <FormControl
        component="fieldset"
        style={{ fontSize: "6px", display: "flex", flexDirection: "row" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={ConvoEnabled}
                onChange={onLegendChange}
              />
            }
            label="Convolution"
            style={{ fontSize: "1px" }}
          />
          {ConvoEnabled && (
            <RadioGroup
              row
              aria-label="legend-position"
              name="legend-position"
              value={legendPosition}
              onChange={onLegendPositionChange}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                value="byPercentage"
                control={<Radio size="small" />}
                label="Percentage"
                style={{ fontSize: "1px", marginRight: "10px" }}
              />
              <FormControlLabel
                value="bySlicesCount"
                control={<Radio size="small" />}
                label="Slice Count"
                style={{ fontSize: "1px", marginRight: "10px" }}
              />
            </RadioGroup>
          )}
        </div>
      </FormControl>
    </>
  );
}
