import { useState } from "react";
import NavigationItem from "./components/NavigationItem";

export default function SidebarNavigation() {
  const [showSubMenu, setShowSubMenu] = useState(true);

  return (
    <div
      className="fixed top-0 z-10 md:static w-full md:w-64 h-screen bg-black text-gray-900 overflow-auto"
      style={{ position: "sticky" }}
    >
      <nav className="mt-1 mb-1">
        <ul>
          <NavigationItem href="/" text="Dashboard" />
          <li>
            <label
              className="text-white"
              style={{ marginLeft: "16px" }}
              onClick={() => setShowSubMenu(!showSubMenu)}
            >
              Sisense Charts
              {showSubMenu ? (
                <span className="arrow">&#9662;</span>
              ) : (
                <span className="arrow">&#9656;</span>
              )}
            </label>

            {showSubMenu && (
              <ul style={{ paddingLeft: "10px" }}>
                <NavigationItem href="/barchart" text="Bar Chart" />
                <NavigationItem href="/areachart" text="Area Chart" />
                <NavigationItem href="/funnelchart" text="Funnel Chart" />
                <NavigationItem href="/linechart" text="Line Chart" />
                <NavigationItem href="/piechart" text="Pie Chart" />
                <NavigationItem href="/polarchart" text="Polar Chart" />
                <NavigationItem href="/scatterchart" text="Scatter Chart" />
                <NavigationItem href="/indicators" text="Indicator" />
                <NavigationItem href="/columnchart" text="Column Chart" />
                <NavigationItem href="/table" text="Table" />
                <NavigationItem href="/areamap" text="Area Map" />
                <NavigationItem href="/sunburstchart" text="Sunburst Chart" />
                <NavigationItem href="/scattermap" text="Scatter Map" />
                <NavigationItem href="/treemap" text="Tree Map" />
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
