'use client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import HomePage from "./components/HomePage";
import TranscationHistory from "./components/TranscationHistory";
import App from "./App";



export default function Home() {


  return (
    <div>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/login"element={<Auth/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/transcation-history" element={<TranscationHistory/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
