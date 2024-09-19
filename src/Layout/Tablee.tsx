import React, { useState, useEffect, useCallback, useRef } from "react";
import { Table } from "@sisense/sdk-ui";
import * as DM from "../Connected/sample-ecommerce";
import {
  measureFactory,
  Attribute,
  BaseMeasure,
  Filter,
} from "@sisense/sdk-data";

interface TableeProps {
  activeFilters: Filter[];
}

export default function Tablee({ activeFilters }: TableeProps) {
  const [selectedColumns, setSelectedColumns] = useState<string[]>([
    "Country",
    "Revenue",
  ]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [filteredColumns, setFilteredColumns] = useState<
    (Attribute | BaseMeasure)[]
  >([]);

  const handleColumnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      setSelectedColumns((prevState) => {
        if (checked) {
          return [...prevState, value];
        } else {
          return prevState.filter((item) => item !== value);
        }
      });
    },
    []
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const filterColumns: Attribute[] = selectedColumns.flatMap((column) => {
      switch (column) {
        case "Country":
          return [DM.Country.Country];
        case "Category":
          return [DM.Category.Category];
        case "Brand":
          return [DM.Brand.Brand];
        case "Year":
          return [DM.Commerce.Date.Years];
        default:
          return [];
      }
    });

    const measureColumns: BaseMeasure[] = selectedColumns.flatMap((column) => {
      switch (column) {
        case "Cost":
          return [measureFactory.sum(DM.Commerce.Cost, "Cost")];
        case "AgeRange":
          return [
            measureFactory.countDistinct(DM.Commerce.AgeRange, "Age Range"),
          ];
        case "Revenue":
          return [measureFactory.sum(DM.Commerce.Revenue, "Revenue")];

        default:
          return [];
      }
    });

    const columns = [...filterColumns, ...measureColumns];
    setFilteredColumns(columns);
  }, [selectedColumns]);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const titleSize = 350 + selectedColumns.length * 125;

  return (
    <div style={{marginTop:"-15px"}} >
      <div style={{ display: "flex", marginTop: "100px" }}>
        <div>
          <div
            style={{
              position: "fixed",
              marginLeft: "750px",
              marginTop: "-114px",
              height: "150px",
              overflowY: "auto",
              maxHeight: "150px",
             zIndex:"1100",
            }}
          >
            <div ref={dropdownRef}>
              <label
                className="select"
                style={{ fontSize: "smaller" }}
                onClick={toggleOptions}
              >
                Show Columns <span className="arrow">&#9662;</span>
              </label>
            </div>
            {showOptions && (
              <div className="table-select">
                <div>
                  <input
                    type="checkbox"
                    id="country"
                    value="Country"
                    onChange={handleColumnChange}
                    checked={selectedColumns.includes("Country")}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor="country"
                    onClick={(e) => e.stopPropagation()}
                    style={{ paddingLeft: "5px" }}
                  >
                    Country
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="category"
                    value="Category"
                    onChange={handleColumnChange}
                    checked={selectedColumns.includes("Category")}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor="category"
                    onClick={(e) => e.stopPropagation()}
                    style={{ paddingLeft: "5px" }}
                  >
                    Category
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="brand"
                    value="Brand"
                    onChange={handleColumnChange}
                    checked={selectedColumns.includes("Brand")}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor="brand"
                    onClick={(e) => e.stopPropagation()}
                    style={{ paddingLeft: "5px" }}
                  >
                    Brand
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="year"
                    value="Year"
                    onChange={handleColumnChange}
                    checked={selectedColumns.includes("Year")}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor="year"
                    onClick={(e) => e.stopPropagation()}
                    style={{ paddingLeft: "5px" }}
                  >
                    Year
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="cost"
                    value="Cost"
                    onChange={handleColumnChange}
                    checked={selectedColumns.includes("Cost")}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor="cost"
                    onClick={(e) => e.stopPropagation()}
                    style={{ paddingLeft: "5px" }}
                  >
                    Cost
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="ageRange"
                    value="AgeRange"
                    onChange={handleColumnChange}
                    checked={selectedColumns.includes("AgeRange")}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor="ageRange"
                    onClick={(e) => e.stopPropagation()}
                    style={{ paddingLeft: "5px" }}
                  >
                    Age Range
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="revenue"
                    value="Revenue"
                    onChange={handleColumnChange}
                    checked={selectedColumns.includes("Revenue")}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor="revenue"
                    onClick={(e) => e.stopPropagation()}
                    style={{ paddingLeft: "5px" }}
                  >
                    Revenue
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginTop: "-60px",
          marginLeft: "-10px",
        }}
      >
        <div>
          <div
            style={{
              borderBottom: "1px solid #ccc",
              marginBottom: "36px",
              backgroundColor: "#f2f2f2",
              padding: "5px",
              whiteSpace: "nowrap",
              overflow: "auto",
              width: `${titleSize}px`,
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                marginRight: "600",
                position: "sticky",
                right: "0",
              }}
            >
              Dynamic Table
            </h2>
          </div>
          <div style={{ paddingLeft: "10px", paddingRight: "-150px" }}>
            <Table
              dataSet={DM.DataSource}
              dataOptions={{
                columns: filteredColumns,
              }}
              styleOptions={{
                headersColor: true,
                alternatingRowsColor: true,
                rowsPerPage: 16,
              }}
              filters={activeFilters}
              key={JSON.stringify(filteredColumns)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
