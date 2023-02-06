import { useEffect, useState } from 'react';
import axios from 'axios';

const Catalogue = () => {
    //step 2 :movie state set for storing movie using setMovie
    const [movie, setMovie] = useState([])
  

  //step 1! : fetch data with axios!
  useEffect( () =>{
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: '320ba0a49f5e07afcf455a1e14abb997',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 2018,
      },
    }).then((res)=>{
      setMovie(res.data.results);
      console.log(movie);
    }) 
  },[]);
    
    return(
        <div>
            <ul className='catalogue'>
          {//step3: use map to return data and render out the object
            movie.map((movie)=>
              <li className='.poster'
              key={movie.id}>
            <img 
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`Poster for ${movie.original_title}`} 
            />
              </li>
            )
          }
        </ul>
        </div>
    )
}

export default Catalogue;