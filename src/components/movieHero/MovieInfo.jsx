import  { useState, useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import Payment from "../payment/Payment";


const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const {movie} = useContext(MovieContext);
    const genres = movie.genres?.map(({name})=>name).join(", ");

    const rentMovie =() =>{
        setIsOpen(true);
        setPrice(149);
    }

    const buyMovie =() =>{
        setIsOpen(true);
        setPrice(999);
    }


    return <>
        <Payment setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className="flex flex-col gap-8">
            <h1 className="text-white text-5xl font-bold">{movie.original_title}</h1>
                        <div className="text-white flex flex-col gap-2">
                            <h4>5k rating</h4>
                            <h4>Kannada, English, Hindi, Telugu</h4>
                            <h4>
                                {movie.runtime} min | {genres}
                            </h4>
                        </div>
                        <div className="flex items-center gap-3 w-full">
                        <button onClick={rentMovie} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg hover:cursor-pointer"> Rent ₹ 149</button>
                        <button onClick={buyMovie} className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg hover:cursor-pointer"> Buy ₹ 999</button>
                    </div>
                    </div>
    </>
}

export default MovieInfo;