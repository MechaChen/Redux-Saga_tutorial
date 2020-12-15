import React from 'react';
import { I_User } from '@redux/reducers/users';

interface I_CardProps {
    user: I_User;
}

const Card: React.FC<I_CardProps> = (props) => {
    return (
        <div className="card">
            <div className="card__body">
                <h5 className="card__title">{props.user.name}</h5>
                <h6 className="card__subtitle">{props.user.company.name}</h6>
                <p className="card__text">{props.user.company.catchPhrase}</p>
            </div>
        </div>
    );
};

export default Card;
