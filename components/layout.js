import Link from "next/link";
import Navbar from "./Navbar";
import React from 'react'

export default function Layout({children, nav, setNav}) {
  return (
      <>
        <Navbar setNav={setNav}/> 
        <main className={`container mx-auto flex-1 dark:text-slate-200 ${nav ? 'hidden' : ''}`}>
          {children}  
        </main>

        <footer className={`dark:bg-black bg-white/80 mt-8 py-4 dark:text-slate-200 ${nav ? 'hidden' : ''}`}>
          <div className="container mx-auto flex justify-center">
            &copy; 2023 Ian Peng    
          </div>
        </footer>
      </>  
    // </div>
  )
}
