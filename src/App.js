import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SeriesPage from "./pages/series";
import MoviesPage from "./pages/moviespage";
import TopImbdPage from "./pages/topimdb";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/seriesc" element={<SeriesPage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/topc" element={<TopImbdPage />}></Route>
          <Route path="/checkoutc" element={<Checkout/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
