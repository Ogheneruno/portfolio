import {useContext} from 'react';
import './App.css';
// import Toggle from './components/screen mode/Toggle';
import { ThemeContext } from './context';
import ContactMe from './contactMe/contactMe'
import Intro from './intro/intro';
import Projects from './projects/myProjects'
import Skills from './skills/skills';
// import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, useLocation, Switch } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();

  const { darkMode } = theme.state;

  return (
    <div className="App" style = {{ backgroundColor: darkMode ? '#000' : '#FDF6F0', color: darkMode && '#FDF6F0' }}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Intro}></Route>
          {/* <Route path="/intro" element={<Intro />}></Route> */}
          <Route path="/skills" component= {Skills}></Route>
          <Route path="/myProjects" component= {Projects}></Route>
          <Route path="/contactMe" component= {ContactMe}></Route>
        </Switch>
      </AnimatePresence>
      {/* <Toggle />
      <Intro />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer /> */}
      {/* <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div> */}
    </div>
  )
}

export default App;






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
