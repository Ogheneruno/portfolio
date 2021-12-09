import {useContext} from 'react'
import './footer.css'
import Copyright from '../../pics/copyright.png';
import { ThemeContext } from '../../context';


const Footer = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className='footer' style={{backgroundColor: theme.state.darkMode ? 'rgba(33, 37, 41, 1)' : 'rgba(33, 37, 41, 1)', color: theme.state.darkMode ? '#e9ada6' : '#e9ada6'}}>
            <div className="copyright"><span><img className="cc" src={Copyright} alt="Copyright" aria-hidden="true" /></span>2021. Ogefere Ogheneruno All Rights Reserved</div>
            
            <ul className="ul">
                <li>
                    <a href="https://github.com/Ogheneruno" className="links" target="_blank" rel="noreferrer">Github</a>
                </li>

                <li>
                    <a href="https://www.facebook.com/ogefereogheneruno" className="links" target="_blank" rel="noreferrer">Facebook</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/ogefere-ogheneruno-a4aa2a14a" className="links" target="_blank" rel="noreferrer">Linkedin</a>
                </li>

            </ul>
        </div>
    )
}

export default Footer
