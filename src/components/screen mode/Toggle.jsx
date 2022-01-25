import React, { useContext } from 'react';
import './Toggle.css';
import { ThemeContext } from '../../context';
import { Link } from 'react-router-dom';
import Sun from '../../pics/sun.png';
import Moon from '../../pics/moon.png';
import { motion } from 'framer-motion';
// import 'bootstrap/dist/css/bootstrap.min.css';


const logoVariants = {
    initial: {
        y: -250
    },
    animate: {
        y: 0,
        transition: { delay: 0.4, type: 'spring', stiffness: 10 }
    },
};

const buttonVariants = {
    initial: {
        x: "-100px",
    },
    animate: {
        x: 0,
        transition: { delay: 0.7, duration: 1 }
    },
    exit: {
        x: 0,
    }
};

const menuVariants = {
    whileHover: {scale: 1.11, transition: {type: 'spring', stiffness: 300}}
};

const hamburgerVariants = {
    animate: {
        x: 0,
        transition: { delay: 1.5, type: 'spring', stiffness: 120 },
        textShadow: '0px 0px 8px rgb(255, 255, 255)',
        boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    },
};




const Toggle = () => {
    const theme = useContext(ThemeContext);
    // const [expanded, setExpanded] = useState(true);
    // const navigate = useHistory();
    // const navRef = React.useRef()
    // navRef.current = navBackground;

    const handleClick = () => {
        theme.dispatch({ type: 'TOGGLE' })
    }

    // useEffect(() => {
    //     const setSkills = () => {
    //         navigate('/skills')
    //     }
    // }, [])

    // useEffect(()=>{
    //     const handleScroll = () => {
    //         const show = window.scrollY > 50
    //         if(show){
    //             setNavBackground('btn')
    //         } else {
    //             setNavBackground('headerT')
    //         }
    //     }
    //     document.addEventListener('scroll', handleScroll)
    //     return () => {
    //         document.removeEventListener('scroll', handleScroll)
    //     }
    // }, []);

    return (
        <>
            {/* <div className="header" id="header">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list__item"><a href="#skills">Skills</a></li>
                        <li className="nav__list__item"><a href="#myProjects">Projects</a></li>
                        <li className="nav__list__item"><a href="#contactMe">Contact Me</a></li>
                    </ul>
                </nav>
                <div className="toggle" onClick = { handleClick }>
                    <img src={ Sun } alt="light" className="toggle__icon" />
                    <img src={ Moon } alt="dark" className="toggle__icon" />
                    <div className="toggle__button" style = {{ left: theme.state.darkMode ? 0 : 25 }}></div>
                </div>
            </div>
            <div className="header-btn">
                <i className="fa fa-bars"></i>
            </div> */}



            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className="container">
                    <Link className='navbar-brand' to='/'><motion.span className="logo__icon"
                        variants={logoVariants}
                        initial="initial"
                        animate="animate"
                    >OO</motion.span></Link>
                    <motion.button className='navbar-toggler' type='button' data-toggle='collapse'
                    data-target="#navbarSuppportedContent" aria-controls='navbarnavbarSuppportedContent' aria-expanded='false'
                    aria-label='Toggle navigation' variants={hamburgerVariants} animate="animate">
                        <span className='navbar-toggler-icon'></span>
                    </motion.button>

                    <div className="collapse navbar-collapse" id="navbarSuppportedContent">
                        <motion.ul className="navbar-nav mr-auto"
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <motion.li className="nav-item active" variants={menuVariants} whileHover="whileHover">
                                <Link className="nav-link" to="/skills">Skills <span className="sr-only">(current)</span></Link>
                            </motion.li>
                            <motion.li className="nav-item" variants={menuVariants} whileHover="whileHover">
                                <Link className="nav-link" to="/myProjects">Projects</Link>
                            </motion.li>
                            <motion.li className="nav-item" variants={menuVariants} whileHover="whileHover">
                                <Link className="nav-link" to="/contactMe">Contact Me</Link>
                            </motion.li>
                            <li className="nav-item">
                                <div className="toggle" onClick = { handleClick }>
                                    <img src={ Sun } alt="light" className="toggle__icon" />
                                    <img src={ Moon } alt="dark" className="toggle__icon" />
                                    <div className="toggle__button" style = {{ left: theme.state.darkMode ? 0 : 25 }}></div>
                                </div>
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Toggle;
