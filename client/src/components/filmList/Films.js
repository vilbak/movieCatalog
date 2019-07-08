import React,{useState, useEffect} from 'react'
import {getFilms} from "../../utils/api"
import Film from "../film/Film"
import './Films.css'
export default function Films() {
    const [films, setFilms] = useState(null);
    useEffect(()=>{
        getFilms().then(films=>setFilms(films.data)).catch(e=>console.error(e))
    }, [])
    console.log(films)
    return (
        <ul>
            {films && films.map((film, key)=><li  key={key}> <Film film={film}></Film> </li>)}
        </ul>
    )
}
