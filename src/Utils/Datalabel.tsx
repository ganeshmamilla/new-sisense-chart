import React from "react";
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";

interface DatalabelProps {
  labelEnabled: boolean;
  categories: boolean;
  value: boolean;
  onLabelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoriesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Datalabel: React.FC<DatalabelProps> = ({
  labelEnabled,
  categories,
  value,
  onLabelChange,
  onCategoriesChange,
  onValueChange,
}: DatalabelProps) => {
  return (
    <FormControl
      component="fieldset"
      style={{ fontSize: "14px", display: "flex", flexDirection: "row" }}
    >
      <FormControlLabel
        control={<Checkbox size="small" checked={labelEnabled} onChange={onLabelChange} />}
        label="Label"
      />
      {labelEnabled && (
        <>
          <FormControlLabel
            control={<Checkbox size="small" checked={categories} onChange={onCategoriesChange} />}
            label="Categories"
           
          />
          <FormControlLabel
            control={<Checkbox size="small" checked={value} onChange={onValueChange} />}
            label="Value"
          
          />
        </>
      )}
    </FormControl>
  );
};

export default Datalabel;
