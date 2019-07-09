import React,{useState, useEffect} from 'react'
import {getFilms} from "../../utils/api"
import Film from "../film/Film"
import Search from '../search/Search'
import './FilmList.css'
export default function Films() {
    const [films, setFilms] = useState(null);
    useEffect(()=>{
        getFilms().then(films=>setFilms(films.data)).catch(e=>console.error(e))
    }, [])
    console.log(films)
    return (
      <div>
          <Search/>
        <ul className='markers'>
            {films && films.map((film, key)=><li  key={key}> <Film film={film}></Film> </li>)}
        </ul>
        </div>
    )
}
