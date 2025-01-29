import './App.css'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WatchList from './components/WatchList'
import Banner from './components/Banner'
import { useEffect, useState } from 'react'

function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleAddWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj]
    localStorage.setItem('Filmy',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)

  }

  let handleRemoveFromWatchlist = (movieObj) => {
    let filterWatchlist =watchlist.filter((movie)=>{
      return movie.id !== movieObj.id;
    })
    setWatchList(filterWatchlist)
    localStorage.removeItem('Filmy',filterWatchlist)
    console.log(filterWatchlist)

  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('Filmy')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))

  },[])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Banner /><Movies handleAddWatchlist={handleAddWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}  watchlist={watchlist}/></>} />
          <Route path='/watchlist' element={<>  <WatchList watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/> </>} />
        </Routes>
      </Router>


    </>
  )
}

export default App



