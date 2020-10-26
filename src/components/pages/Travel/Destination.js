import React, { useState } from 'react';
import './Map.css'
import Modal from 'react-modal';

const Destination = (props) => {
    const [click,setClick]=React.useState(false);
    const [slide,setSlide]=React.useState(0);

    const handleClick = () => setClick(!click);
    const closeModal = () => {
        setClick(false)
        resetSlide();
    }

    const nextSlide = () => {
        if (slide<props.images.length-1) {
            setSlide(slide+1);
        } else {
            setSlide(0);
        }
    }
    const prevSlide = () => {
        if (slide>0) {
            setSlide(slide-1);
        } else {
            setSlide(props.images.length-1);
        }
    }
    const resetSlide = () => setSlide(0);

    return (
        <div>
            <i className="fas fa-map-pin" 
                style={{transform: `translate(${props.x}vw, ${props.y}vw)`}} 
                onClick={handleClick}
            />
            <Modal 
                isOpen={click}
                onRequestClose={closeModal}
                className="Modal"
            >
                <h1>{props.place}</h1>
                <i onClick={closeModal} className='fas fa-times' />
                <img src={`/images/${props.images[slide]}`} className='gallery-image' />
                <div className="slide-controls">
                    <i onClick={prevSlide} className='fas fa-chevron-left' />
                    <p>{slide+1}/{props.images.length}</p>
                    <i onClick={nextSlide} className='fas fa-chevron-right' />
                </div>
            </Modal>
        </div>
    )
}

export default Destination;