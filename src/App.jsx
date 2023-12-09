import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot, useSetRecoilState } from "recoil";
import './App.css'
import { Navbar } from './Navbar';
import { Header } from './Header';
import { Loops } from './Loops';
import { DataTypes } from './DataTypes';
import { Conditionals } from './Conditionals';
import { Operators } from './Operators';
import { Home } from './Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  const handleMenuOperation = (item)=>{
    if(item==="home"){
      window.location = "/"
    }
    else if(item==="datatypes"){
      window.location = "/datatypes"
    }
    else if(item==="conditionals"){
      window.location = "/conditionals"
    }
    else if(item==="loops"){
      window.location = "/loops"
    }
    else if(item==="operators"){
      window.location = "/operators"
    }
  }

    return (
      <RecoilRoot>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#eeeeee",
          }}
        >
          <Router>
            <Header />
            <Navbar
              menuOperation={handleMenuOperation}
            />
            <Routes>
              <Route path={"/datatypes"} element={<DataTypes />} />
              <Route path={"/conditionals"} element={<Conditionals />} />
              <Route path={"/loops"} element={<Loops />} />
              <Route path={"/operators"} element={<Operators/>} />
              <Route path={"/"} element={<Home/>} />
            </Routes>
          </Router>
        </div>
      </RecoilRoot>
    );
}

export default App
