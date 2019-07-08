import React from 'react';
import PropTypes from 'prop-types';
import './FilmCard.css'

const filmCard= ({film:{avatar, title, description, rating = "4"}}) => (

<div className="container">
    <div className="movie-card">
            <img className="movie-header" src={avatar} alt="" />
            <div className="movie-content">
                <div className="movie-content-header">
                    <h4 className="movie-title">{title}</h4>
                    </div>
                    <div className="movie-info">
                        <div className="info-section">
                        <span>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    
);

filmCard.defaultProps = {
    film: {}
};

filmCard.propTypes = {
    film: PropTypes.object
};

export default filmCard;