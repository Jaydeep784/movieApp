import React from 'react'

const MovieCard = ({ movieInfo }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto md:max-w-4xl">
      <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
        <img 
          src={movieInfo.Poster} 
          alt="moviePoster" 
          className="object-contain rounded-lg w-3/4 md:w-full" 
        />
      </div>
      <div className="p-6 md:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800">{movieInfo.Title}</h2>
          <p className="text-sm text-gray-600 mt-2"><strong>Released:</strong> {movieInfo.Released}</p>
          <p className="text-sm text-gray-600"><strong>Genre:</strong> {movieInfo.Genre}</p>
          <p className="text-sm text-gray-600"><strong>Actors:</strong> {movieInfo.Actors}</p>
          <p className="text-sm text-gray-600"><strong>Director:</strong> {movieInfo.Director}</p>
          <p className="text-sm text-gray-600"><strong>Writer:</strong> {movieInfo.Writer}</p>
          <p className="text-sm text-gray-600"><strong>Plot:</strong> {movieInfo.Plot}</p>
          <p className="text-sm text-gray-600"><strong>Language:</strong> {movieInfo.Language}</p>
          <p className="text-sm text-gray-600"><strong>Country:</strong> {movieInfo.Country}</p>
          <p className="text-sm text-gray-600"><strong>IMDB Rating:</strong> {movieInfo.imdbRating}</p>
          <p className="text-sm text-gray-600"><strong>Box Office:</strong> {movieInfo.BoxOffice}</p>
          <p className="text-sm text-gray-600"><strong>Production:</strong> {movieInfo.Production}</p>
        </div>
    </div>
  )
}

export default MovieCard
