import React from 'react';
import Film from "../film/Film"
import './Search.css';

const Search = (props) => {
    let resultList = null

    if (props.searching && (props.defaultTitle !== '')) {
        resultList = (
            <ul className="results">
                {props.results.map(item => (
                    <li key={} onClick={() => props.clicked(item)}>
                        <img src={.Poster} alt="Movie Poster"/>
                        {.Title}
                    </li>
                ))}
            </ul>
        )
    }
  
    return (
        <div className="search">
            <input type="search" name="movie-search" value={props.defaultTitle} onChange={props.search} />
            {resultList}
        </div>
    );
};

export default Search;