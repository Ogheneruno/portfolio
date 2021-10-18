import React, { useContext } from 'react';
import './Toggle.css';
import { ThemeContext } from '../../context';
import Sun from '../../pics/sun.png';
import Moon from '../../pics/moon.png';


const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: 'TOGGLE' })
    }

    return (
        <>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list__item"><a href="#skills">Skills</a></li>
                <li className="nav__list__item"><a href="#myProjects">Projects</a></li>
                <li className="nav__list__item"><a href="#contactMe">Contact Me</a></li>
            </ul>
        </nav>

        <div className="logo__icon">OO</div>

        <div className="toggle" onClick = { handleClick }>
            <img src={ Sun } alt="light" className="toggle__icon" />
            <img src={ Moon } alt="dark" className="toggle__icon" />
            <div className="toggle__button" style = {{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
        </>
    )
}

export default Toggle;
