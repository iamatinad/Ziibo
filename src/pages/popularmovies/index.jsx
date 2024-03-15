import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import ContentDetails from '../../components/contentdetails';
import AppPagination from '../../components/pagination';
import Genres from '../../pages/genres';

const Popularmovies = () => {
    const [popularmovies, setPopularmovies] = useState([]);
    const [page, setPage] = useState(1); // Initial page set to 1
    const [numberofPages, setNumberPages] = useState(1); // Initial number of pages set to 1
    const [loading, setLoading] = useState(true);
    const [isErr, setIsErr] = useState(false);
    const [genres, setGenres] = useState([]);

    // FETCH POPULARMOVIES
    const fetchPopularmovies = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=8d25ac7fb0ef79cb28b30f9b770139c4&language=en-US&page=${page}`
            );

            setPopularmovies(data?.results);
            setLoading(false);
            setNumberPages(data?.total_pages);
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            setIsErr(true);
        }
    };

    useEffect(() => {
        fetchPopularmovies();
    }, [page]);

    return (
        <>
            <Genres genres={genres} setGenres={setGenres} />
            <Grid container direction='row' justify='center' alignItems='center' >
                {popularmovies?.map((movie) => (
                    <Grid item md={6} key={movie.id}>
                        <ContentDetails movie={movie} />
                    </Grid>
                ))}
            </Grid>
            <AppPagination setPage={setPage} pageNumber={numberofPages} />
        </>
    );
};

export default Popularmovies;