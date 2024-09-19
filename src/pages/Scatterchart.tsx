import React, { useState } from "react";
import { ThemeProvider, Chart } from "@sisense/sdk-ui";
import { FormLabel, Slider, Typography } from "@mui/material";
import * as DM from "../Connected/sample-ecommerce";
import { Filter } from "@sisense/sdk-data";
import Header from "../Layout/Header";
import Title from "../Utils/Title";
import Label from "../Utils/Label";
import Logarithmic from "../Utils/Logarithmic";

export default function Scatterchart() {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [xAxisTitleEnabled, setXAxisTitleEnabled] = useState(true);
  const [xAxisLabelsEnabled, setXAxisLabelsEnabled] = useState(true);
  const [xAxisLogarithmic, setXAxisLogarithmic] = useState(false);
  const [yAxisTitleEnabled, setYAxisTitleEnabled] = useState(true);
  const [yAxisLabelsEnabled, setYAxisLabelsEnabled] = useState(true);
  const [yAxisLogarithmic, setYAxisLogarithmic] = useState(false);
  const [markerSize, setMarkerSize] = useState(10);

  const handleXAxisTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setXAxisTitleEnabled(event.target.checked);
  };

  const handleYAxisTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setYAxisTitleEnabled(event.target.checked);
  };

  const handleXAxisLabelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setXAxisLabelsEnabled(event.target.checked);
  };
  const handleXAxisLogarithmicChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setXAxisLogarithmic(event.target.checked);
  };
  const handleYAxisLogarithmicChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setYAxisLogarithmic(event.target.checked);
  };

  const handleYAxisLabelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setYAxisLabelsEnabled(event.target.checked);
  };

  const handleMarkerSizeChange = (
    _event: Event,
    newValue: number | number[]
  ) => {
    setMarkerSize(newValue as number);
  };

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
                <h2 style={{ fontWeight: "bold", marginRight: "340px" }}>
                  Revenue Sum by Years
                </h2>
              </div>
              <Chart
                dataSet={DM.DataSource}
                chartType={"scatter"}
                dataOptions={{
                  x: DM.Commerce.Date.Years,
                  y: DM.Measures.SumRevenue,
                }}
                styleOptions={{
                  markerSize: {
                    scatterDefaultSize: markerSize,
                    scatterBubbleMinSize: 0,
                    scatterBubbleMaxSize: 200,
                  },
                  xAxis: {
                    title: {
                      enabled: xAxisTitleEnabled,
                      text: xAxisTitleEnabled ? "Year" : "",
                    },
                    labels: { enabled: xAxisLabelsEnabled },
                    logarithmic: xAxisLogarithmic,
                  },
                  yAxis: {
                    title: {
                      enabled: yAxisTitleEnabled,
                      text: yAxisTitleEnabled ? "Revenue" : "",
                    },
                    labels: { enabled: yAxisLabelsEnabled },
                    logarithmic: yAxisLogarithmic,
                  },
                  width: 550,
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
          <FormLabel component="legend">X-Axis</FormLabel>
          <Title
            labelEnabled={xAxisTitleEnabled}
            onTitleChange={handleXAxisTitleChange}
            name="x-axis-title"
          />
          <Label
            labelEnabled={xAxisLabelsEnabled}
            onLabelChange={handleXAxisLabelChange}
            name="x-axis-labels"
          />
          <Logarithmic
            labelEnabled={xAxisLogarithmic}
            onTitleChange={handleXAxisLogarithmicChange}
            name="x-axis-labels"
          />
          <FormLabel component="legend">Y-Axis</FormLabel>
          <Title
            labelEnabled={yAxisTitleEnabled}
            onTitleChange={handleYAxisTitleChange}
            name="y-axis-title"
          />
          <Label
            labelEnabled={yAxisLabelsEnabled}
            onLabelChange={handleYAxisLabelChange}
            name="y-axis-labels"
          />

          <Logarithmic
            labelEnabled={yAxisLogarithmic}
            onTitleChange={handleYAxisLogarithmicChange}
            name="x-axis-labels"
          />

          <Typography id="marker-size-slider" gutterBottom>
            Marker Size
          </Typography>
          <Slider
            value={markerSize}
            onChange={handleMarkerSizeChange}
            aria-labelledby="marker-size-slider"
            min={10}
            max={200}
            step={10}
          />
        </div>
      </div>
    </div>
  );
}
