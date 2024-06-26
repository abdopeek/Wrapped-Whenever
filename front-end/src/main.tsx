import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SixMonth from "./pages/SixMonth";

const router = createBrowserRouter([
  {path: '/', element: <Homepage />},
  {path: '/short_term', element: <SixMonth />}
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
		<RouterProvider router={router} />
	// </React.StrictMode>
);
