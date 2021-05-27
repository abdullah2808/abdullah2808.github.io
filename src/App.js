import React from 'react'
import Navbar from './Components/Navbar.js'
import MainContent from './Components/MainContent.js'
import ContactForm from './Components/ContactForm.js'
import Projects from './Components/Projects.js'
import AboutMe from './Components/AboutMe.js'
import Pdf from './Components/Resume.pdf';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class App extends React.Component
{
    render(){
    return(
        <Router className>
        <div className = "bg-gray-100">
        <div className = " bg-pink-400 p-5 font-mono text-lg">
            <nav className = "flex justify-between " >
                <div>
                    <ul className = 'flex flex-rows'>
                        <li><Link to = "/website" className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white"> Home         </Link></li>
                        <li><Link to = '/website/Projects' className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white"> Projects     </Link> </li>
                        <li><a href = 'https://github.com/abdullah2808/' className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white" target="_blank"> GitHub    </a></li>
                        <li><a href = {Pdf} className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white" target="_blank"> Resume       </a></li>
                    </ul>
                </div>

                <div> 
                    <a href = '/website/ContactForm' className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white"> Contact Me   </a>
                </div>
                
            </nav>
            </div>
            </div>
            <Switch>
          
          <Route path="/website/Projects">
          <div className = "bg-gray-100 pt-10">
          <Projects/> 
          </div>
          </Route>
          <Route path ="/website/ContactForm">
          <div  className = "bg-gray-600" >
          <ContactForm/>
          </div>
          </Route>
          <Route path="/website">
          <div className = "bg-gray-100">
            <div> <AboutMe/> </div>
            <div classname = "rounded-b-lg"> <MainContent/> </div>
            <div className = 'bg-gray-100 mt-10'> <Projects/> </div>
            <div className ='bg-gray-600'> <div className = 'mt-20 p-10'> <ContactForm/> </div></div>
            </div>
          </Route>
        </Switch>
        </Router>
    )
    }
}


export default App;
