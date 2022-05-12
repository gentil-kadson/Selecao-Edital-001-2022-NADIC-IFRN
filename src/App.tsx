import * as React from "react"
import LandingPage from "./pages/LandingPage/LandingPage"
import Homepage from "./pages/Homepage/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="homepage" element={<Homepage />} />
      </Routes>
      
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App
  

