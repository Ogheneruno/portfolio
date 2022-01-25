import { useContext } from 'react';
import './intro.css';
import Me4 from '../pics/me4.png';
import me2 from '../pics/me2.png';
import { ThemeContext } from '../context';
import Typed from 'react-typed';
import View from '../components/View';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 1, duration: 1.5 },
        staggerChildren: 0.4
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
};

// delay: 1.5, 
// type: 'spring', 
// stiffness: 120,

const buttonVariants = {
    // initial: {
    //     x: '-100vw'
    // },
    animate: {
        x: 0,
        scale: 0.8,
        transition: {  
            yoyo: Infinity,
            duration: 0.45
        },
        textShadow: '0px 0px 8px rgb(255, 255, 255)',
        boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    },
    whileHover: {scale: 0.9, transition: {yoyo: Infinity, duration: 0.35}
    },
};




const Intro = () => {
    const theme = useContext(ThemeContext);
    const { darkMode } = theme.state;

    return (
        <View>
            <motion.div className="intro"
                variants={containerVariants}
                initial= "hidden"
                animate= "visible"
                exit= "exit"
            >
                <div className = "intro__left">
                    <div className="intro__left__wrapper">
                        {/* <div className = "intro__pic">
                            <div className="intro__bg" style = {{ display: darkMode ? '' : 'none', borderRadius: '50%', height: '100px', width: '100px'}}> */}
                                <img src={ me2 } alt="Ogefere Ogheneruno" className="intro__pic" />
                            {/* </div>
                        </div> */}
                        <h1 className="intro__greeting">Hi, I'm Runo!</h1>
                        <p className="intro__text">Design, beauty and precision is everything. I have a deep desire to excel, continuously improve in my work and learn more.</p>
                        
                        {/* <div className="intro__title">
                            <h3 className="intro__desc"> */}
                                <Typed 
                                    className="intro__desc"
                                    strings={["Computer Engineer", "UI/UX Designer", "Web Application Developer."]}
                                    typeSpeed={60}
                                    backSpeed={90}
                                    loop
                                    delay={3}
                                />
                                {/* <span></span> */}
                            {/* </h3>
                        </div> */}
                        <Link className="" type="button" to="/contactMe"><motion.button 
                            className="hire__button"
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="whileHover"
                            >Hire Me</motion.button></Link>
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
