import React from 'react';
import MovieCard from './component/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const movies = [
    { title: 'Inception', rating: 8.8, description: 'A mind-bending thriller about dreams within dreams.' },
    { title: 'Titanic', rating: 7.5, description: 'A tragic love story set on the ill-fated Titanic.' },
    { title: 'Some Bad Movie', rating: 4.3, description: 'A poorly received movie that failed to impress critics.' },
    { title: 'The Godfather', rating: 9.2, description: 'An epic crime saga of the Corleone family.' },
    { title: 'Jurassic Park', rating: 6.9, description: 'Dinosaurs brought back to life create chaos in a theme park.' }
  ];

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-4">🎬 Movie Collection</h1>
        <div className="row g-4">
          {movies.map((movie, index) => (
            <div className="col-md-4" key={index}>
              <MovieCard 
                title={movie.title} 
                rating={movie.rating} 
                description={movie.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
