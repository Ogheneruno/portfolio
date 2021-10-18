import React from 'react'
import './footer.css'
import Copyright from '../../pics/copyright.png';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="copyright"><span><img className="cc" src={Copyright} aria-hidden="true" /></span>2021. Ogefere Ogheneruno All Rights Reserved</div>
            
            <ul>
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
