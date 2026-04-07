import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/';
import Survey from "./pages/Survey";
import Header from "./components/Header";
import ClientForm from "./components/ClientForm";
import FreelanceFrom from "./components/FreelanceForm";


const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Survey" element={<Survey/>}>
          <Route path="Client" element={<ClientForm/>}/>
          <Route path="Freelance" element={<FreelanceFrom/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)