import React from 'react'

function MovieCard({ poster_path, name, handleAddWatchlist, movieObj, handleRemoveFromWatchlist, watchlist }) {


  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }



  return (
    <div className='h-[38vh] w-[180px] bg-center bg-cover hover:scale-110 duration-300 flex flex-col justify-between items-end hover:cursor-pointer m-5 shadow-xl shadow-gray-400 rounded-lg' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${poster_path})` }}>

      {doesContain(movieObj) ? (
        <button
          class="flex justify-center items-center gap-2 w-20 h-11 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] m-2"
          onClick={() => handleRemoveFromWatchlist(movieObj)}
        >
          <svg viewBox="0 0 15 15" class="w-5 fill-white">
            <svg
              class="w-6 h-6"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            Button
          </svg>
        </button>

      )
        : (<div
          class="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2 m-2"
          title="Save"
          onClick={() => (handleAddWatchlist(movieObj))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 -0.5 25 25"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span class="text-sm text-lime-400 font-bold pr-1">Save</span>
        </div>)}




      <div className='text-white text-xl w-full p-5 text-center bg-gray-900/50 rounded-lg'>
        {name}
      </div>




    </div>

  )
}

export default MovieCard


// poster   = Poster  
// backdrop = Fanart  
// profile  = Actors and Actresses  
// still    = TV Show Episode  
// logo     = TMDb Logo  

// ## Image Sizes  

// |  poster  | backdrop | profile  |  still   |   logo   |
// | :------: | :------: | :------: | :------: | :------: |
// | -------- | -------- |    w45   | -------- |    w45   |
// |    w92   | -------- | -------- |    w92   |    w92   |
// |   w154   | -------- | -------- | -------- |   w154   |
// |   w185   | -------- |   w185   |   w185   |   w185   |
// | -------- |   w300   | -------- |   w300   |   w300   |
// |   w342   | -------- | -------- | -------- | -------- |
// |   w500   | -------- | -------- | -------- |   w500   |
// | -------- | -------- |   h632   | -------- | -------- |
// |   w780   |   w780   | -------- | -------- | -------- |
// | -------- |  w1280   | -------- | -------- | -------- |
// | original | original | original | original | original |  