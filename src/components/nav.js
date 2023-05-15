import Link from "next/link";
import Hamburger from "./hamburger";
import { useState, useEffect } from "react";

export default function Navbar() {

    const [top, setTop] = useState(true);

    const [showMenu, setShowMenu] = useState(false);
  
  
    let menu
  
    if(showMenu) {
  
  
      menu = 
      <div className="h-screen w-full bg-white  z-50 fixed top-16">
         <div className="">
           <div className="pt-4 mx-auto">
                    <div className="p-2">
                    <ul className="row text-dark">
                    <Link href="/#" className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-main-green  text-right">
                        Home
                    </Link>
                    <Link href="/services" className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-main-green text-right">
                        Services
                    </Link>
                    <Link href="/about" className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-main-green text-right">
                        About Us
                    </Link>

                    <Link href="/#" className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-main-green text-right">
                    Insights
                    </Link>

                    <Link href="/contact" className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 hover:text-main-green text-right">
                    Contact Us
                    </Link>
                    
                    </ul>
                    </div>
                    
              </div>
              
            </div>
      </div>
    }

     useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

    return (

        <div>
        <nav className={`fixed w-full z-50 md:bg-opacity-80 transition duration-300 ease-in-out text-black ${!top && 'bg-white shadow-lg text-black'} hidden md:block z-50`}>
            <div className='w-5/6 mx-auto'>
            <div className="hidden lg:visible w-full block flex-grow lg:flex lg:items-center lg:w-auto grid grid-cols-2">
                <div className='text-left pt-10'>
                  <Link href="/#"><img src="gray-logo.svg" alt="company logo" className="h-20 pb-10 " /></Link>
                </div>
                <div className="text-xl font-medium  text-dark  lg:flex-grow text-right pt-2">
                    <Link href="/#" className="px-4 link link--underline block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-main-green ">
                        Home
                    </Link>
                    <Link href="/services" className="px-4 link link--underline block mt-4 lg:inline-block font-bold lg:mt-0 hover:text-main-green ">
                        Services
                    </Link>
                    <Link href="/about" className="px-4 link link--underline block mt-4 lg:inline-block font-bold lg:mt-0 hover:text-main-green ">
                        About Us
                    </Link>

                    <Link href="#" className="px-4 link link--underline block mt-4 lg:inline-block font-bold lg:mt-0 hover:text-main-green ">
                        Insights
                    </Link>

                    <Link href="/contact" className="px-4 link link--underline block mt-4 font-bold lg:inline-block lg:mt-0 hover:text-main-green ">
                    Contact Us
                    </Link>
                </div>
                
            </div>
            
            </div>
        </nav>

  <nav className={`fixed w-full z-50 bg-white transition duration-300 ease-in-out block lg:hidden z-50`}>
    <div className="w-screen flex items-center justify-between h-16 md:h-20">
          <div className="p-5">
            <Link href="/" className="block">
             <img className="md:mx-auto h-10" src="gray-logo.svg" />
            </Link>
          </div>
      <span className="p-5 right-0 fixed">
        <div className="menu-btn" 
        onClick={() => setShowMenu(!showMenu)}>
          <div>
            <Hamburger isOpen={showMenu}/>
          </div>
        </div>
      </span>
    </div>
    </nav>
    { menu }

    </div>


    )
}