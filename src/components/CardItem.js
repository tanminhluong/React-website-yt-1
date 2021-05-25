import React from 'react'
import {Link} from 'react-router-dom'

function CardItem({src, path, label, text}) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={path}>
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img src={src} alt="Travel Image" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <div className="cards__item__text">
                            {text}
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
