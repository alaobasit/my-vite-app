import { useState } from "react";
import MovieCard from "./MovieCard";

// Assignment
/**
 * For Movie card with:
 * rating >=8 use text-success
 * rating >=5 use text-warning
 * else use text-danger
 *
 * //////Second Part //////////
 * 🎥 Add a Watch Trailer button inside each card.
 */
const movies = [
  {
    title: "Dune: Part One (2021)",
    description:
      "A visually stunning sci-fi epic based on Frank Herbert’s novel. It follows Paul Atreides, a young nobleman, as he navigates political intrigue and survival on the desert planet Arrakis. A story of destiny, power, and rebellion.",
    rating: 8.0,
    image:
      "https://media.istockphoto.com/id/2168660249/photo/group-of-friends-enjoying-a-movie-night-together.jpg?s=612x612&w=is&k=20&c=nTSGd2eQCHSODSM5iBIBAVhbSVl4BVr6XTdYHYXSok8=",
  },

  {
    title: "Everything Everywhere All at Once (2022)",
    description:
      "A wildly inventive multiverse adventure blending comedy, action, and heartfelt family drama. Evelyn, an ordinary woman, discovers infinite versions of herself across parallel universes and must save reality itself.",
    rating: 4.0,
    image:
      "https://media.istockphoto.com/id/1150354275/photo/happy-family-watching-a-comedy-film-at-the-cinema.jpg?s=612x612&w=is&k=20&c=0FXKxF7w_8iwwxHc3DA1K5ISF_llrjwBQl50y3tegOo=",
  },

  {
    title: "Oppenheimer (2023)",
    description:
      "A historical biopic directed by Christopher Nolan, chronicling the life of J. Robert Oppenheimer, the “father of the atomic bomb.” The film explores moral dilemmas, ambition, and the consequences of scientific discovery.",
    rating: 6.0,
    image:
      "https://media.istockphoto.com/id/1863925369/photo/happy-group-of-asian-family-and-grandmother-relax-and-go-to-cimema-in-movie-theater.jpg?s=612x612&w=is&k=20&c=ClXlJDmurjmqAV4gw97y8vPYNENF9A3FC3_bEGNYnjA=",
  },

  {
    title: "Barbie (2024)",
    description:
      "A vibrant, self-aware fantasy comedy exploring identity and societal expectations. Barbie embarks on a journey from her perfect Mattel world to the real world, leading to humorous adventures and meaningful self-discovery.",
    rating: 5.0,
    image:
      "https://media.istockphoto.com/id/1406127371/photo/women-wearing-3d-glasses-watching-a-movie-and-her-giant-popcorn-3d-render-illustration.jpg?s=612x612&w=is&k=20&c=vMijO3FBZvS5sm7D89DAjEBrqj2XZEtN8lzIGHQP_aA=",
  },

  {
    title: "Mission: Impossible – Dead Reckoning Part Two (2025)",
    description:
      "The latest installment in the high-octane spy franchise. Ethan Hunt faces impossible missions, dangerous enemies, and thrilling stunts that push espionage to the extreme, delivering non-stop action and suspense.",
    rating: 9.0,
    image:
      "https://media.istockphoto.com/id/1406127371/photo/women-wearing-3d-glasses-watching-a-movie-and-her-giant-popcorn-3d-render-illustration.jpg?s=612x612&w=is&k=20&c=vMijO3FBZvS5sm7D89DAjEBrqj2XZEtN8lzIGHQP_aA=",
  },

  {
    title: "The French Dispatch (2021)",
    description:
      "Wes Anderson’s visually stylized anthology film, centered on a fictional French newspaper. Each segment tells quirky, artful stories of eccentric characters, combining comedy, melancholy, and meticulous attention to detail.",
    rating: 6.0,
    image:
      "https://media.istockphoto.com/id/1406127371/photo/women-wearing-3d-glasses-watching-a-movie-and-her-giant-popcorn-3d-render-illustration.jpg?s=612x612&w=is&k=20&c=vMijO3FBZvS5sm7D89DAjEBrqj2XZEtN8lzIGHQP_aA=",
  },

  {
    title: "A Haunting in Venice (2025)",
    description:
      "A supernatural mystery thriller set in the eerie canals of Venice. A detective investigates a series of ghostly occurrences, blending suspense, intrigue, and chilling atmospheres in a tale of the unknown.",
    rating: 8.0,
    image:
      "https://media.istockphoto.com/id/1406127371/photo/women-wearing-3d-glasses-watching-a-movie-and-her-giant-popcorn-3d-render-illustration.jpg?s=612x612&w=is&k=20&c=vMijO3FBZvS5sm7D89DAjEBrqj2XZEtN8lzIGHQP_aA=",
  },

  {
    title: "The Holdovers (2024)",
    description:
      "Description: A heartfelt dramedy about a grumpy teacher and a janitor stuck at a boarding school over Christmas with an unexpected student. Funny, warm, and touching, it examines human relationships and unlikely friendships.",
    rating: 3.0,
    image:
      "https://media.istockphoto.com/id/1406127371/photo/women-wearing-3d-glasses-watching-a-movie-and-her-giant-popcorn-3d-render-illustration.jpg?s=612x612&w=is&k=20&c=vMijO3FBZvS5sm7D89DAjEBrqj2XZEtN8lzIGHQP_aA=",
  },
];

function Movie() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter movies before rendering
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Movie List</h2>

      {/* Search Form */}
      <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search for a movie"
          className="form-control mb-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" disabled>
          Search
        </button>
      </form>

      {/* Movie Grid */}
      <div className="row">
        {filteredMovies.map((movie, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <MovieCard
              title={movie.title}
              description={movie.description}
              rating={movie.rating}
              image={movie.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;