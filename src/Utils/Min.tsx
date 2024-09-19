import React from "react";

interface MinProps {
  minLabel: number | null;
  onMinChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Min = ({ minLabel, onMinChange }: MinProps) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <label htmlFor="min-label">Min:</label>
      <input
        type="number"
        id="min-label"
        value={minLabel ?? ""}
        onChange={onMinChange}
      />
    </div>
  );
};

export default Min;
