import React from 'react';
import './CardSlider.css';

interface CardSliderProps {
    title: string;
    content: string;
    imageUrl: string; 
}

const CardSlider: React.FC<CardSliderProps> = ({ title, content, imageUrl }) => {
    return (
        <div className='card'>
            <img className='card-img' src={imageUrl} alt={title} />
            <div className="card-content">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            
            
            
        </div>
    );
};

export default CardSlider;
