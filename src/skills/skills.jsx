// import { useContext } from 'react';
import { motion } from 'framer-motion';
import View from '../components/View';
import './skills.css';
// import { ThemeContext } from '../context';


const containerVarients = {
    hidden: {
        opacity: 0,
        x: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { 
            type: "tween", 
            delay: 1.5,
            duration: 1.5
        }
    },
    exit: {
        x: '100vw',
        transition: { ease: 'easeInOut' }
    }
}

const Skills = () => {
    // const theme = useContext(ThemeContext);

    // const { darkMode } = theme.state;

    return (
        <View>
            <motion.div className="skills" id="skills"
                variants={containerVarients}
                initial= "hidden"
                animate= "visible"
                exit= "exit"
            >

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
            </motion.div>
        </View>
    )
}

export default Skills
