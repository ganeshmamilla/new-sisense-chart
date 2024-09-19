import React, { useState } from "react";
import { ThemeProvider, AreamapChart } from "@sisense/sdk-ui";
import * as DM from "../Connected/sample-ecommerce";
import { Filter, measureFactory } from "@sisense/sdk-data";
import Header from "../Layout/Header";
import Areamaptype from "../Utils/Subtype/Areamaptype";
export default function Areamap() {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);

  const [, setBarEnabled] = useState(true);

  const [subtypes, setSubtypes] = useState<"world" | "usa">("world");

  const handleSubtypesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBarEnabled(event.target.checked);
  };

  const handleSubtypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubtypes(event.target.value as "world" | "usa");
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
              <AreamapChart
                dataSet={DM.DataSource}
                dataOptions={{
                  geo: [DM.Country.Country],
                  color: [measureFactory.sum(DM.Commerce.Revenue, "Revenue")],
                }}
                styleOptions={{
                  mapType: subtypes,

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
          <Areamaptype
            subtypePosition={subtypes}
            onLegendChange={handleSubtypesChange}
            onLegendPositionChange={handleSubtypeChange}
          />
        </div>
      </div>
    </div>
  );
}
