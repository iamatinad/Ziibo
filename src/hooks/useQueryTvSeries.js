import React, { useEffect, useState } from 'react'

const useQueryTvSeries = () => {
    const [onTheAir, setOnTheAir] = useState([])
    const [airingToday, setAiringToday] = useState([])
   
    const onTheAirUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    const airingTodayUrl = ``

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

}


useEffect(() => {
  fetchData()
    
},[])

  return   { onTheAir, airingToday}
  
}

export default useQueryTvSeries