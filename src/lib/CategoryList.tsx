import { useEffect, useState, } from "react";
import { Filter } from "@sisense/sdk-data";

interface CategoryListProps {
  label: string;
  categoryFilter: Filter[] | null;
  onSelect?: (selectedCategories: string[]) => void;
}

export default function CategoryList({ label, onSelect }: CategoryListProps) {

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [categoryAttribute, setCategoryAttribute] = useState<string[]>([]);
  const [displayedCategories, setDisplayedCategories] = useState<string[]>([]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchCategoryNames = async () => {
      try {
        const authToken =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjMyOWFmYzg3MjNhOTQwMDJlZmYxZTdjIiwiYXBpU2VjcmV0IjoiOWIwYmQ5NzYtNzQ2NC1kMjNlLTVmNjMtOTdhZGIyNDJlZDI0IiwiYWxsb3dlZFRlbmFudHMiOlsiNWZlZGVkNWFmYjFjZTIwMDFhMWQ5YmY4Il0sInRlbmFudElkIjoiNWZlZGVkNWFmYjFjZTIwMDFhMWQ5YmY4IiwiaWF0IjoxNzA2ODY4NzU4fQ.ItEtcHn8ey8iHBHRcZyFD3I2Runmo_c4oFmB7QVCzXM";

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
                  dim: "[Category.Category]",
                  title: "Category",
                  filter: {
                    $distinct: {
                      field: "[Category.Category]",
                    },
                  },
                },
              ],
            }),
          }
        );
        const data = await response.json();
        const categories = data.values.map((item: any[]) => item[0]);
        setCategoryAttribute(categories);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCategoryNames();
  }, []);

  const handleCheckboxChange = (
    category: string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    const target = e.target as HTMLInputElement | HTMLLabelElement;

    if (target instanceof HTMLInputElement) {
      const currentIndex = selectedCategories.indexOf(category);
      const newSelectedCategories = [...selectedCategories];
      if (currentIndex === -1) {
        newSelectedCategories.push(category);
      } else {
        newSelectedCategories.splice(currentIndex, 1);
      }
      setSelectedCategories(newSelectedCategories);
    } else if (target instanceof HTMLLabelElement) {
      const checkbox = target.previousSibling as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        const changeEvent = new Event("change", { bubbles: true });
        checkbox.dispatchEvent(changeEvent);
        const currentIndex = selectedCategories.indexOf(category);
        const newSelectedCategories = [...selectedCategories];
        if (currentIndex === -1) {
          newSelectedCategories.push(category);
        } else {
          newSelectedCategories.splice(currentIndex, 1);
        }
        setSelectedCategories(newSelectedCategories);
      }
    }
    e.stopPropagation();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    e.stopPropagation();
  };

  const handleSelectAllChange = () => {
    setSelectAllChecked(!selectAllChecked);
    const allCategories = categoryAttribute.map((category: string) => category);
    if (selectAllChecked) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(allCategories);
    }
  };

  const filteredCategories = categoryAttribute.filter((category: string) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (selectAllChecked) {
      setSelectAllChecked(false);
      setSelectedCategories([]);
    } else {
      if (selectedCategories.length > 0) {
        const lastSelectedCategory =
          selectedCategories[selectedCategories.length - 1];
        setSelectedCategories((prevSelected) =>
          prevSelected.filter((item) => item !== lastSelectedCategory)
        );
      }
    }
  };

  const handleDone = () => {
    setIsOpen(false);
    setDisplayedCategories(selectedCategories);

    if (onSelect) {
      onSelect(selectedCategories);
    }
  };

  let labelDisplay =
    displayedCategories.length > 0 ? displayedCategories.join(", ") : "Select";

  if (labelDisplay.length > 20) {
    labelDisplay = labelDisplay.substring(0, 20) + "...";
  }

  return (
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
          {labelDisplay || "Select"}
          <span className="arrow">&#9662;</span>
        </option>

        {isOpen && (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={selectAllChecked}
                onChange={handleSelectAllChange}
                onClick={(e) => e.stopPropagation()}
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
            <div
              className="options-container"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {filteredCategories.map((category: string) => (
                <div key={category}>
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={(e) => handleCheckboxChange(category, e)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label
                    htmlFor={category}
                    onClick={(e) => {
                      handleCheckboxChange(category, e);
                      e.stopPropagation();
                    }}
                  >
                    {category}
                  </label>
                </div>
              ))}
              <div
                className="bottom-buttons-container"
                style={{
                  position: "sticky",
                  bottom: "0",
                  backgroundColor: "ButtonShadow",
                }}
              >
                <button
                  onClick={(e) => handleCancel(e)}
                  className="button-style"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDone}
                  className="button-style"
                  style={{ marginLeft: "80px" }}
                >
                  Done
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
