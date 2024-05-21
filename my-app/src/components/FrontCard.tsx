import React from 'react';
import './FrontCard.css'

interface FrontCardProps {
    name: string;
    cardNumber: string;
    month: string;
    year: string;

}




const FrontCard: React.FC<FrontCardProps> = ({name, cardNumber, month, year}) => {
    return (
    <div className="front-card">
        <div className='front-card__logo'>
            <img src="/images/card-logo.svg" alt="logo" />
        </div>
        <div className="front-card__number">
            {cardNumber ? cardNumber:'0000 0000 0000 0000'}</div>
        <div className="front-card__name">{name ? name: 'Jane Appleseed'}</div>
        <div className="front-card__date">{month ? month: 'MM'}/{year? year: 'YY'}</div>
    </div>
    )
     }

export default FrontCard;