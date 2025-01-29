import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination';
import Banner from './Banner';


function Movies({handleAddWatchlist , handleRemoveFromWatchlist , watchlist}) {


  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePREV = () => {
    if (pageNo == 1) {
      setPageNo(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } else {

      setPageNo(pageNo - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' });

    }
  }
  const handleFORW = () => {
    setPageNo(pageNo + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5662ab70d3a16de17e142bc46ebdb031&language=en-US&page=${pageNo}
`).then(function (res) {
      setMovies(res.data.results);
    }, [pageNo])

  })
  return (
    <>
      <div className='p-5'>
        <div className='text-3xl text-center font-bold text-yellow-500'>
          Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-center'>
          {movies.map((movieObj) => {
            return <MovieCard movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddWatchlist={handleAddWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist} />
          })}

        </div>
        <Pagination Pnumber={pageNo} handlePREV={handlePREV} handleFORW={handleFORW} />
      </div>

    </>
  )
}

export default Movies


// https://api.themoviedb.org/3/movie/popular?api_key=5662ab70d3a16de17e142bc46ebdb031&language=en-US&page=1
