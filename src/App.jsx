import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./utils/Routes";
import whatsapp from "@/assets/images/Whatsapp.gif";

function App() {
  const router = createBrowserRouter(Routes);

  const handleNavigate = () => {
    const currentLocation = window.location.pathname;
    const isShortlet = currentLocation === "/hotel/2";
    window.location = isShortlet
      ? `https://wa.me/2349032303758?text=Hi, I want to enquire about Twinny hotels and suites apartments`
      : `https://wa.me/2348140778877?text=Hi, I want to enquire about Twinny hotels and suites apartments`;
  };
  return (
    <>
      <RouterProvider router={router} />
      <div
        className="fixed bottom-5 right-5 w-10 overflow-hidden"
        onClick={handleNavigate}
        id="floating-whatsapp"
      >
        <img
          src={whatsapp}
          alt="Whatsapp"
          className="max-w-10 cursor-pointer object-cover"
        />
      </div>
    </>
  );
}

export default App;
