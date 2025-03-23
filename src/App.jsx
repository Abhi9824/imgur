import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Loading from "./components/Loading/Loading";
const Home = lazy(() => import("./pages/Home/Home"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Footer = lazy(() => import("./pages/Footer/Footer"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
