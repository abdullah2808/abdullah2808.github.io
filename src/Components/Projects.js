import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectText = [
    {
    id: 0,
    src: "https://tailwindcss.com/img/card-top.jpg",
    name: "Calorie Counting Bowl",
    desc: "A calorie counting bowl that counts calories",
    tools: ["React", "Arduino", "API"]
},
{
    id: 1,
    src: "https://images-na.ssl-images-amazon.com/images/I/91DtGmUGArL.png",
    name: "Spectrum Analyzer",
    desc: "Using an Arduino Uno with two MSGEQ7 filters that allow splitting a stereo audio input into 7 channels, then the amplitude of each channel is displayed on a RGB LED Matrix.",
    tools: ["Electronics", "Arduino", "Signal Processing"]
},
{
    id: 2,
    src: "https://i.imgur.com/uCND4zD.png",
    name: "Akhi",
    desc: "Akhi means ”My Brother” in Arabic. Akhi is a design brand I created in high school that consists of minimalist clothing designs. Currently I am working on transitioning Akhi into a personal creative portfolio that contains my projects and creative work.",
    tools: ["Adobe Studio", "Social Media", "Marketing"]
},
{
    id: 3,
    src: "https://tailwindcss.com/img/card-top.jpg",
    name: "Quadruped Team",
    desc: "TURTLE stands for Texas A&M University Robotics Team and Leadership Experience. Working together with a team of students we are constructing a quadruped robot that is operated with a PS2 controller.",
    tools: ["Electronics", "Arduino", "Fabrication"]
}
]

const ProjectComponents = ProjectText.map(project => <ProjectCard key={project.id} src={project.src} name={project.name} desc={project.desc} tools={project.tools}/>)

class Projects extends React.Component{
    render(){
        return(
            <div className = "bg-gray-100">
                <h1 className = "text-5xl  text-black font-extrabold text-center"> Projects </h1>

                <div className = "grid grid-flow-col gap-5 ml-20 mr-20 mt-7"> 
                {ProjectComponents}
                </div>

            </div>
        )
    }
}

export default Projects