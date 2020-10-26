import React from 'react';
import ImageText from './ImageText';

const FunFacts = () => {
    return (
        <div className="funfacts">
            <div className="title-container">
                <h2 className="title">Fun Facts!</h2>
            </div>
            <ImageText 
                src="images/skating.JPG"
                text="I figure skated competitively for 6 years."
                aos="fade-up"
            />
            <ImageText 
                src="images/perfumes.jpg"
                text="I love to collect perfumes."
                aos="fade-up"
            />
        </div>
    )
}

export default FunFacts;