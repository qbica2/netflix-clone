import React from 'react'
import styles from '../scss/Row.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function Row({ title, movies }) {

    const baseURL = "https://image.tmdb.org/t/p/original/";

    const settings = {
    
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        className: styles.slider,
        draggable: true,
      };

    return (
        <div className={styles.row}>
            <h2>{title}</h2>
            <div className={styles.posters}>
            <Slider {...settings}>
                {
                    movies.map(movie => (
                        
                        <img className={styles.large } key={movie.id} src={`${baseURL}${ movie.backdrop_path }`} alt={movie.name} />
                
                    ))
                }
            </Slider>
            </div>

        </div>
    )
}

export default Row;