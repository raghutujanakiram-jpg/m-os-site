import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Architecture from "./pages/Architecture";
import UseCases from "./pages/UseCases";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;