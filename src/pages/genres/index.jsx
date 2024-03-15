import React,{useState,UseEffect, useEffect} from 'react';
import {Chip} from '@mui/material';
import axios from 'axios';


const Genres=({genres,setGenres})=> {
  const fetchGenres = async()=>{ 
   const{data} =await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

  setGenres(data?.genres);
};

useEffect(()=> {
  fetchGenres()
},[])
  return (
    <div style={{padding:'10px 0'}}>
        <Chip 
        style={{fontSize:'1.2em',margin:'3px'}} 
        label="Popularmovies" 
         color='primary' />
    </div>
  );
};

export default Genres