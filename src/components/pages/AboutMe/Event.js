import React, { useEffect } from 'react';
import './Timeline'
import Aos from "aos";
import "aos/dist/aos.css";

const Event = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    
    if (props.left) {
        return (
            <div data-aos="fade-up" className="event-left" style={{transform: `translate(-50%,0)`}}>
                <div className="left">
                    <p className="text">{props.text}</p>
                    <hr/>
                </div>
            </div>
        )
    } else {
        return (
            <div data-aos="fade-up" className="event-right" style={{transform: `translate(50%,0)`}}>
                <div className="right">
                    <hr/>
                    <p className="text">{props.text}</p>
                </div>
            </div>
        )
    }
}

export default Event;