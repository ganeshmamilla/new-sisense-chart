import React, { useState } from "react";
import { ThemeProvider, Chart } from "@sisense/sdk-ui";
import { FormLabel } from "@mui/material";
import * as DM from "../Connected/sample-ecommerce";
import { Filter, measureFactory } from "@sisense/sdk-data";
import Header from "../Layout/Header";
import Legend from "../Utils/Legend";
import Title from "../Utils/Title";
import Label from "../Utils/Label";
import LineSubtype from "../Utils/Subtype/LineSubtype";
import Linewidth from "../Utils/Linewidth";
import Linemarker from "../Utils/Line/Linemarker";
export default function linechart() {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [legendEnabled, setLegendEnabled] = useState(false);
  const [lineEnabled, setLineEnabled] = useState(false);
  const [, setBarEnabled] = useState(true);
  const [, setLineswidth] = useState(true);
  const [legendPosition, setLegendPosition] = useState<
    "top" | "left" | "right" | "bottom" | null
  >(null);
  const [subtypes, setSubtypes] = useState<
    "line/spline" | "line/basic" | undefined
  >(undefined);
  const [lineposition, setLineposition] = useState<
    "filled" | "hollow" | undefined
  >(undefined);
  const [linesize, setLinesize] = useState<"small" | "large" | undefined>(
    undefined
  );
  const [linewidth, setLinewidth] = useState<"thin" | "bold" | "thick">("thin");
  const [xAxisTitleEnabled, setXAxisTitleEnabled] = useState(true);
  const [xAxisLabelsEnabled, setXAxisLabelsEnabled] = useState(true);
  const [yAxisTitleEnabled, setYAxisTitleEnabled] = useState(true);
  const [yAxisLabelsEnabled, setYAxisLabelsEnabled] = useState(true);

  const handleLegendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLegendEnabled(event.target.checked);
  };
  const handleLineEnableChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLineEnabled(event.target.checked);
  };

  const handleSubtypesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBarEnabled(event.target.checked);
  };
  const handleLineswithChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLineswidth(event.target.checked);
  };
  const handleLegendPositionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLegendPosition(
      event.target.value as "top" | "left" | "right" | "bottom" | null
    );
  };

  const handleSubtypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubtypes(event.target.value as "line/spline" | "line/basic" | undefined);
  };

  const handleLineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLineposition(event.target.value as "filled" | "hollow" | undefined);
  };
  const handleLinesizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinesize(event.target.value as "small" | "large" | undefined);
  };

  const handleLinewidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLinewidth(event.target.value as "thin" | "bold" | "thick");
  };
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
  const handleYAxisLabelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setYAxisLabelsEnabled(event.target.checked);
  };

  return (
    <div style={{ marginTop: "-15px" }}>
      <Header onFiltersChange={setActiveFilters} />
      <div style={{ display: "flex" }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            marginLeft: "25px",
            marginTop: "30px",
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
                chartType={"line"}
                dataOptions={{
                  category: [DM.Commerce.Date.Years],
                  value: [measureFactory.sum(DM.Commerce.Revenue, "Revenue")],
                }}
                styleOptions={{
                  legend: { enabled: legendEnabled, position: legendPosition },
                  subtype: subtypes,
                  lineWidth: { width: linewidth },

                  markers: {
                    enabled: lineEnabled,
                    fill: lineposition,
                    size: linesize,
                  },
                  xAxis: {
                    title: {
                      enabled: xAxisTitleEnabled,
                      text: xAxisTitleEnabled ? "Year" : "",
                    },
                    labels: { enabled: xAxisLabelsEnabled },
                  },
                  yAxis: {
                    title: {
                      enabled: yAxisTitleEnabled,
                      text: yAxisTitleEnabled ? "Revenue" : "",
                    },

                    labels: { enabled: yAxisLabelsEnabled },
                    templateMainYHasGridLines: true,
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
            paddingLeft: "150px",
            paddingTop: "30px",
            maxWidth: "1050px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Legend
            legendEnabled={legendEnabled}
            legendPosition={legendPosition}
            onLegendChange={handleLegendChange}
            onLegendPositionChange={handleLegendPositionChange}
          />
          <LineSubtype
            subtypePosition={subtypes}
            onLegendChange={handleSubtypesChange}
            onLegendPositionChange={handleSubtypeChange}
          />
          <Linewidth
            linewidthPosition={linewidth}
            onLegendChange={handleLineswithChange}
            onLegendPositionChange={handleLinewidthChange}
          />
          <Linemarker
            LineEnabled={lineEnabled}
            LinePosition={lineposition}
            LineSize={linesize}
            onLegendChange={handleLineEnableChange}
            onLineChange={handleLinesizeChange}
            onLegendPositionChange={handleLineChange}
          />
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
        </div>
      </div>
    </div>
  );
}
