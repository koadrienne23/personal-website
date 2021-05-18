import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

const Cards = () => {
    
    // Keep track of the hover states for all three page links.
    const [hover1,setHover1]=React.useState(false);
    const [hover2,setHover2]=React.useState(false);
    const [hover3,setHover3]=React.useState(false);

    const mouseEnter1 = () => setHover1(true);
    const mouseLeave1 = () => setHover1(false);
    const mouseEnter2 = () => setHover2(true);
    const mouseLeave2 = () => setHover2(false);
    const mouseEnter3 = () => setHover3(true);
    const mouseLeave3 = () => setHover3(false);

    return (
        <div className='cards'>
            <h1>Check out my pages!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <div onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1}>
                            <CardItem
                                item__pic_wrap={hover1 ? "cards__item__pic-wrap hover1-wrap" : "cards__item__pic-wrap"}
                                item__title={hover1 ? "cards__item__title hover-title" : "cards__item__title"}
                                title="About Me"
                                text="Learn about me and why I want to be apart of DALI"
                                path='/about-me'
                            />
                        </div>
                        <div onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2}>
                            <CardItem 
                                item__pic_wrap={hover2 ? "cards__item__pic-wrap hover2-wrap" : "cards__item__pic-wrap"}
                                item__title={hover2 ? "cards__item__title hover-title" : "cards__item__title"}
                                title="Travel"
                                text="See some of the places that I've visited around the world"
                                path='/travel'
                            />
                        </div>
                        <div onMouseEnter={mouseEnter3} onMouseLeave={mouseLeave3}>
                            <CardItem 
                                item__pic_wrap={hover3 ? "cards__item__pic-wrap hover3-wrap" : "cards__item__pic-wrap"}
                                item__title={hover3 ? "cards__item__title hover-title" : "cards__item__title"}
                                title="Research"
                                text="Read some of the math research papers I worked on"
                                path='/research'
                            />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;