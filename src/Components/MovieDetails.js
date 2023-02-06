import axios from "axios";
import { useEffect, useState } from "react";

import { useParams, Link} from "react-router-dom";
const MovieDetails = () => {
    
    const{ movieID } = useParams()
    
    const [movie, setMovie] = useState({});

    useEffect(() =>{

        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID}`,
            params: {
                api_key: '320ba0a49f5e07afcf455a1e14abb997'
            },
            }).then( (res) => {
            setMovie(res.data);
            console.log(res.data);
        })

    },[movieID])

    const { original_title, tagline, overview, poster_path, release_date } = movie;
    return(
         <>
         <div className="poster">
            <div className="description">
                <h2>{original_title}</h2>
                <h3>{tagline}</h3>
                <p>{overview}</p>
                <h4>first release date:{release_date} </h4>
            </div>
            <div className="poster-image">
                <img 
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
                alt={`Movie poster for ${original_title}`}
                />
            </div>
        </div>
        <Link to={'/'}>
             <h2>Go Back...</h2>
        </Link>
        
        </>
    )
}
export default MovieDetails;