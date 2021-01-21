import React from 'react'
import Navbar from './Components/Navbar.js'
import MainContent from './Components/MainContent.js'
import ContactForm from './Components/ContactForm.js'
import Projects from './Components/Projects.js'
import AboutMe from './Components/AboutMe.js'

class App extends React.Component
{
  render(){
  return (
    <div className = "bg-gray-100">
      <Navbar />
      <div> <AboutMe/> </div>
      <div classname = "rounded-b-lg"> <MainContent/> </div>
      <div className = 'bg-gray-100 mt-10'> <Projects/> </div>
      <div className ='bg-gray-600'> <div className = 'mt-20 p-10'> <ContactForm/> </div></div>
    </div>
    

  )
  }
}

export default App;
