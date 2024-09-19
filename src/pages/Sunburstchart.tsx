import React, { useState, useEffect } from "react";
import { ThemeProvider, Chart } from "@sisense/sdk-ui";
import { Filter, measureFactory } from "@sisense/sdk-data";
import Header from "../Layout/Header";
import Legend from "../Utils/Legend";
import Surburstlabel from "../Utils/Suburstlabel";
import Tooltip from "../Utils/Tooltip";
import * as DM from "../Connected/sample-ecommerce";

export default function Sunburstchart() {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [legendEnabled, setLegendEnabled] = useState(false);
  const [, setBarEnabled] = useState(true);
  const [labelEnabled, setLabelEnabled] = useState(false);
  const [legendPosition, setLegendPosition] = useState<
    "top" | "left" | "right" | "bottom" | null
  >("bottom");
  const [tooltip, setTooltip] = useState<"value" | "contribution" | undefined>(
    undefined
  );
  const [chartKey, setChartKey] = useState(0);

  const handleLegendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLegendEnabled(event.target.checked);
  };

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelEnabled(event.target.checked);
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
    setTooltip(event.target.value as "value" | "contribution" | undefined);
    setChartKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    setChartKey((prevKey) => prevKey + 1);
  }, [tooltip]);

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
                key={chartKey}
                dataSet={DM.DataSource}
                chartType={"sunburst"}
                dataOptions={{
                  category: [DM.Commerce.Date.Years],
                  value: [
                    measureFactory
                      .sum(DM.Commerce.Revenue, "Revenue")
                      .format("$"),
                  ],
                }}
                styleOptions={{
                  legend: { enabled: legendEnabled, position: legendPosition },
                  tooltip: {
                    mode: tooltip,
                  },
                  labels: {
                    category: [
                      {
                        enabled: labelEnabled,
                      },
                    ],
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
          <Tooltip
            subtypePosition={tooltip}
            onLegendChange={handleSubtypesChange}
            onLegendPositionChange={handleSubtypeChange}
          />
          <Surburstlabel
            labelEnabled={labelEnabled}
            onLegendChange={handleLabelChange}
          />
        </div>
      </div>
    </div>
  );
}
