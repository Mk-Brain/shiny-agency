import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/';
import Survey from "./pages/Survey";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import Results from "./pages/Results";
import Freelance from "./pages/Freelances";




const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Survey/:questionNumber" element={<Survey/>}>
        </Route>
        <Route path="/Results" element={<Results/>}/>
        <Route path="/Freelance" element={<Freelance/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)