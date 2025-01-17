import React, { useEffect, useState } from "react";
import { Filter, filterFactory } from "@sisense/sdk-data";
import * as DM from "../Connected/sample-ecommerce-autogenerated";

type Attribute = {
  [key: string]: any;
};

interface BrandListProps {
  label: string;
  brandFilter: Filter[] | null;
  onSelect?: (selectedOption: string[]) => void;
  onUpdateBrandFilter: (filter: Filter[]) => void;
}

export default function BrandList({ label, onSelect, onUpdateBrandFilter }: BrandListProps) {
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [BrandAttribute, setBrandAttribute] = useState<Attribute | null>(null);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    e.stopPropagation();
  };

  const brand = BrandAttribute || [];
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjMyOWFmYzg3MjNhOTQwMDJlZmYxZTdjIiwiYXBpU2VjcmV0IjoiOWIwYmQ5NzYtNzQ2NC1kMjNlLTVmNjMtOTdhZGIyNDJlZDI0IiwiYWxsb3dlZFRlbmFudHMiOlsiNWZlZGVkNWFmYjFjZTIwMDFhMWQ5YmY4Il0sInRlbmFudElkIjoiNWZlZGVkNWFmYjFjZTIwMDFhMWQ5YmY4IiwiaWF0IjoxNzA2ODY4NzU4fQ.ItEtcHn8ey8iHBHRcZyFD3I2Runmo_c4oFmB7QVCzXM";

  const fetchBrandNames = async () => {
    try {
      const response = await fetch(
        "https://bi.cestrategy.us/api/datasources/SampleECommerce/jaql",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            datasource: "Sample ECommerce",
            metadata: [
              {
                datatype: "text",
                dim: "[Brand.Brand]",
                title: "Brand",
                filter: {
                  $distinct: {
                    field: "[Brand.Brand]",
                  },
                },
              },
            ],
          }),
        }
      );
      const data = await response.json();
      const brands = data.values.map((item: any[]) => item[0]);
      console.log("Brands Data", brands);
      setBrandAttribute(brands);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchBrandNames();
  }, []);

  const handleSelect = (selectedOption: string) => {
    console.log("Selected Option:", selectedOption);
    setSelectedBrand([selectedOption]);
    setIsOpen(false);
    if (onSelect) {
      onSelect([selectedOption]);
    }
  };

  const handleSelectAll = () => {
    setSelectAllChecked(!selectAllChecked);
    const allBrands = brand.map((brand: string) => brand);
    if (selectAllChecked) {
      setSelectedBrand([]);
      onUpdateBrandFilter([]);
    } else {
      setSelectedBrand(allBrands);
      onUpdateBrandFilter([filterFactory.members(DM.Brand.Brand, allBrands)]);
    }
  };

  let labelDisplay = selectedBrand.length > 0 ? selectedBrand.join(", ") : "Select";
  if (labelDisplay.length > 0 && labelDisplay.length > 20) {
    labelDisplay = labelDisplay.substring(0, 20) + "...";
  }

  return (
    <>
      <div className="filter">
        <label className="label" onClick={toggleDropdown}>
          {label}
        </label>
        <div
          className={`select ${isOpen ? "open" : ""}`}
          style={{ width: "200px" }}
          onClick={toggleDropdown}
        >
          <option value="">
            {labelDisplay || "Select"} <span className="arrow">&#9662;</span>
          </option>
          {isOpen && (
            <>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={selectAllChecked}
                  onChange={handleSelectAll}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  onClick={(e) => e.stopPropagation()}
                  style={{ marginLeft: "10px", fontSize: "90%" }}
                />
              </div>
              <div className="options-container">
                {brand
                  .filter((brand: string) =>
                    brand.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((brand: string) => (
                    <div key={brand}>
                      <input
                        type="radio"
                        id={brand}
                        name="brand"
                        value={brand}
                        checked={selectedBrand.includes(brand)}
                        onChange={() => handleSelect(brand)}
                      />
                      <label
                        htmlFor={brand}
                        onClick={(e) => {
                          handleSelect(brand);
                          e.stopPropagation();
                        }}
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
