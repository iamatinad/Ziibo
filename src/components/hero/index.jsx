import React from 'react';
import Shogun from '../../assets/images/Shogun-2.jpg';
import './index.css';

function Hero() {
  return (
    <div>
      <img className="picture" src={Shogun} alt="Shogun" />
      <div className="centered-text">
        <h1>
          <span className="typewriter">Welcome</span>{' '}
          <span className="typewriter">to</span>{' '}
          <span className="typewriter">Ziibo</span>{' '}
          <span className="typewriter">your</span>{' '}
          <span className="typewriter">ultimate</span>{' '}
          <span className="typewriter">destination</span>{' '}
          <span className="typewriter">for</span>{' '}
          <span className="typewriter">endless</span>{' '}
          <span className="typewriter">entertainment.</span>
        </h1>
        <div className="typewriter">
          <p>
            Dive into a world of cinematic wonders with our vast collection of movies, from Hollywood blockbuster to indie gems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
