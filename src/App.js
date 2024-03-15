import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SeriesPage from "./pages/series";
// import MoviesPage from "./pages/moviespage";
import TopImbdPage from "./pages/topimdb";
import Popularmovies from "./pages/popularmovies";
import Genres from "./pages/genres";
import ContentDetails from "./components/contentdetails";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Seriesc" element={<SeriesPage />}/>
          {/* <Route path="/Movies" element={<MoviesPage/>}></Route> */}
          <Route path="/Topc" element={<TopImbdPage/>}/>
          {/* <Route path="/Movies" element={<MoviesPage/>}></Route> */}
          <Route path ='/genres'element={<Genres/>}/>
          <Route path="/popularmovies"element={<Popularmovies/>}/>
          <Route path='contentdetails'element={<ContentDetails/>}/>
        </Routes>
      </BrowserRouter>
 
  );
}

export default App;
