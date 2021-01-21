import React from 'react'

class ContactForm extends React.Component{
    render(){
        return(
            <div className = 'flex items-center justify-center'>
            <div class="p-6 mr-2 rounded-lg">
            <h1 class="text-5xl  text-black font-extrabold">
                Contact Me
            </h1>


            <div class="flex items-center mt-4 ml-5 text-white">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div class="ml-4 text-md font-semibold w-40">
                    +1 254-633-7837
                </div>
            </div>

            <div class="flex items-center mt-2 ml-3 text-white">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div class="ml-4 text-md font-semibold w-40">
                    abdullah2808@tamu.edu
                </div>
            </div>
            </div>
            </div>
           
        )
    }
}

export default ContactForm

