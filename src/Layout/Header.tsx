import React, { useState } from "react";
import { DateRangeFilterTile } from "@sisense/sdk-ui";
import CountryList from "../lib/CountryList";
import { Filter, filterFactory } from "@sisense/sdk-data";
import * as DM from "../Connected/sample-ecommerce";
interface HeaderProps {
  onFiltersChange: (filters: Filter[]) => void;
}
const Header: React.FC<HeaderProps> = ({ onFiltersChange }) => {
  const [countryFilter, setCountryFilter] = useState<Filter[]>([]);

  const [dateRangeFilter, setDateRangeFilter] = useState(
    filterFactory.dateRange(DM.Commerce.Date.Months)
  );
  const [, setSelectedFilters] = useState<Filter[]>([]);
  const handleSubmit = () => {
    const filters = [...countryFilter, dateRangeFilter];
    setSelectedFilters(filters);
    onFiltersChange(filters);
  };

  return (
    <>
      <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorInherit MuiAppBar-positionSticky css-lbx5nu">
        <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-jlybhy">
          <div className="MuiBox-root css-1n8f1nf">
            <div
              className="filters-container"
              style={{
                display: "flex",

                height: "0px",
              }}
            >
              <div></div>
              <label
                className=""
                onMouseDown={(e) => e.preventDefault()}
                style={{
                  marginTop: "-2px",
                  color: "#3498db",
                  fontWeight: "bold",
                  paddingLeft: "11px",
                }}
              >
                Country
              </label>
              <CountryList
                countryFilter={countryFilter}
                onSelect={(country) => {
                  setCountryFilter(
                    country && country.length > 0
                      ? [filterFactory.members(DM.Country.Country, country)]
                      : []
                  );
                }}
                onUpdateCountryFilter={setCountryFilter}
              />

              <div className="grid">
                <DateRangeFilterTile
                  title="Date Range"
                  dataSource={DM.DataSource}
                  attribute={DM.Commerce.Date.Months}
                  filter={dateRangeFilter}
                  onChange={(filter) => {
                    setDateRangeFilter(filter);
                  }}
                />
              </div>
              <div className="button button-container ">
                <button
                  onClick={handleSubmit}
                  style={{
                    fontSize: "smaller",
                    padding: "2px 20px",
                    marginTop: "-38px",
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
