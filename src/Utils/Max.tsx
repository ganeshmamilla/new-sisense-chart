import React from "react";

interface MaxProps {
  maxLabel: number | null;
  onMaxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Max = ({ maxLabel, onMaxChange }: MaxProps) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <label htmlFor="max-label">Max:</label>
      <input
        type="number"
        id="max-label"
        value={maxLabel ?? ""}
        onChange={onMaxChange}
      />
    </div>
  );
};

export default Max;
