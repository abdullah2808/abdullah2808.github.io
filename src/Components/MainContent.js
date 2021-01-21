import React from 'react'

class MainContent extends React.Component{
    render(){
        return(      
            <div className = "flex justify between bg-gray-600">              
                <div class="lg:text-center px-12 py-12">
                    <h2 class="text-base text-blue-500 font-semibold tracking-wide uppercase">Education</h2>
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
                        Texas A&M University
                    </p>
                    <p class="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
                        Pursuing a bachelor of science in Electrical Engineering alongside a Computer Science minor.
                    </p>
                    
                </div>

                <div class="lg:text-center px-12 py-12 ">
                    <h2 class="text-base text-yellow-400 font-semibold tracking-wide uppercase">Personal Project</h2>
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
                        Calorie Counting Bowl
                    </p>
                    <p class="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
                        A calorie counting bowl that utilizes an Arduino with load cells to measure weight and generates an accurate caloric count for meals.
                    </p>
                </div>
                <div class="lg:text-center px-12 py-12">
                    <h2 class="text-base text-purple-500 font-semibold tracking-wide uppercase">T.U.R.T.L.E Robotics</h2>
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
                        Quadruped Team
                    </p>
                    <p class="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
                        Working together with a team of students, we are constructing a quadruped robot that is operated with a PS2 controller.
                    </p>
                </div>
            </div>
  

        )

    }
}

export default MainContent