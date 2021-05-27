import { render } from '@testing-library/react'
import React from 'react'
import Pdf from './Resume.pdf';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import MainContent from './MainContent.js';
import ContactForm from './ContactForm.js';
import Projects from './Projects.js';
import AboutMe from './AboutMe.js';

class Navbar extends React.Component{
    render(){
    return(
        <Router>
        <div className = "bg-gray-100">
        <div className = " bg-pink-400 p-5 font-mono text-lg">
            <nav className = "flex justify-between " >
                <div>
                    <ul className = 'flex flex-rows'>
                        <li><Link to = "/" className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white"> Home         </Link></li>
                        <li><Link to = '/Projects' className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white"> Projects     </Link> </li>
                        <li><a href = 'https://github.com/abdullah2808/' className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white" target="_blank"> GitHub    </a></li>
                        <li><a href = {Pdf} className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white" target="_blank"> Resume       </a></li>
                    </ul>
                </div>

                <div> 
                    <a href = '#' className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white"> Contact Me   </a>
                </div>
            </nav>
            </div>
            <Switch>
          <Route path="/">
          <div className = "bg-gray-100">
            <div> <AboutMe/> </div>
            <div classname = "rounded-b-lg"> <MainContent/> </div>
            <div className = 'bg-gray-100 mt-10'> <Projects/> </div>
            <div className ='bg-gray-600'> <div className = 'mt-20 p-10'> <ContactForm/> </div></div>
            </div>
          </Route>
          <Route path="/Projects">
          <div className = "bg-gray-100">
            <div className = 'bg-gray-100 mt-10'> <Projects/> </div>
            </div>
          </Route>
        </Switch>

        </div>
        </Router>
    )
    }
}
export default Navbar