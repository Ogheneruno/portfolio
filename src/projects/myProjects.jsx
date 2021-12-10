import React from 'react';
import './myProjects.css';
import WaawChat from '../pics/waawchat-herokuapp.png';
import WaawAnonymousapp from '../pics/waawanonymousapp-herokuapp.png';
import View from '../components/View';
import { motion } from 'framer-motion';
// import Portfolio from '../pics/ogefereogheneruno-portfolio.png';



const containerVarients = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", delay: 1.5 }
    },
    exit: {
        y: '100vw',
        transition: { ease: 'easeInOut' }
    }
}


const myProjects = () => {
    return (
        <View>
            <motion.div className="projects" id="myProjects"
                variants={containerVarients}
                initial= "hidden"
                animate= "visible"
                exit= "exit"
            >

                {/* <h1 className="myProjects__text">Projects</h1> */}

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

            </motion.div>
        </View>
    )
}

export default myProjects
