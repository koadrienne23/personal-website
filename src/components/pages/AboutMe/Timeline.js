import React, { useEffect } from 'react';
import './Timeline.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Event from './Event';

const Timeline = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className="timeline-container">
            <Event left={true} text="I was very involved with math-related activities. (such as math club and math research)"/>
            <Event left={false} text="I started taking computer science classes during my Sophomore year."/>
            <Event left={true} text="For two years, we coded with the language, Processing."/>
            <Event left={false} text="In my final year of highschool, we started learning Python."/>
            <div className="vertical"/>
        </div>
    )
}

export default Timeline;