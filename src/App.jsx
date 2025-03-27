import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import PlaysPage from "./pages/PlaysPage.jsx";
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params={};
axios.defaults.params['api_key']=import.meta.env.VITE_API_KEY;

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/movies/:id' element={<MoviePage/>}/>
        <Route path='/plays' element={<PlaysPage/>}/>
      </Routes>
    </>
  )
}

export default App
