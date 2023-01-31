import Link from "next/link";

import React from 'react'

export default function Layout({children}) {
  return (
    <div className="flex flex-col min-h-screen">
        <header className="bg-gray-900 mb-8 py-4 text-white">
            <div className="container mx-auto flex justify-center">
              <Link href='/'>
                Home
              </Link>
              <span className="mx-auto">
                Welcone to my blog
              </span>
            </div>
        </header>
        <main className="container mx-auto flex-1">
          {children}  
        </main>
        <footer className="bg-gray-900 mt-8 py-4 text-white">
          <div className="container mx-auto flex justify-center">
            &copy; 2023 Ian Peng    
          </div>
        </footer>
    </div>
  )
}
