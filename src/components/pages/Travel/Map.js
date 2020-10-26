import React, { useState } from 'react';
import './Map.css';
import Destination from './Destination';

const Map = () => {
    const nyc = ["nyc1.JPG","nyc2.JPG","nyc3.png","nyc4.png","nyc5.JPG"];
    const la = ["la1.JPG","la2.png","la3.png"];
    const spain = ["spain1.png","spain2.jpg","spain3.png","spain4.png","spain5.png"];
    const france = ["france1.jpg","france2.png","france3.jpg"];
    const korea = ["korea1.jpg","korea2.jpg","korea3.jpg","korea4.jpg"];
    const japan = ["japan1.png","japan2.png","japan3.jpg"];
    const peru = ["peru1.JPG","peru2.png","peru3.png"];
    const vancouver = ["vancouver.JPG"];
    const hanover = ["hanover1.png","hanover2.JPG","hanover3.png","hanover4.JPG"];
    const italy = ["italy1.JPG","italy2.JPG"];
    const santafe = ["santa-fe1.JPG","santa-fe2.JPG"];
    const bahamas = ["bahamas1.JPG","bahamas2.JPG","bahamas3.JPG"];

    return (
        <div className='map'>
            <h1>Click on the pins to see some of the places I've visited!</h1>
            <div className='map-container'>
                <img className="world-map" src="/images/map.png" />
                <Destination 
                    place="New York City" x='20.6' y='-31.6'images={nyc}
                />
                <Destination 
                    place="Los Angeles" x='8.5' y='-31.5' images={la}
                />
                <Destination 
                    place="Spain" x='38.3' y='-35' images={spain}
                />
                <Destination 
                    place="France" x='39.3' y='-39' images={france}
                />
                <Destination 
                    place="Korea" x='70.7' y='-37.6' images={korea}
                />
                <Destination 
                    place="Japan" x='73.7' y='-39.1' images={japan}
                />
                <Destination 
                    place="Peru" x='18' y='-26.3' images={peru}
                />
                <Destination 
                    place="Vancouver" x='9.3' y='-46.7' images={vancouver}
                />
                <Destination 
                    place="Hanover" x='21.3' y='-47.7' images={hanover}
                />
                <Destination 
                    place="Italy" x='42' y='-48.5' images={italy}
                />
                <Destination 
                    place="Santa Fe" x='11' y='-49' images={santafe}
                />
                <Destination 
                    place="Bahamas" x='18.9' y='-46.5' images={bahamas}
                />
            </div>
        </div>
    );
}

export default Map;