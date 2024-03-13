import React, { useEffect, useState } from 'react'

const useQueryTvSeries = () => {
    const [onTheAir, setOnTheAir] = useState([])
    const [airingToday, setAiringToday] = useState([])
    const  [topRated, setTopRated]= useState([])

   
    const onTheAirUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    const airingTodayUrl = `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    const topRatedUrl=`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }

};

const fetchData = async () => {
    try {

        const res =  await fetch(onTheAirUrl,options)
        const response = (await res.json()).results
        //  console.log(response)
        setOnTheAir(response)
        //  console.log(onTheAir)
        
    }
    catch(error) {
        console.log(error)
    }

     try {

         const res =  await fetch(airingTodayUrl,options)
         const response = (await res.json()).results
        //  console.log(response)
        setAiringToday(response)
        //  console.log(onTheAir)
        
     }
     catch(error) {
        console.log(error)
     }

try{
  const res =await fetch(topRatedUrl,options);
  const response=(await res.json()).results
  // console.log(response)
  setTopRated(response)
  // console.log(topRated)
}
catch(error){
  console.log(error)
}
}



useEffect(() => {
  fetchData()
    
},[])

  return   { onTheAir,airingToday,topRated}
  
}

export default useQueryTvSeries;