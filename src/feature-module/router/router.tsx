import React from "react";
import { Route, Routes } from "react-router";
import { authRoutes, publicRoutes, virtualRoute } from "./router.link";
import Feature from "../feature";
import AuthFeature from "../authFeature";

const ALLRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Feature />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        <Route element={<AuthFeature />}>
          {authRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {virtualRoute.map((route, idx) => (
          <Route path={route.path} element={route.element} key={idx} />
        ))}
      </Routes>
    </>
  );
};

export default ALLRoutes;
