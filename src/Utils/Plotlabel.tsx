import React from "react";

interface PlotLabelProps {
  plotLabel: number | null;
  onPlotChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlotLabel = ({ plotLabel, onPlotChange }: PlotLabelProps) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <label htmlFor="plot-label">Plot Label:</label>
      <input
        type="number"
        id="plot-label"
        value={plotLabel ?? ""}
        onChange={onPlotChange}
      />
    </div>
  );
};

export default PlotLabel;
