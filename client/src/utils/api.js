import axios from "axios";
import {uri} from "./constants"

export const getFilms = async ()=>{
    try{
        const result = await axios.get(uri+"films");
        return result
    } catch(e){
        console.error(e)
    }
}