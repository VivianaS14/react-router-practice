import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, Planets, NotFound } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="*" element={<NotFound />} />
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
