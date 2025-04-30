import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Dashboard from "./pages/Dashboard/Dashboard.page.tsx";
import Layout from "./modules/Dashboard/Layout.tsx";
import About from "./pages/About/About.page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // children:[]
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
