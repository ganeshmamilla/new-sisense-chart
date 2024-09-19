import React from "react";
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";

interface CategoryProps {
  categoryEnabled: boolean;
  onCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Category({
  categoryEnabled,
  onCategoryChange,
}: CategoryProps) {
  return (
    <FormControl
      component="fieldset"
      style={{ fontSize: "6px", display: "flex", flexDirection: "row" }}
    >
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={categoryEnabled}
            onChange={onCategoryChange}
          />
        }
        label="Title"
        style={{ fontSize: "1px" }}
      />
    </FormControl>
  );
}
