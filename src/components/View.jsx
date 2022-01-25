import Footer from './footer/Footer';
import Toggle from './screen mode/Toggle';
import './view.css';

const View = ({children}) => {
    return (
        <>
            <Toggle />
            <div className="view" style={{height: 'calc(100vh - 6.55rem)', overflowY: 'hidden'}}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default View;
