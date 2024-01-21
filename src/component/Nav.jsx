import {useState} from "react"
import logo from "../assets/logo.png";
import {Transition} from "@headlessui/react" //installed from a library
import { Link, Outlet, useNavigate } from "react-router-dom";

function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    let links = [
        {name : "Home", to: "/"},
        {name : "Bond", to: "/"},
        {name : "Automated Investing", to: "/"},
        {name : "Stocks", to: "/"},
        {name : "Cash", to: "/"},
    ]

  return (
    <div className="">
        <nav className=" sticky w-full z-10 ">
          <div className="w-full top-0 ">
              <div className="flex mt-6 lg:h-25 w-full">
                  <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/", {replace:false})}>
                           <img
                                src={logo}
                                width={161}
                                height={49.31}
                                alt=""
                             />
                             
                          </div>

                          <div className="hidden md:block">
                              <div className="ml-10 flex items-center space-x-4 "> 
                                <ul className={`md:flex md:items-center md:pb-0 pb-12  transition-all duration-500 ease-in `}>
                                        {links.map((link) => (
                                                <li key={link.name} className="md:ml-8 text-md md:my-0 my-7"> 
                                                        <Link to={link.to} className="text-indigo-950 font-bold hover:text-indigo-600 duration-500" >
                                                        {link.name}
                                                        </Link>   
                                                </li>
                                        ))}

                                 </ul> 
                                   
                              </div>
                          </div>

                          <div className="hidden md:block">
                              <div className="ml-10 flex items-center space-x-2 "> 

                                <button className="bg-transparent text-indigo-950 border-2 border-indigo-900 font-semibold font-[Poppins] py-2 px-6 rounded-md md:ml-8 duration-500 ">
                                    Log In
                                </button> 

                                <button className="bg-indigo-950 text-white font-[Poppins] py-2 px-6 font-semibold rounded-md md:ml-8 hover:bg-indigo-400 duration-500 ">
                                        Get Started
                                </button>
                                   
                              </div>
                          </div>
                      
                  </div>

                    {/*Making it Mobile Responsive */}
                  <div className=" flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className=" inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-950 focus:outline-none focus:ring-offset-2 focus:ring-offset-indigo-950 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        >
                                {/* shape code */}
                        <span className="sr-only"> Open main menu </span>
                            {!isOpen ? (
                                //menu shape
                                <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#558AC8" aria-hidden="true" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" fill="#558AC8" /> 
                                </svg>
                            ): (
                                //cross shape
                                <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" stroke="#558AC8" aria-hidden="true" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            )}  
                            
                        </button>
                  </div>
              </div>
          </div>

            <Transition 
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95" 
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100  scale-100" 
                leaveTo="opacity-0 scale-95"
                >  
                    {(ref) => (
                        //handles the mobile menu tabs
                        <div className="md:hidden id-mobile-menu">
                                <div ref={ref} className=" text-spyrth-white px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                                        
                                         
                                        <a href="/about" className="cursor-pointer text-lg text-indigo-950 block  py-2 "> Home </a>
                                        <a href="/about" className="cursor-pointer text-lg text-indigo-950 block  py-2 "> Cash</a>
                                        <a href="/about" className="cursor-pointer text-lg text-indigo-950 block  py-2 "> Bond </a>
                                        <a href="/about" className="cursor-pointer text-lg text-indigo-950 block  py-2 "> Stocks </a>
                                        <a href="/contact" className="cursor-pointer text-lg text-indigo-950 block py-2">Profile</a>
                                  
                                    
                                </div>
                        </div>
                    )}  
            </Transition>



        </nav>

        <Outlet/>
    </div>
  )
}

export default Nav;