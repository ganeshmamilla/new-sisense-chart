import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { homeRoutes } from "../Routes";

interface RouteConfig {
  path: string;
  element: React.ComponentType<any>;
}

const Content = () => {
  return (
    <Routes>
      {homeRoutes.map((route: RouteConfig, idx: number) => (
        <Route
          key={idx}
          path={route.path}
          element={
            <React.Suspense fallback={<div></div>}>
              <route.element />
            </React.Suspense>
          }
        />
      ))}
      <Route path="/" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default React.memo(Content);
