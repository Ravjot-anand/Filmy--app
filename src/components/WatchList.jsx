import React, { useEffect, useState } from 'react'
import generids from '../utility/gerne'
import genreids from '../utility/gerne'
function WatchList({ watchlist, setWatchList, handleRemoveFromWatchlist }) {

  const [search, setSearch] = useState('')
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre, setCurrGenre] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value)

  }

  let handleGenre = (genre) => {
    setCurrGenre(genre)
  }

  let sortIncreaing = () => {
    let sortedIncreasing = watchlist.sort((a, b) => {
      return a.vote_average - b.vote_average
    })
    setWatchList([...sortedIncreasing])
  }
  let sortDecrease = () => {
    let sortedDecreasing = watchlist.sort((a, b) => {
      return b.vote_average - a.vote_average
    })
    setWatchList([...sortedDecreasing])
  }

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return generids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
  }, [watchlist])

  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre) => {
          return <div onClick={() => handleGenre(genre)} className={currGenre == genre ? 'flex items-center justify-center h-[3rem] w-[9rem] bg-yellow-300 rounded-xl text-red-700 mx-3 my-2 cursor-pointer' : 'flex items-center justify-center h-[3rem] w-[9rem] bg-yellow-300/50 rounded-xl text-red-700 mx-3 my-2 cursor-pointer'}>
            {genre}
          </div>

        })}

      </div>


      <div className='flex justify-center m-5 '>
        <input onChange={handleSearch} value={search} type="text" placeholder='Search Movies' className='h-[2rem] w-[20rem] bg-gray-400/50 border border-gray-400 rounded-lg outline-none text-black px-2' />
      </div>

      <div className='border  border-yellow-500 m-8 overflow-hidden rounded-lg border-b-0'>
        <table className='w-full text-yellow-500 text-center'>
          <thead className='border-b-2 border-b-yellow-500'>
            <th>Name</th>
            <th className='flex justify-between'>
              <div className='cursor-pointer' onClick={sortIncreaing}><i class="fa-solid fa-arrow-up"></i></div>
              <div>Ratings</div>
              <div className='cursor-pointer' onClick={sortDecrease}><i class="fa-solid fa-arrow-down"></i></div>
            </th>
            <th>Popularity</th>
            <th>Gerne</th>
          </thead>
          <tbody>

            {watchlist.filter((movieObj) => {
              if (currGenre == 'All Genres') {
                return true
              } else {
                return generids[movieObj.genre_ids[0]] == currGenre

              }
            }).filter((movieObj => {
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            })).map((movieObj) => {
              return <tr className='text-gray-700 text-xl border border-b-yellow-500'>
                <td className='flex items-center px-6 py-4'>
                  <img className='h-[10rem] w-[20rem] rounded-xl ' src={`https://image.tmdb.org/t/p/w780/${movieObj.backdrop_path}`} alt="" />
                  <div className='mx-10'>{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genreids[movieObj.genre_ids[0]]}</td>
                <td>
                  <button
                    class="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                    onClick={() => handleRemoveFromWatchlist(movieObj)}
                  >
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>

                    Delete
                  </button>
                </td>
              </tr>
            })}




          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList