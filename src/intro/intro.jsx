import React from 'react';
import './intro.css';
import Me4 from '../pics/me4.png';

const intro = () => {

    return (
        <div className="intro">
            <div className = "intro__left">
                <div className="intro__left__wrapper">
                    <h1 className="intro__greeting">Hi, I'm Runo!</h1>
                    <p className="intro__text">Design, beauty and precision is everything. I have a deep desire to excel, continuously improve in my work and learn more.</p>
                    
                    <div className="intro__title">
                        <h3 className="intro__desc">
                            Computer engineer, designer and software developer.
                        </h3>
                    </div>
                    <a className="hire__button" type="button" href="#contactMe">Hire Me</a>
                </div>
            </div>

            <div className = "intro__right">
                <div className="intro__bg"></div>
                <img src={ Me4 } alt="Ogefere Ogheneruno" className="intro__img" />
            </div>
        </div>
    )
}

export default intro
