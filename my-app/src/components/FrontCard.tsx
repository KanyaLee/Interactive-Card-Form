import React from 'react';

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
        <div className="front-card__number">{cardNumber}</div>
        <div className="front-card__name">{name}</div>
        <div className="front-card__date">{month}/{year}</div>
    </div>
    )
     }

export default FrontCard;