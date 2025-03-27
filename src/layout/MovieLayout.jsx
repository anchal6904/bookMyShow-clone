import React from 'react'
import MovieNav from '../components/Navbar/MovieNav.jsx'

const MovieLayoutHoc = (Component) => ({...props}) => {
  return (
    <div>
      <MovieNav/>
      <Component {...props}/>
    </div>
  )
}

export default MovieLayoutHoc
