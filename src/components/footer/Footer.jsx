import {useContext} from 'react'
import './footer.css'
import Copyright from '../../pics/copyright.png';
import { ThemeContext } from '../../context';
import { motion } from 'framer-motion';


const footerLinkVariants = {
    whileHover: {scale: 1.15, transition: {type: 'spring', stiffness: 300}}
}


const Footer = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className='footer' style={{backgroundColor: theme.state.darkMode ? 'rgba(33, 37, 41, 1)' : 'rgba(33, 37, 41, 1)', color: theme.state.darkMode ? '#e9ada6' : '#e9ada6'}}>
            <div className="copyright"><span><img className="cc" src={Copyright} alt="Copyright" aria-hidden="true" /></span>2021. Ogefere Ogheneruno All Rights Reserved</div>
            
            <ul className="ul">
                <motion.li
                    variants={footerLinkVariants} 
                    whileHover="whileHover"
                >
                    <a href="https://github.com/Ogheneruno" className="links" target="_blank" rel="noreferrer">Github</a>
                </motion.li>

                <motion.li
                    variants={footerLinkVariants} 
                    whileHover="whileHover"
                >
                    <a href="https://www.facebook.com/ogefereogheneruno" className="links" target="_blank" rel="noreferrer">Facebook</a>
                </motion.li>

                <motion.li
                    variants={footerLinkVariants} 
                    whileHover="whileHover"
                >
                    <a href="https://www.linkedin.com/in/ogefere-ogheneruno-a4aa2a14a" className="links" target="_blank" rel="noreferrer">Linkedin</a>
                </motion.li>

            </ul>
        </div>
    )
}

export default Footer
