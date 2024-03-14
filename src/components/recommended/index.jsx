import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MovieCa from './MovieCa'; // Assuming MovieCa is the component for displaying individual movies

const RecommendedMovies = () => {
  // Sample list of recommended movies with titles and image URLs
  const recommendedMovies = [
    { title: 'Movie 1', imageUrl: 'https://www.example.com/image1.jpg' },
    { title: 'Movie 2', imageUrl: 'https://www.example.com/image2.jpg' },
    { title: 'Movie 3', imageUrl: 'https://www.example.com/image3.jpg' },
    // Add more recommended movies as needed
  ];

  return (
    <div>
      <h2>Recommended Movies</h2>
      <div className="recommended-movies-container">
        <div className="navigation-arrows">
          <ArrowBackIcon className="arrow" />
        </div>
        <div className="movies-carousel">
          {recommendedMovies.map((movie, index) => (
            <MovieCa key={index} title={movie.title} imageUrl={movie.imageUrl} />
          ))}
        </div>
        <div className="navigation-arrows">
          <ArrowForwardIcon className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default RecommendedMovies;
