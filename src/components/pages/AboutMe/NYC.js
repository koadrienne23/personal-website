import React, { useState, useEffect } from 'react';
import '../../../App.css';
import './NYC.css';

const NYC = () => {
    const [scrolled,setScrolled]=React.useState(false);
    const [rotation, setRotation]=React.useState(0);

    // Scroll set to true for a specified range of the page window, 
    // which can then be used to make the hot-air balloon sticky
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 980 && offset < 4400){ 
            setScrolled(true),
            setRotation(Math.sin(offset/300) * 20);     // makes the balloon rotate depending on its y-position
        }
        else{ setScrolled(false); }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let balloonScroll=['balloon'];
    if(scrolled){
        balloonScroll.push('scrolled');     // add element to array
    }

    return (
        <div className='nyc-container'>
            <div className={balloonScroll.join(" ")}>
                <img src="/images/balloon.png" style={{transform: `rotate(${rotation}deg)`}}/>
            </div>
            <p>Hey, my name is Adrienne!<br/>I was born in New York City...</p>
            <img src="images/skyline.png"/>
        </div>
    )
}

export default NYC;