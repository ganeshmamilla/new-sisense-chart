import React, { useState, useEffect } from "react";
import { ThemeProvider, Chart } from "@sisense/sdk-ui";
import * as DM from "../Connected/sample-ecommerce";
import { Filter, measureFactory } from "@sisense/sdk-data";
import Header from "../Layout/Header";
import Legend from "../Utils/Legend";
import Datalabel from "../Utils/Datalabel";
import PieSubtype from "../Utils/Subtype/PieSubtype";
import Convolution from "../Utils/Convolution";
export default function Piechart() {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [legendEnabled, setLegendEnabled] = useState(false);
  const [labelEnabled, setLabelEnabled] = useState(false);
  const [, setPieEnabled] = useState(false);
  const [convolution, setConvolution] = useState(false);
  const [categories, setCategories] = useState(true);

  const [value, setValue] = useState(false);

  const [legendPosition, setLegendPosition] = useState<
    "top" | "left" | "right" | "bottom" | null
  >("bottom");

  const [subtypes, setSubtypes] = useState<
    "pie/classic" | "pie/donut" | "pie/ring"
  >("pie/classic");
  const [convotypes, setConvotypes] = useState<
    "byPercentage" | "bySlicesCount"
  >("bySlicesCount");
  const handleLegendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLegendEnabled(event.target.checked);
  };
  const handleLebelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelEnabled(event.target.checked);
  };
  const handleSubtypesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPieEnabled(event.target.checked);
  };
  const handleconvolutionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConvolution(event.target.checked);
  };
  const handleSubtypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubtypes(event.target.value as "pie/classic" | "pie/donut" | "pie/ring");
  };

  const handleconvolutionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConvotypes(event.target.value as "byPercentage" | "bySlicesCount");
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

  const handleLegendPositionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLegendPosition(
      event.target.value as "top" | "left" | "right" | "bottom" | null
    );
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
                chartType={"pie"}
                dataOptions={{
                  category: [DM.Commerce.Date.Years],
                  value: [measureFactory.sum(DM.Commerce.Revenue, "Revenue")],
                }}
                styleOptions={{
                  legend: { enabled: legendEnabled, position: legendPosition },
                  subtype: subtypes,
                  labels: {
                    enabled: labelEnabled,
                    categories: categories,
                    value: value,
                  },
                  dataLimits: {
                    seriesCapacity: 600,
                    categoriesCapacity: 8000000,
                  },
                  seriesLabels: {
                    enabled: true,
                    rotation: 40,
                  },
                  convolution: {
                    enabled: convolution,
                    selectedConvolutionType: convotypes,
                    minimalIndependentSlicePercentage: 20,
                    independentSlicesCount: 10,
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
            onLabelChange={handleLebelChange}
            onCategoriesChange={handleCategoryChange}
            onValueChange={handleValueChange}
          />
          <PieSubtype
            subtypePosition={subtypes}
            onLegendChange={handleSubtypesChange}
            onLegendPositionChange={handleSubtypeChange}
          />
          <Convolution
            ConvoEnabled={convolution}
            legendPosition={convotypes}
            onLegendChange={handleconvolutionChange}
            onLegendPositionChange={handleconvolutionsChange}
          />
        </div>
      </div>
    </div>
  );
}
