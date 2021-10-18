import React from 'react';
import './myProjects.css';
import WaawChat from '../pics/waawchat-herokuapp.png';
import WaawAnonymousapp from '../pics/waawanonymousapp-herokuapp.png';
import Portfolio from '../pics/ogefereogheneruno-portfolio.png';


const myProjects = () => {
    return (
        <div className="projects" id="myProjects">

            <h1 className="myProjects__text">Projects</h1>

            <div className="projects__grid">
                <div className="projects__grid-item">
                    <a href="https://waawanonymousapp.herokuapp.com/user/profile" target="_blank" rel="noreferrer">
                        <img src={WaawAnonymousapp} alt="WaawAnonymousapp" className="projectImg" />
                        <h6 className="grid__item-text">WAAW ANONYMOUS APP</h6>
                    </a>
                </div>

                <div className="projects__grid-item">
                    <a href="https://waawchat.herokuapp.com" target="_blank" rel="noreferrer">
                        <img src={WaawChat} alt="WaawChat" className="projectImg" />
                        <h6 className="grid__item-text">WAAW CHAT</h6>
                    </a>
                </div>

                <div className="projects__grid-item">
                    {/* <img src={'Portfolio'} alt="" className="projectImg" />
                    <h6 className="grid__item-text"></h6> */}
                </div>

                <div className="projects__grid-item">
                    {/* <img src={''} alt="" className="projectImg" />
                    <h6 className="grid__item-text"></h6> */}
                </div>

                <div className="projects__grid-item">
                    {/* <img src={''} alt="" className="projectImg" />
                    <h6 className="grid__item-text"></h6> */}
                </div>

            </div>

        </div>
    )
}

export default myProjects
