// import { useContext } from 'react';
import View from '../components/View';
import './skills.css';
// import { ThemeContext } from '../context';


const Skills = () => {
    // const theme = useContext(ThemeContext);

    // const { darkMode } = theme.state;

    return (
        <View>
            <div className="skills" id="skills">

                <h1 className="skills__text"></h1>

                <div className="skills__wrapper">
                    <div className="skills__grid">
                        CSS
                    </div>

                    <div className="skills__grid">
                        HTML
                    </div>

                    <div className="skills__grid">
                        UI/UX DESIGN
                    </div>

                    <div className="skills__grid">
                        MATERIAL UI
                    </div>

                    <div className="skills__grid">
                        PROTOTYPING
                    </div>

                    <div className="skills__grid">
                        JAVASCRIPT
                    </div>

                    <div className="skills__grid">
                        NODE JS
                    </div>

                    <div className="skills__grid">
                        REACT JS
                    </div>

                    <div className="skills__grid">
                        DATABASE MANAGEMENT
                    </div>

                    <div className="skills__grid">
                        MYSQL
                    </div>

                    <div className="skills__grid">
                        MONGO DB
                    </div>

                    <div className="skills__grid">
                        MONGOOSE
                    </div>

                    <div className="skills__grid">
                        BOOTSTRAP
                    </div>

                    <div className="skills__grid">
                        DESIGN SIMULATION
                    </div>

                    <div className="skills__grid">
                        GIT (VERSION CONTROL)
                    </div>

                    <div className="skills__grid">
                        LEADERSHIP
                    </div>

                    <div className="skills__grid">
                        ANALYTICAL
                    </div>

                    <div className="skills__grid">
                        MATHEMATICAL
                    </div>

                    <div className="skills__grid">
                        STRONG WRITTEN AND VERBAL COMMUNICATION
                    </div>
                </div>
            </div>
        </View>
    )
}

export default Skills
