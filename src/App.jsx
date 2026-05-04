import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Applayout from "./layouts/Applayout";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import About from "./components/about/About";
import Connect from "./components/connect/Connect";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Works/>} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;