import React, { useRef } from 'react'

function Banner() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -containerRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: containerRef.current.clientWidth, behavior: 'smooth' });
    }
  };
  return (

    <div className="relative">
      <div className="flex overflow-hidden" ref={containerRef}>
        <div className="flex-shrink-0 w-full bg-white border-r border-gray-200 p-4">
          <div className="h-[30vh] md:h-[55vh] bg-contain bg-center flex items-end bg-no-repeat" style={{ backgroundImage: 'url(https://parade.com/.image/t_share/MTkwNTgxMjk2NzkzNTkyOTU3/the-exorcist.jpg)' }}></div>
        </div>
        <div className="flex-shrink-0 w-full bg-white border-r border-gray-200 p-4">
          <div className="h-[30vh] md:h-[55vh] bg-contain bg-center flex items-end bg-no-repeat" style={{ backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/66932197773601.5ecd2ebb832dc.jpeg)' }}></div>
        </div>
      </div>
      <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-yellow-500 p-2">‹</button>
      <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-yellow-500 p-2">›</button>
    </div>


  )
}

export default Banner

