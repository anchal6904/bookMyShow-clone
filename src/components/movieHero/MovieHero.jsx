import { useContext } from "react"
import MovieInfo from "./MovieInfo";
import { MovieContext } from "../../context/movieContext"


const MovieHero = () => {
    const {movie}=useContext(MovieContext);
    const genres = movie.genres?.map(({name})=>name).join(",");
  return (
    <>
      <div>
        <div className="lg:hidden w-full overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Poster cover"
            className="m-4 rounded"
            style={{ width: "calc(100%-2rem" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div>
              <h4>4.4k rating</h4>
              <h4>Kannada, English, Hindi, Telugu</h4>
              <h4>
                {movie.runtime} min | {genres}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4 overflow-hidden">
            <button className="bg-red-500 w-96 py-3 text-white font-semibold rounded-lg overflow-hidden">
              Rent $149
            </button>
            <button className="bg-red-500 w-96 py-3 text-white font-semibold rounded-lg overflow-hidden">
              Buy $999
            </button>
          </div>
        </div>

        <div
          className="relative hidden w-full lg:block"
          style={{ height: "30rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34,34,34) 24.95%,rgb(34,34,34) 38.3%,rgba(34,34,34,0.04)97.47%,rgb(34,34,34)100%)",
            }}
          />

          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className="w-64 h-96">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="Movie Poster"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div>
              <MovieInfo movie={movie} />
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="background poster"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
}

export default MovieHero
