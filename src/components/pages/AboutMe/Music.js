import React, { useEffect } from 'react';
import '../../../App.css';
import './Music.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Music = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className='music-container'>
            <h2>My favorite albums.</h2>
            <div className="albums">
                <img data-aos="fade-up" src="images/pony.png" style={{transform: `rotate(10deg)`}} data-aos-delay="0" />
                <img data-aos="fade-up" src="images/queen.png" style={{transform: `rotate(-10deg)`}} data-aos-delay="150" />
                <img data-aos="fade-up" src="images/walters.png" style={{transform: `rotate(10deg)`}} data-aos-delay="300" />
                <img data-aos="fade-up" src="images/daniel.png" style={{transform: `rotate(-10deg)`}} data-aos-delay="450" />
                <img data-aos="fade-up" src="images/beatles.png" style={{transform: `rotate(10deg)`}} data-aos-delay="600" />
                <img data-aos="fade-up" src="images/horizons.png" style={{transform: `rotate(-10deg)`}} data-aos-delay="750" />
            </div>
        </div>
    )
}

export default Music;