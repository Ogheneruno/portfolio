import Footer from './footer/Footer';
import Toggle from './screen mode/Toggle';
import './view.css';

const View = ({children}) => {
    return (
        <>
            <Toggle />
            <div className="view" style={{height: '86.7vh', overflowY: 'hidden', overflowX: 'hidden'}}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default View;
