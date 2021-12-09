import React, {useContext} from 'react';
import './App.css';
import Toggle from './components/screen mode/Toggle';
import { ThemeContext } from './context';
import ContactMe from './contactMe/contactMe'
import Intro from './intro/intro';
import Projects from './projects/myProjects'
import Skills from './skills/skills';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import View from './components/View';


const App = () => {
  const theme = useContext(ThemeContext);

  const { darkMode } = theme.state;

  return (
    <div className="App" style = {{ backgroundColor: darkMode ? '#000' : '#FDF6F0', color: darkMode && '#FDF6F0' }}>
      <Routes>
        <Route exact path="/" element={<Intro />}></Route>
        {/* <Route path="/intro" element={<Intro />}></Route> */}
        <Route path="/skills" element= {<Skills />}></Route>
        <Route path="/myProjects" element= {<Projects />}></Route>
        <Route path="/contactMe" element= {<ContactMe />}></Route>
      </Routes>
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
