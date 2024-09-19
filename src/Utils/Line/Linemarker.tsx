import React from "react";
import {
  FormControl,
  FormLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

interface LinemarkerProps {
  LineEnabled: boolean;
  LinePosition: "filled" | "hollow" | undefined;
  LineSize: "small" | "large" | undefined;
  onLegendChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLineChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLegendPositionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Linemarker({
  LineEnabled,
  LinePosition,
  LineSize,
  onLegendChange,
  onLineChange,
  onLegendPositionChange,
}: LinemarkerProps) {
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
                checked={LineEnabled}
                onChange={onLegendChange}
              />
            }
            label="Markers"
            style={{ fontSize: "1px" }}
          />
          {LineEnabled && (
            <RadioGroup
              row
              aria-label="Line-position"
              name="Line-position"
              value={LinePosition}
              onChange={onLegendPositionChange}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                value="filled"
                control={<Radio size="small" />}
                label="Filled"
                style={{ fontSize: "1px", marginRight: "10px" }}
              />
              <FormControlLabel
                value="hollow"
                control={<Radio size="small" />}
                label="Hollow"
                style={{ fontSize: "1px", marginRight: "10px" }}
              />
            </RadioGroup>
          )}
          
          {LineEnabled && (
            <>
             <FormLabel component="legend">Size</FormLabel>
            <RadioGroup
              row
              aria-label="Line-Size"
              name="Line-Size"
              value={LineSize}
              onChange={onLineChange}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <FormControlLabel
                value="small"
                control={<Radio size="small" />}
                label="Small"
                style={{ fontSize: "1px", marginRight: "10px" }}
              />
              <FormControlLabel
                value="large"
                control={<Radio size="small" />}
                label="Large"
                style={{ fontSize: "1px", marginRight: "10px" }}
              />
            </RadioGroup>
            </>
          )}
        </div>
      </FormControl>
    </>
  );
}
