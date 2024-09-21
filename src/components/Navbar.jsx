import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className='logo flex items-center font-bold text-white text-2xl'>

                    {/* Logo-icon animation */}
                    <lord-icon
                        src="https://cdn.lordicon.com/khheayfj.json"
                        trigger="loop"
                        delay="1500"
                        stroke="bold"
                        colors="primary:#c71f16,secondary:#ffffff"
                        style={{ width: '40px', height: '40px' }}
                    >
                    </lord-icon>
                    <span className='ml-2'>Pass<span className='text-red-700'>Keeper</span></span>
                </div>
                
                <div className='flex justify-end'>
                    {/* github navbar */}
                    <a href="https://github.com/gauravchaudhari-git" target="_blank" rel="noopener noreferrer" className='text-white bg-purple-800 hover:bg-purple-700 active:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200 my-5 mx-2 rounded-full flex justify-between items-center ring-white ring-1 shadow-lg no-underline'>
                        <img className='invert w-10 p-1' src="/icons/github.svg" alt="github logo" />
                        <span className='font-bold px-3'>GitHub</span>
                    </a>
                    {/* linkedin navbar */}
                    <a href="https://linkedin.com/in/gaurav-chaudhari223" target="_blank" rel="noopener noreferrer" className='text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 my-5 mx-2 rounded-full flex justify-between items-center ring-white ring-1 shadow-lg no-underline'>
                        <img className='invert w-10 p-1' src="/icons/linkedin.svg" alt="linkedin logo" />
                        <span className='font-bold px-3'>LinkedIn</span>
                    </a>
                </div>



            </div>
        </nav>
    )
}

export default Navbar
