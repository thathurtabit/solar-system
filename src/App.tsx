import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./shared/nav/nav";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import { Home } from "./pages/home/home";
import { Footer } from "./shared/footer/footer";
import { Sun } from "./pages/sun/sun";
import { Mercury } from "./pages/mercury/mercury";
import { Venus } from "./pages/venus/venus";
import { Earth } from "./pages/earth/earth";
import { Mars } from "./pages/mars/mars";
import { Jupiter } from "./pages/jupiter/jupiter";
import { Saturn } from "./pages/saturn/saturn";
import { Uranus } from "./pages/uranus/uranus";
import { Neptune } from "./pages/neptune/neptune";

function App() {
  const [isReady, setIsReady] = useState(false);
  useScrollToTop();

  useEffect(() => {
    setIsReady(true);
    document.body.classList.add("page-ready");

    return () => {
      document.body.classList.remove("page-ready");
    };
  }, []);

  return (
    <>
      <main id="barba-wrapper" className="main-content" role="document">
        <Nav />
        <div
          className={`barba-container ${
            isReady ? "loaded loaded-links active" : ""
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sun" element={<Sun />} />
            <Route path="/mercury" element={<Mercury />} />
            <Route path="/venus" element={<Venus />} />
            <Route path="/earth" element={<Earth />} />
            <Route path="/mars" element={<Mars />} />
            <Route path="/jupiter" element={<Jupiter />} />
            <Route path="/saturn" element={<Saturn />} />
            <Route path="/uranus" element={<Uranus />} />
            <Route path="/neptune" element={<Neptune />} />
            <Route path="*" element={<div>Page not found!</div>} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
