import React from "react";
const Home = React.lazy(() => import("./pages/Home"));
const Scatterchart = React.lazy(() => import("./pages/Scatterchart"));
const Barchart = React.lazy(() => import("./pages/Barchart"));
const Areachart = React.lazy(() => import("./pages/Areachart"));
const Piechart = React.lazy(() => import("./pages/Piechart"));
const Columnchart = React.lazy(() => import("./pages/ColumnsChart"));
const Funnelchart = React.lazy(() => import("./pages/Funnelchart"));
const Indicators = React.lazy(() => import("./pages/Indicators"));
const Polarchart = React.lazy(() => import("./pages/Polarchart"));
const Linechart = React.lazy(() => import("./pages/Linechart"));
const Table = React.lazy(() => import("./pages/Table"));
const AreaMap = React.lazy(() => import("./pages/AreaMap"));
const Scattermap = React.lazy(() => import("./pages/Scattermap"));
const Sunburstchart = React.lazy(() => import("./pages/Sunburstchart"));
const Treemap = React.lazy(() => import("./pages/Treemap"));
export const homeRoutes = [
  { path: "/", element: Home },
  { path: "/scatterChart", element: Scatterchart },
  { path: "/barchart", element: Barchart },
  { path: "/areachart", element: Areachart },
  { path: "/piechart", element: Piechart },
  { path: "/columnchart", element: Columnchart },
  { path: "/funnelchart", element: Funnelchart },
  { path: "/indicators", element: Indicators },
  { path: "/polarchart", element: Polarchart },
  { path: "/linechart", element: Linechart },
  { path: "/table", element: Table },
  { path: "/areamap", element: AreaMap },
  { path: "/scattermap", element: Scattermap },
  { path: "/sunburstchart", element: Sunburstchart },
  { path: "/treemap", element: Treemap },
];
