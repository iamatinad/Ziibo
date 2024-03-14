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
          <Route path="/Seriesc" element={<SeriesPage />}></Route>
          <Route path="/Movies" element={<MoviesPage/>}></Route>
          <Route path="/Topc" element={<TopImbdPage/>}></Route>
          <Route path="/Topc" element={<TopImbdPage/>}></Route>
          <Route path="/Topc" element={<TopImbdPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
