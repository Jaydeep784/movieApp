import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

function App() {
  const [movie, setMovie] = useState(null);
  const [movieInfo, setMovieInfo] = useState({});
  const [showInfo, setShowInfo] = useState(false);

  const getMovieData = async (e) => {
    if(movie == null) return alert("Please enter movie name");
    e.preventDefault();

    let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c76f332a&t=${movie}`).then((res) => res.json()).catch((e) => console.log(e));
    setMovieInfo(response);
    setShowInfo(true);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <h1 className="text-5xl font-semibold font-mono text-center mt-4">
          Movie-o-site
        </h1>
        <form className="flex flex-col mx-auto" onSubmit={getMovieData}>
          <label className="text-lg font-medium ml-3 mt-6">
            Enter Movie Name :{" "}
          </label>
          <input
            className="p-2 border m-3 w-80 sm:w-96 rounded-lg bg-gray-700 text-white"
            type="text"
            placeholder="movie..."
            onChange={(e) => {
              setMovie(e.target.value);
            }}
          />
          <button
            type="submit"
            className="border p-2 w-40 rounded-lg self-center mt-3 bg-violet-700 font-semibold hover:bg-violet-800 transition-all duration-300"
          >
            Get Movie Info
          </button>
        </form>

        {showInfo ? <div className="flex justify-center mt-8">
          <MovieCard movieInfo={movieInfo} />
        </div> : ""}
      </div>
    </>
  );
}

export default App;
