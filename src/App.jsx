import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <About />
      <Projects />
    </div>
  );
};

export default App;
