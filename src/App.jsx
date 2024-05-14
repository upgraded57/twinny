import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Hotel from "./Hotel";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="bg-black py-12">
        <div className="max-w-[850px] px-[4vw] flex items-center text-center mx-auto flex-col gap-5">
          <h1 className="h-text text-3xl lg:text-5xl text-white">
            About Twinny Hotel & Suites
          </h1>
          <p className="p-text text-white text-md lg:text-2xl">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con
          </p>

          <button
            type="button"
            className="w-full max-w-[600px] p-3 border border-[#f38120] text-[#f38120]"
          >
            Know More
          </button>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center h-text text-3xl lg:text-6xl mb-10">
          Our Hotels/Shortlets
        </h1>
        <Hotel />
        <Hotel />
        <Hotel />
      </div>

      <Footer />
    </>
  );
}

export default App;
