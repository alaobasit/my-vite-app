import React from 'react';

const MovieCard = ({ title, rating, description }) => {
  const getRatingBadge = () => {
    if (rating >= 8) return 'bg-success';
    if (rating >= 5) return 'bg-warning text-dark';
    return 'bg-danger';
  };

  const handleWatchTrailer = () => {
    alert('Trailer coming soon!');
  };

  return (
    <>
      <div className="card h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className={`badge ${getRatingBadge()}`}>
              Rating: {rating}
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
    </>
  );
};

export default MovieCard;
