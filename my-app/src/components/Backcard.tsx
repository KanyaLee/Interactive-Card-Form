import React from 'react'; 
import './BackCard.css'

interface BackCardProps {
    cvc:string;
}

const BackCard: React.FC<BackCardProps> = ({cvc}) => {
    return (
        <div className="back-card">
            <div className="back-card__content">
                <div className="back-card__cvc">{cvc ? cvc: '000'}</div>
            </div>
        </div>
    )
}

export default BackCard
