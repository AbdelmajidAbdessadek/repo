import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path="/about" element={<About />} />
       { /*path ="*" fonctionne si jamais l'url ne correspond a rien de declare ay dessus*/}  
        <Route path="*" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
