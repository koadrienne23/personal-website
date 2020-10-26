import React, { useEffect } from 'react';
import './AboutMe.css';

import NYC from './NYC';
import Highschool from './Highschool';
import Timeline from './Timeline';
import Hanover from './Hanover';
import DALI from './DALI';
import Music from './Music';
import FunFacts from './FunFacts';

const AboutMe = () => {
    return (
        <div className='body'>
            <div className='about-me'>
                <h1>About Me</h1>
                <h2>Scroll to learn about me.</h2>
                <i class="fas fa-angle-down"></i>
            </div>
            <div className='transition'/>
            <NYC />
            <Highschool />
            <Timeline />
            <div className='transition'/>
            <Hanover />
            <DALI />
            <FunFacts />
            <Music />
        </div>
    );
}

export default AboutMe;