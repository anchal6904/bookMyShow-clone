import  { useEffect, useState } from 'react'
import DefaultLayoutHoc from '../layout/DefaultLayout'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel'
import EntertainmentCard from '../components/Entertainment/EntertainmentCard'
import PosterSlider from '../components/PosterSlider/PosterSlider'
import axios from 'axios'


const Homepage = () => {
    const [recommendedMovies, setRecommendedMovies]=useState([]);
    const [premierMovies, setPremierMovies]=useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents]=useState([]);
    
    useEffect(()=>{
      const requestPopularMovies = async () =>{
      const getPopularMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
    },[]);
    
    useEffect(()=>{
      const requestTopratedMovies = async () =>{
      const getTopratedMovies = await axios.get("/movie/top_rated");
      setPremierMovies(getTopratedMovies.data.results);
    };
    requestTopratedMovies();
    },[]);
    
    useEffect(()=>{
      const requestUpcomingMovies = async () =>{
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
    },[]);


  return (   
    <>
      <HeroCarousel/>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The best of Entertainment</h1>
        <EntertainmentCard/>
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider title='Recommended Movies'
        subtitle='List of recommended movies'
        posters={recommendedMovies}
        isDark={false}
        />
      </div>

        <div className='bg-premier-800 py-12'>
            <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col ga-3'>
                <PosterSlider title='Premiers'
                subtitle='Brand new releases every friday'
                posters={premierMovies}
                isDark={true}
                />
            </div>
        </div>

        <div className='container mx-auto px-4 md:px-12 my-8'>
            <PosterSlider title="Online Streaming Events"
            subtitle="Online Stream Events"
            posters={onlineStreamEvents}
            isDark={false}
            />
        </div>
      
    </>
  )
}

export default DefaultLayoutHoc(Homepage)

