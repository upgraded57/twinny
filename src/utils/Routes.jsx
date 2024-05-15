import About from "@/pages/about/About";
import Home from "@/pages/home/Home";
import Hotel from "@/pages/hotel/Hotel";

export const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "hotel/:id",
    element: <Hotel />,
  },
  {
    path: "about",
    element: <About />,
  },
];
