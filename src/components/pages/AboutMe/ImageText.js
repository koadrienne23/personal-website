import React, { useEffect } from 'react';
import './ImageText.css'
import Aos from "aos";
import "aos/dist/aos.css";

const ImageText = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className='img-text-container'>
            <img data-aos={props.aos} src={props.src}/>
            <p>{props.text}</p>
        </div>
    )
}

export default ImageText;