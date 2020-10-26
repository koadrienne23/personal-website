import React from 'react';
import './Papers.css'

function Paper(props) {
    return (
        <li className="paper_item">
            <a className="paper_link" href={props.link}>
                <figure className="paper_pic-wrap">
                    <img className="paper_img" src={props.src} />
                </figure>
            </a>
        </li>
    )
}

export default Paper;