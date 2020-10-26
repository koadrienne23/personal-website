import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
    return (
        <div>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className={props.item__pic_wrap}>
                        <h2 className={props.item__title}>{props.title}</h2>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default CardItem;