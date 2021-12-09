import Footer from './footer/Footer';
import Toggle from './screen mode/Toggle';
import './view.css';

const View = ({children}) => {
    return (
        <>
            <Toggle />
            <div className="view" style={{height: '86.7vh', overflowY: 'hidden', transition: 'all 15s ease-out !important'}}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default View;
