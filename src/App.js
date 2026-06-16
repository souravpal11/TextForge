import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      "linear-gradient(135deg, #0f0c29, #302b63, #24243e)";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.minHeight = "100vh";

    showAlert("Dark mode has been enabled", "success");
  } else {
    setMode("light");

    document.body.style.background =
      "linear-gradient(135deg, #f5f7fa, #c3cfe2)";
    document.body.style.backgroundAttachment = "fixed";

    showAlert("Light mode has been enabled", "success");
  }
};
  return (
    <>
<Router>
  <Navbar title="TextUtils" about="About"  mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
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
