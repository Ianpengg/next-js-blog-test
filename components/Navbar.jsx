import React from "react";
import { FaHome, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {  BsFillPersonLinesFill } from "react-icons/bs";
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from "react-icons/ai"
import { Listbox, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import ThemeToggle,{ThemeToggleMobile} from "./ThemeToggle";
import Link from "next/link";


export default function Navbar({setNav}) {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 2 || scrollY - lastScrollY < -2)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };
  const scrollDirection = useScrollDirection();

  const [nav, setNavi] = useState(false)

  const handleNav = () => {
    setNavi(!nav)
    setNav(!nav)
  }
  return (
    <header className={`sticky 
    ${ !nav && scrollDirection === 'down' ? 'md:-top-24 top-0' : 'top-0'
    }
    mb-4 z-999 w-full backdrop-blur flex-none transition-transform duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] 
    bg-white/80 dark:bg-[#0e0e10] `}>
      <div className="max-w-[90rem] mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center justify-between">
            <div className="flex flex-none md:w-auto items-center ">
              <Link href="/">
                <FaHome className="h-[20px] w-[20px] md:h-[30px] md:w-[30px] mx-2 hover:fill-sky-500" />
              </Link>

              <h1 className="text-sm md:text-lg font-semibold uppercase">
                Ian&nbsp;Peng{" "}
              </h1>
            </div>
            <div className="relative hidden md:flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8 text-base">
                <li>
                    <Link
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/aboutme"
                    >
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/project"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <ThemeToggle />
              </div>
            </div>
            
            <div onClick={handleNav} className="md:hidden">
              {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
          </div>
        </div>
        <div className={ nav ? 'fixed left-0 top-16 bottom-10 w-full ' : 'hidden'}>
          {/* Navbar expand page */}
          <div className={ 
            nav
            ? "fixed left-0 w-screen top-16  bg-white dark:bg-[#0e0e10] p-10"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
          <div>
            <div className="flex w-full items-center justify-between">
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 font-semibold uppercase">Welcome to my website!</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase font-bold">
              <Link onClick={handleNav} href='/'>
                <li className="py-4 text-sm hover:text-sky-500 ">Home</li>
              </Link>
              <Link onClick={handleNav} href='/aboutme'>
                <li className="py-4 text-sm hover:text-sky-500">About</li>
              </Link>
              <Link onClick={handleNav} href='/blog'>
                <li className="py-4 text-sm hover:text-sky-500">Project</li>
              </Link>
              <Link onClick={handleNav} href='/'>
                <li className="py-4 text-sm hover:text-sky-500">Contact</li>
              </Link>
            </ul>
            <ThemeToggleMobile className="mt-15 font-bold text-sm"/>
            <div className="pt-[160px]">
              <p className="uppercase tracking-widest items-center justify-center text-center text-black dark:text-white/80">
                Let&prime;s connect
              </p>
              <div className="flex items-center justify-center my-5 space-x-8 w-full sm:w-[100%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-out duration-300">
                  <AiOutlineMail/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-out duration-300">
                  <FaGithub/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-out duration-300">
                  <FaLinkedinIn/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-out duration-300">
                  <BsFillPersonLinesFill/>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
