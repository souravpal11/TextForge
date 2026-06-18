import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";
import ScrollProgress from "./Components/ScrollProgress";
import ScrollTop from "./Components/ScrollTop";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 
  // const toggleMode = () => {
  //   if(mode === "light"){
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#0F0F1A";
  //     showAlert("Dark mode has been enabled","success");
  //   } 
  //   else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled","success");
  //   }   
  // }  
  const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");

    document.body.style.background =
      "linear-gradient(135deg, #141e30, #243b55)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.minHeight = "100vh";

    showAlert("Dark mode has been enabled", "success");
  } else {
    setMode("light");

    document.body.style.background =
      "linear-gradient(135deg, #eef2ff, #dbeafe)";
    document.body.style.backgroundAttachment = "fixed";

    showAlert("Light mode has been enabled", "success");
  }
};
  return (
    <>
<Router>
  <Navbar title="TextForge" about="About"  mode={mode} toggleMode={toggleMode} />
  <ScrollProgress />
  <Sidebar mode={mode}/>
  <Hero mode={mode} />
  <ScrollTop />
  <Alert alert={alert}/>
  <div className="container my-3" id="editor">
    <Routes>
      <Route exact path="/about" element={<About mode={mode}/>} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
    </Routes>
  {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
<About /> */}
  </div>
</Router>
    </>
  );
}

export default App;
