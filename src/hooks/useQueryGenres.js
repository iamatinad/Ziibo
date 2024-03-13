import { useEffect, useState } from "react";

const useQueryGenres = () => {
  const [movieList, setMovieList] = useState([]);
  const [tvList, setTVList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const movieListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const tvListUrl = `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(movieListUrl, options);
      const response = (await res.json()).results;
      //  console.log(response)
      setMovieList(response);
      //  console.log(movieList)
    } catch (error) {
      console.log(error);
    }

    try {
    } catch (error) {
      console.log(error);
    }
    const res = await fetch(tvListUrl, options);
    const response = (await res.json()).results;
    //  console.log(response)
    setTVList(response);
    //  console.log(tvList)
  };
  setIsLoading(false);

  useEffect(() => {
    fetchData();
  }, []);
  
  return { movieList, tvList, isLoading };
};



export default useQueryGenres;
