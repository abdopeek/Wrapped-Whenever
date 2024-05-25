import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage";
import SongsPage from "./pages/SongsPage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path: '/', element: <Homepage />},
  {path: '/songsPage', element: <SongsPage />}
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
		<RouterProvider router={router} />
	// </React.StrictMode>
);
