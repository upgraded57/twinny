import About from "@/pages/about/About";
import Home from "@/pages/home/Home";
import Hotel from "@/pages/hotel/Hotel";
import NotFound from "@/pages/not-found/NotFound";

export const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "hotel/:hotel_id",
    element: <Hotel />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
