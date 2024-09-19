import React, { useState, useEffect,  } from "react";
import {
  ThemeProvider,
  Chart,
 
} from "@sisense/sdk-ui";
import { FormLabel } from "@mui/material";
import * as DM from "../Connected/sample-ecommerce";
import { Filter, measureFactory } from "@sisense/sdk-data";
import Header from "../Layout/Header";
import Legend from "../Utils/Legend";
import Title from "../Utils/Title";
import Label from "../Utils/Label";
import BarSubtype from "../Utils/Subtype/BarSubtype";
import Logarithmic from "../Utils/Logarithmic";

export default function BarChart() {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [legendEnabled, setLegendEnabled] = useState(false);
  const [, setBarEnabled] = useState(true);
  const [legendPosition, setLegendPosition] = useState<
    "top" | "left" | "right" | "bottom" | null
  >("bottom");
  const [subtypes, setSubtypes] = useState<
    "bar/classic" | "bar/stacked" | "bar/stacked100" | undefined
  >("bar/classic");
  const [chartKey, setChartKey] = useState(0);
  const [xAxisTitleEnabled, setXAxisTitleEnabled] = useState(true);
  const [xAxisLabelsEnabled, setXAxisLabelsEnabled] = useState(true);
  const [xAxisLogarithmic, setXAxisLogarithmic] = useState(false);
  const [yAxisTitleEnabled, setYAxisTitleEnabled] = useState(true);
  const [yAxisLabelsEnabled, setYAxisLabelsEnabled] = useState(true);
  const [yAxisLogarithmic, setYAxisLogarithmic] = useState(false);
 
  const handleLegendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLegendEnabled(event.target.checked);
  };

  const handleSubtypesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBarEnabled(event.target.checked);
  };

  const handleLegendPositionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLegendPosition(
      event.target.value as "top" | "left" | "right" | "bottom" | null
    );
  };

  const handleSubtypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubtypes(
      event.target.value as
        | "bar/classic"
        | "bar/stacked"
        | "bar/stacked100"
        | undefined
    );
    setChartKey((prevKey) => prevKey + 1);
  };
  useEffect(() => {
    setChartKey((prevKey) => prevKey + 1);
  }, [subtypes]);
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
    <div style={{marginTop:"-15px"}} >
    <Header onFiltersChange={setActiveFilters} />
    <div style={{  display: "flex" }}>
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          marginLeft: "25px",
          marginTop:"30px"
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
                <h2 style={{ fontWeight: "bold", marginRight: "230px" }}>
                  Revenue Sum by Years and AgeRange
                </h2>
              </div>
              <Chart
                key={chartKey}
                dataSet={DM.DataSource}
                chartType={"bar"}
                dataOptions={{
                  category: [DM.Commerce.Date.Years],
                  value: [
                    measureFactory
                      .sum(DM.Commerce.Revenue, "Revenue")
                      .format("$0,0"),
                   
                  ],
                  breakBy: [DM.Commerce.AgeRange],
                }}
                styleOptions={{
                  legend: { enabled: legendEnabled, position: legendPosition },
                  subtype: subtypes,

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
          <Legend
            legendEnabled={legendEnabled}
            legendPosition={legendPosition}
            onLegendChange={handleLegendChange}
            onLegendPositionChange={handleLegendPositionChange}
          />
          <BarSubtype
            subtypePosition={subtypes}
            onLegendChange={handleSubtypesChange}
            onLegendPositionChange={handleSubtypeChange}
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
          <Logarithmic
            labelEnabled={xAxisLogarithmic}
            onTitleChange={handleXAxisLogarithmicChange}
            name="x-axis-labels"
          />
          <FormLabel component="legend">Y-Axis</FormLabel>
          <Title
            labelEnabled={yAxisTitleEnabled}
            onTitleChange={handleYAxisTitleChange}
            name="x-axis-title"
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
         
        </div>
      </div>
    </div>
  );
}
