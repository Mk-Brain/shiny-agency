import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/';
import Survey from "./pages/Survey";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import Results from "./pages/Results";
import Freelance from "./pages/Freelances";
import {ThemeProvider} from "./utils/contex/Provider";
import GlobalStyle from "./utils/styles/GlobalStyles";
import Footer from "./components/Footer";


const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider chidren={
        <>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Survey/:questionNumber" element={<Survey/>}>
          </Route>
          <Route path="/Results" element={<Results/>}/>
          <Route path="/Freelances" element={<Freelance/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
        </>
      }/>
        
    </Router>
  </React.StrictMode>
)