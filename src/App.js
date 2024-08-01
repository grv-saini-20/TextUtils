import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[defaultMode,setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
  }
  
  setTimeout(()=>{
    setAlert("null");
  },2000)

  const toggleMode = () =>{
    if(defaultMode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#1c1616";
      showAlert("DarkMode Enabled","success");
      document.title = ("TextUtils - Dark Mode Enabled");
      // setInterval(()=>{
      //   document.title = "Dark Mode";
      // },2000)
      // setInterval(()=>{
      //   document.title = "install text utils";
      // },1500)
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode Enabled","success");
      document.title = ("TextUtils - Light Mode Enabled");
    }
  }

  return (
    <>
    <BrowserRouter>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={defaultMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path={"/about"} element={<About/>}/> 
          <Route path={"/"} element={<Textform heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={defaultMode} showAlert={showAlert}/>}/>
        </Routes>
      </div>
    </BrowserRouter>  
    </>
  );
}

export default App;
