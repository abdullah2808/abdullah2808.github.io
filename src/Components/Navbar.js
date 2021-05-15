import { render } from '@testing-library/react'
import React from 'react'
import Pdf from './Resume.pdf';

class Navbar extends React.Component{
    render(){
    return(
        <div className = " bg-pink-400 p-5 font-mono text-lg">
            <nav className = "flex justify-between " >
                <div>
                    <ul className = 'flex flex-rows'>
                        <li><a href = "#" className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white"> Home         </a></li>
                        <li><a href = '#' className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white"> Projects     </a> </li>
                        <li><a href = 'https://github.com/abdullah2808/' className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white" target="_blank"> GitHub       </a></li>
                        <li><a href = {Pdf} className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white" target="_blank"> Resume       </a></li>
                    </ul>
                </div>

                <div> 
                    <a href = '#' className = "block px-4 py-2 text-md font-extrabold text-gray-700 rounded-md hover:bg-white"> Contact Me   </a>
                </div>
            </nav>
        </div>
    )
    }
}
export default Navbar