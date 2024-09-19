import React, { useState, useEffect } from "react";
import { ThemeProvider, Chart } from "@sisense/sdk-ui";
import * as DM from "../Connected/sample-ecommerce";
import { Filter, measureFactory } from "@sisense/sdk-data";
import Header from "../Layout/Header";
import Legend from "../Utils/Legend";
import Datalabel from "../Utils/Datalabel";
import Funneltype from "../Utils/Funnel/Funneltype";
import FunnelDirection from "../Utils/Funnel/Funneldirection";
import Funnelsize from "../Utils/Funnel/Funnelsize";
export default function Funnelchart() {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [legendEnabled, setLegendEnabled] = useState(false);
  const [labelEnabled, setLabelEnabled] = useState(false);
  const [categories, setCategories] = useState(true);
  const [value, setValue] = useState(false);
  const [, setFunnels] = useState(true);
  const [, setFunneldir] = useState(true);
  const [, setFunnelsizes] = useState(true);
  const [legendPosition, setLegendPosition] = useState<
    "top" | "left" | "right" | "bottom" | null
  >("bottom");
  const [funneltypes, setFunneltypes] = useState<"regular" | "pinched">(
    "regular"
  );
  const [funneldirection, setFunneldirection] = useState<
    "regular" | "inverted"
  >("regular");
  const [funnelsize, setFunnelsize] = useState<"wide" | "regular" | "narrow">(
    "regular"
  );

  const handleLegendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLegendEnabled(event.target.checked);
  };
  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelEnabled(event.target.checked);
  };
  const [chartKey, setChartKey] = useState(0);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategories(event.target.checked);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  };

  useEffect(() => {
    setChartKey((prevKey) => prevKey + 1);
  }, [categories, value]);

  const handlefunneltypesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFunnels(event.target.checked);
  };
  const handlefunneldirChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFunneldir(event.target.checked);
  };
  const handlefunnelsiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFunnelsizes(event.target.checked);
  };
  const handleLegendPositionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLegendPosition(
      event.target.value as "top" | "left" | "right" | "bottom" | null
    );
  };

  const handlefunneltypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFunneltypes(event.target.value as "regular" | "pinched");
  };
  const handlefunneldirectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFunneldirection(event.target.value as "regular" | "inverted");
  };
  const handlefunnelsizeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFunnelsize(event.target.value as "wide" | "regular" | "narrow");
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
                key={chartKey}
                dataSet={DM.DataSource}
                chartType={"funnel"}
                dataOptions={{
                  category: [DM.Commerce.Date.Years],
                  value: [measureFactory.sum(DM.Commerce.Revenue, "Revenue")],
                }}
                styleOptions={{
                  legend: { enabled: legendEnabled, position: legendPosition },
                  funnelType: funneltypes,
                  funnelDirection: funneldirection,
                  funnelSize: funnelsize,

                  labels: {
                    enabled: labelEnabled,
                    categories: categories,
                    value: value,
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
          <Datalabel
            labelEnabled={labelEnabled}
            categories={categories}
            value={value}
            onLabelChange={handleLabelChange}
            onCategoriesChange={handleCategoryChange}
            onValueChange={handleValueChange}
          />

          <Funneltype
            FunnelPosition={funneltypes}
            onLegendChange={handlefunneltypesChange}
            onLegendPositionChange={handlefunneltypeChange}
          />
          <FunnelDirection
            FunnelPosition={funneldirection}
            onLegendChange={handlefunneldirChange}
            onLegendPositionChange={handlefunneldirectionChange}
          />
          <Funnelsize
            Funnelsizel={funnelsize}
            onLegendChange={handlefunnelsiChange}
            onLegendPositionChange={handlefunnelsizeChange}
          />
        </div>
      </div>
    </div>
  );
}
