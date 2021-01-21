import React from 'react'

function ProjectCard(props){
        return(
           <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white hover:bg-gray-200">
            <img class="w-full" src={props.src} alt="Sunset in the mountains">
            </img>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">{props.name}</div>
            <p class="text-grey-darker text-base text-center">
             {props.desc}
            </p>
         <div class="mt-4 text-center text-purple-400 object-bottom">
         <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold">{props.tools[0]}</span>
         <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold">{props.tools[1]}</span>
         <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold">{props.tools[2]}</span>
        </div>
  
            </div>

</div>
        )
}

export default ProjectCard

/*
  <div class="px-6 py-4">
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{props.project.tools[0]}</span>
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{props.project.tools[1]}</span>
    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">{props.project.tools[2]}</span>
  </div>
  */
