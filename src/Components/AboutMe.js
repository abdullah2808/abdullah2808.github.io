import React from 'react'

class AboutMe extends React.Component{
    render(){
        return(
            <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div class="max-h-96 md:h-screen">
              <img class="w-screen h-screen object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            </div>
            <div class="flex bg-gray-100 p-10">
              <div class="mb-auto mt-auto max-w-lg">
                <h1 class="text-3xl uppercase">Abdullah Ahmad</h1>
                <p class="font-semibold mb-5">Undergraduate Electrical Engineering Student</p>
                <p>Electrical blah blah blah</p>
              </div>
            </div>
          </div>
        )
    }
}

export default AboutMe