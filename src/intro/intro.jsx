import { useContext } from 'react';
import './intro.css';
import Me4 from '../pics/me4.png';
import { ThemeContext } from '../context';
import Typed from 'react-typed';
import View from '../components/View';
import { Link } from 'react-router-dom';

const Intro = () => {
    const theme = useContext(ThemeContext);
    const { darkMode } = theme.state;

    return (
        <View>
            <div className="intro">
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
            </div>
        </View>
    )
}

export default Intro
