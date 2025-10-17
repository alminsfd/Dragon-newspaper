import { createBrowserRouter } from "react-router";
import Header from "../Cpmponents/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Header
  },
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);