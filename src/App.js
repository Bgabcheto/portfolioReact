import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import './App.css'
import About from "./components/About";
import Training from "./components/Training";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
       <Header/>
       <Section/>
       <About/>
       <Training/>
       <Contact/>
    </div>
  );
}

export default App;
