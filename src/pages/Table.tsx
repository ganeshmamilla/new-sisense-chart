

import { useState } from "react";

import { Filter } from "@sisense/sdk-data";
import Header from "../Layout/Header";
import Tablee from "../Layout/Tablee";
export default function Table() {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);

  return (
    <>
      <div>
        <div
          className="MuiGrid-root MuiGrid-container css-1d3bbye"
          style={{
           
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: "7px",
              gap: "20px",
            }}
          ></div>
        </div>
        <div className="MuiBox-root css-1xz2tmc">
          <div
            className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb"
            style={{ }}
          ></div>
          <div style={{ marginTop: "-80px",marginLeft:"50px" }}>
            <div style={{marginTop:"10px",marginLeft:"-40px"}}>
              <Header onFiltersChange={setActiveFilters} />
              </div>
            <Tablee activeFilters={activeFilters} />
          </div>
        </div>
      </div>
    </>
  );
}
