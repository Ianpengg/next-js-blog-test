import Link from "next/link";
import Navbar from "./Navbar";
import React from 'react'
import Head from "next/head";
export default function Layout({children}) {
  return (
    
      <>
        <Head>
          <title>Ian website</title>
          <link rel="icon" href="/images/favicon.ico"/>
        </Head>
        <Navbar /> 
        <main className="container mx-auto flex-1 dark:text-slate-200 ">
          {children}  
        </main>
        <footer className="dark:bg-black bg-white/80 mt-8 py-4 dark:text-slate-200">
          <div className="container mx-auto flex justify-center">
            &copy; 2023 Ian Peng    
          </div>
        </footer>
      </>  
    // </div>
  )
}
