import { useContext } from 'react';
import './intro.css';
import Me4 from '../pics/me4.png';
import { ThemeContext } from '../context';
import Typed from 'react-typed';
import View from '../components/View';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVarients = {
    hidden: {
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 1, duration: 1.5 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}




const Intro = () => {
    const theme = useContext(ThemeContext);
    const { darkMode } = theme.state;

    return (
        <View>
            <motion.div className="intro"
                variants={containerVarients}
                initial= "hidden"
                animate= "visible"
                exit= "exit"
            >
                <div className = "intro__left">
                    <div className="intro__left__wrapper">
                        <h1 className="intro__greeting">Hi, I'm Runo!</h1>
                        <p className="intro__text">Design, beauty and precision is everything. I have a deep desire to excel, continuously improve in my work and learn more.</p>
                        
                        {/* <div className="intro__title">
                            <h3 className="intro__desc"> */}
                                <Typed 
                                    className="intro__desc"
                                    strings={["Computer Engineer", "UI/UX Designer", "and Web Developer."]}
                                    typeSpeed={50}
                                    backSpeed={70}
                                    loop
                                    />
                                {/* <span></span> */}
                            {/* </h3>
                        </div> */}
                        <Link className="hire__button" type="button" to="/contactMe">Hire Me</Link>
                    </div>
                </div>

                <div className = "intro__right">
                    <div className="intro__bg" style = {{ display: darkMode ? '' : 'none'}}></div>
                    <img src={ Me4 } alt="Ogefere Ogheneruno" className="intro__img" />
                </div>
            </motion.div>
        </View>
    )
}

export default Intro
