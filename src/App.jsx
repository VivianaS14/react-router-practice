import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, Planets, NotFound, PlanetDetail } from "./pages";
import { Navbar } from "./layout";
import config from "./config";

const { routes } = config;

/* Creamos una ruta madre que va a ser el nabvar y que ella renderizara las demas paginas */
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.HOME} element={<Navbar />}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PLANETS} element={<Planets />} />
        <Route path={`${routes.PLANETS}/:id`} element={<PlanetDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

/* <Home />
      <Planets />
      <NotFound /> */
