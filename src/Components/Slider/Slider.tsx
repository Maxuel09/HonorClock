import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import CardSlider from '../CardSlider/CardSlider';
import './Slider.css';

const CARDS = 9;
const MAX_VISIBILITY = 2;

const Slider = () => {
    const [active, setActive] = useState(0);
    const handlePrev = () => {
        setActive((prev) => (prev === 0 ? CARDS - 1 : prev - 1));
    };
    const handleNext = () => {
        setActive((prev) => (prev === CARDS - 1 ? 0 : prev + 1));
    };

    return (
        <main className='container_main'>
            <div className='slider-container'>
                <div className='carousel'>
                    {active > 0 && <button className='nav left' onClick={handlePrev}><TiChevronLeftOutline /></button>}
                    {[...new Array(CARDS)].map((_, i) => (
                        <div
                            className='card-container'
                            style={{
                                '--active': i === active ? '1' : '0',
                                '--offset': `${(active - i) / 3}`,
                                '--direction': `${Math.sign(active - i)}`,
                                '--abs-offset': `${Math.abs(active - i) / 3}`,
                                'pointerEvents': active === i ? 'auto' : 'none',
                                'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                                'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                            }}
                            key={i}
                        >
                            <CardSlider
                                title={'VIPER3 ' + (i + 1)}
                                content={`  ${i + 1}`}
                                imageUrl={`https://picsum.photos/200${i + 1}.jpg`}
                            />
                        </div>
                    ))}
                    {active < CARDS - 1 && <button className='nav right' onClick={handleNext}><TiChevronRightOutline /></button>}
                </div>
            </div>
        </main>
    );
};

export default Slider;
