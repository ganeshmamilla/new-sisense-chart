import React, { useState, useEffect } from "react";
import { ThemeProvider, Chart } from "@sisense/sdk-ui";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel,
} from "@mui/material";
import * as DM from "../Connected/sample-ecommerce";
import { Filter, measureFactory } from "@sisense/sdk-data";
import Header from "../Layout/Header";
import Markers from "../Utils/Subtype/Markers";

export default function Scattermap() {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);

  const [, setBarEnabled] = useState(true);
  const [marker, setMarker] = useState<
    "filled" | "filled-light" | "hollow" | "hollow-bold" | undefined
  >(undefined);
  const [color, setColor] = useState<"green" | undefined>(undefined);
  const [binWidth, setBinWidth] = useState<number>(7);
  const [, setBins] = useState<number>(7);
  const [maxX] = useState<number>(0);
  const [minX] = useState<number>(0);

  const handleSubtypesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBarEnabled(event.target.checked);
  };

  const handleSubtypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarker(
      event.target.value as
        | "filled"
        | "filled-light"
        | "hollow"
        | "hollow-bold"
        | undefined
    );
  };

  const handleBinWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setBinWidth(value);
    }
  };

  useEffect(() => {
    const calculateBins = () => {
      const newNBins = (maxX - minX) / binWidth;
      setBins(newNBins);
    };

    calculateBins();
  }, [binWidth, maxX, minX]);

  useEffect(() => {
    const calculateMarkerSizes = () => {
      const defaultSize = binWidth;
      const minSize = binWidth;
      const maxSize = binWidth * 2;
      setMarkerSizes({ defaultSize, minSize, maxSize });
    };

    calculateMarkerSizes();
  }, [binWidth]);

  const [markerSizes, setMarkerSizes] = useState({
    defaultSize: binWidth,
    minSize: binWidth,
    maxSize: binWidth * 2,
  });

  return (
    <div style={{ marginTop: "-15px" }}>
      <Header onFiltersChange={setActiveFilters} />
      <div style={{ marginTop: "40px", display: "flex" }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            marginLeft: "25px",
          }}
        >
          <ThemeProvider>
            <div style={{ border: "1px solid #ccc", borderRadius: "5px" }}>
              <div
                style={{
                  borderBottom: "1px solid #ccc",
                  marginBottom: "20px",
                  backgroundColor: "#f2f2f2",
                  padding: "5px",
                }}
              >
                <h2 style={{ fontWeight: "bold", marginRight: "300px" }}>
                  Revenue and Cost Sum by Country
                </h2>
              </div>
              <Chart
                dataSet={DM.DataSource}
                chartType={"scattermap"}
                dataOptions={{
                  geo: [DM.Country.Country],
                  size: measureFactory.sum(DM.Commerce.Cost, "Size by Cost"),
                  colorBy: {
                    column: measureFactory.sum(
                      DM.Commerce.Revenue,
                      "Color by Revenue"
                    ),
                    color: color,
                  },
                  details: DM.Category.Category,
                }}
                styleOptions={{
                  markers: {
                    fill: marker,
                    size: markerSizes,
                  },
                  width: 600,
                  height: 300,
                }}
                filters={activeFilters}
              />
            </div>
          </ThemeProvider>
        </div>
        <div
          style={{
            paddingLeft: "130px",
            paddingTop: "30px",
            maxWidth: "1050px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormLabel component="legend">Play With Options</FormLabel>
          <FormControl
            component="fieldset"
            style={{
              fontSize: "6px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={color === "green"}
                  onChange={(e) =>
                    setColor(e.target.checked ? "green" : undefined)
                  }
                />
              }
              label="Color"
              style={{ fontSize: "1px" }}
            />
          </FormControl>
          <Markers
            subtypePosition={marker}
            onLegendChange={handleSubtypesChange}
            onLegendPositionChange={handleSubtypeChange}
          />

          <div>
            <label htmlFor="binWidth">Size:</label>
            <input
              className="inputs"
              type="number"
              id="binWidth"
              name="binWidth"
              value={binWidth}
              maxLength={3 as number}
              onChange={handleBinWidthChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
