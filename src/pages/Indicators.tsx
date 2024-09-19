import { useState } from "react";
import {
  IndicatorChart,
  IndicatorStyleOptions,
  NumericBarIndicatorStyleOptions,
  NumericSimpleIndicatorStyleOptions,
  IndicatorComponents,
  ThemeProvider,
} from "@sisense/sdk-ui";
import arrow from "../assets/Green-Up-Arrow.svg.png";
import down from "../assets/darrow.png";
import { Filter, measureFactory } from "@sisense/sdk-data";
import Header from "../Layout/Header";
import { Grid } from "@mui/material";
import * as DM from "../Connected/sample-ecommerce";
export default function Indicators() {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);

  const getIndicatorStyleOptions = (
    title: string,
    secondaryTitle = ""
  ): IndicatorStyleOptions => {
    return {
      indicatorComponents: {
        title: {
          shouldBeShown: true,
          text: title,
        },
        secondaryTitle: {
          text: secondaryTitle,
        },
        ticks: {
          shouldBeShown: true,
        },
        labels: {
          shouldBeShown: true,
        },
      },
      subtype: "indicator/gauge",
      skin: 1,
    };
  };
  const [data] = useState([]);
  console.log("data", data);

  const indicatorComponents: IndicatorComponents = {
    title: {
      shouldBeShown: true,
      text: "Total Revenue",
    },
    secondaryTitle: {
      text: "Total Cost",
    },
    ticks: {
      shouldBeShown: true,
    },
    labels: {
      shouldBeShown: true,
    },
  };
  const numericSimpleIndicatorStyleOptions: NumericSimpleIndicatorStyleOptions =
    {
      subtype: "indicator/numeric",
      skin: "horizontal",
      numericSubtype: "numericSimple",
    };

  const numericBarIndicatorStyleOptions: NumericBarIndicatorStyleOptions = {
    subtype: "indicator/numeric",
    numericSubtype: "numericBar",
    indicatorComponents,
  };
  return (
    <>
      <div style={{ marginTop: "-15px" }}>
        <Header onFiltersChange={setActiveFilters} />

        <div style={{ marginTop: "40px", display: "flex" }}>
          <Grid spacing={2}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  maxWidth: "600px",

                  marginLeft: "25px",
                }}
              >
                <ThemeProvider>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        borderBottom: "1px solid #ccc",
                        marginBottom: "20px",
                        backgroundColor: "#f2f2f2",
                        padding: "5px",
                      }}
                    >
                      <h2 style={{ fontWeight: "bold", marginRight: "450px" }}>
                        Total Revenue
                      </h2>
                    </div>

                    <IndicatorChart
                      dataSet={DM.DataSource}
                      dataOptions={{
                        value: [measureFactory.sum(DM.Commerce.Revenue)],
                        min: [measureFactory.constant(0)],
                        max: [measureFactory.constant(250000)],
                      }}
                      filters={activeFilters}
                      styleOptions={numericSimpleIndicatorStyleOptions}
                    />
                    <img
                      src={arrow}
                      alt="Arrow Image"
                      style={{
                        position: "absolute",
                        top: "125px",
                        right: "85px",
                        width: "8%",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "135px",
                        right: "25px",
                      }}
                    >
                      62.8%
                    </span>
                  </div>
                </ThemeProvider>
              </div>
              <div style={{ width: "20px" }}></div>
              <div
                style={{
                  maxWidth: "600px",
                  margin: "auto",
                }}
              >
                <ThemeProvider>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        borderBottom: "1px solid #ccc",
                        marginBottom: "20px",
                        backgroundColor: "#f2f2f2",
                        padding: "5px",
                      }}
                    >
                      <h2 style={{ fontWeight: "bold", marginRight: "450px" }}>
                        Total Revenue
                      </h2>
                    </div>

                    <IndicatorChart
                      dataSet={DM.DataSource}
                      dataOptions={{
                        value: [measureFactory.sum(DM.Commerce.Revenue)],
                        min: [measureFactory.constant(0)],
                        max: [measureFactory.constant(250000)],
                      }}
                      filters={activeFilters}
                      styleOptions={numericSimpleIndicatorStyleOptions}
                    />
                    <img
                      src={down}
                      alt="Arrow Image"
                      style={{
                        position: "absolute",
                        top: "125px",
                        right: "100px",
                        width: "50px",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "140px",
                        right: "40px",
                      }}
                    >
                      27.8%
                    </span>
                  </div>
                </ThemeProvider>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}></div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  maxWidth: "600px",

                  marginLeft: "25px",
                }}
              >
                <ThemeProvider>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        borderBottom: "1px solid #ccc",
                        marginBottom: "20px",
                        backgroundColor: "#f2f2f2",
                        padding: "5px",
                      }}
                    >
                      <h2 style={{ fontWeight: "bold", marginRight: "450px" }}>
                        Total Revenue
                      </h2>
                    </div>

                    <IndicatorChart
                      dataSet={DM.DataSource}
                      dataOptions={{
                        value: [measureFactory.sum(DM.Commerce.Revenue)],
                        secondary: [],
                        min: [measureFactory.constant(0)],
                        max: [measureFactory.constant(100000)],
                      }}
                      filters={activeFilters}
                      styleOptions={getIndicatorStyleOptions("Total Revenue")}
                    />
                  </div>
                </ThemeProvider>
              </div>
              <div style={{ width: "20px" }}></div>
              <div
                style={{
                  maxWidth: "600px",
                }}
              >
                <ThemeProvider>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        borderBottom: "1px solid #ccc",
                        marginBottom: "20px",
                        backgroundColor: "#f2f2f2",
                        padding: "5px",
                      }}
                    >
                      <h2 style={{ fontWeight: "bold", marginRight: "380px" }}>
                        Total Revenue and Cost
                      </h2>
                    </div>

                    <IndicatorChart
                      dataSet={DM.DataSource}
                      dataOptions={{
                        value: [measureFactory.sum(DM.Commerce.Revenue)],
                        secondary: [measureFactory.sum(DM.Commerce.Cost)],
                        min: [measureFactory.constant(0)],
                        max: [measureFactory.constant(2500)],
                      }}
                      filters={activeFilters}
                      styleOptions={numericBarIndicatorStyleOptions}
                    />
                  </div>
                </ThemeProvider>
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
}
