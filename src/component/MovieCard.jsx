import React from 'react';

const movies = [
  { title: 'Inception', rating: 8.8, description: 'A mind-bending thriller about dreams within dreams.' },
  { title: 'Titanic', rating: 7.5, description: 'A tragic love story set on the ill-fated Titanic.' },
  { title: 'Some Bad Movie', rating: 4.3, description: 'A poorly received movie that failed to impress critics.' },
  { title: 'The Godfather', rating: 9.2, description: 'An epic crime saga of the Corleone family.' },
  { title: 'Jurassic Park', rating: 6.9, description: 'Dinosaurs brought back to life create chaos in a theme park.' }
];

const MovieCard = () => {
  const getRatingBadge = (rating) => {
    if (rating >= 8) return 'bg-success';
    if (rating >= 5) return 'bg-warning text-dark';
    return 'bg-danger';
  };

  const handleWatchTrailer = () => {
    alert('Trailer coming soon!');
  };

  return (
    <>
      {movies.map((movie, index) => (
        <div className="col-md-4" key={index}>
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.description}</p>
              <div className="mt-auto d-flex justify-content-between align-items-center">
                <span className={`badge ${getRatingBadge(movie.rating)}`}>
                  Rating: {movie.rating}
                </span>
                <button 
                  className="btn btn-primary btn-sm" 
                  onClick={handleWatchTrailer}
                >
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;