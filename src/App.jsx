import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./utils/Routes";

function App() {
  const router = createBrowserRouter(Routes);

  return <RouterProvider router={router} />;
}

export default App;
