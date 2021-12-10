import React, {useState, useEffect, useContext } from 'react';
import './Toggle.css';
import { ThemeContext } from '../../context';
import { Link, useHistory } from 'react-router-dom';
import Sun from '../../pics/sun.png';
import Moon from '../../pics/moon.png';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Toggle = () => {
    const theme = useContext(ThemeContext);
    const [expanded, setExpanded] = useState(true);
    const navigate = useHistory();
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
                    <Link className='navbar-brand' to='/'><span className="logo__icon">OO</span></Link>
                    <button className='navbar-toggler' type='button' data-toggle='collapse'
                    data-target="#navbarSuppportedContent" aria-controls='navbarnavbarSuppportedContent' aria-expanded='false'
                    aria-label='Toggle navigation'>
                        {expanded}
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSuppportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/skills">Skills <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/myProjects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactMe">Contact Me</Link>
                            </li>
                            <li className="nav-item">
                                <div className="toggle" onClick = { handleClick }>
                                    <img src={ Sun } alt="light" className="toggle__icon" />
                                    <img src={ Moon } alt="dark" className="toggle__icon" />
                                    <div className="toggle__button" style = {{ left: theme.state.darkMode ? 0 : 25 }}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Toggle;
