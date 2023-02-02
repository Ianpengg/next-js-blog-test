
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';


export default function Hero({}) {
  const [text, count] = useTypewriter({
    words:[
    `Hi, The name is Ian Peng`,
    "Guys who love technology and coding",
  ],
  loop: true,
  delaySpeed: 2000,
  });

  return (
  <div className='snap-center snap-y h-screen flex flex-col space-y-5 items-center 
  justify-center text-center overflow-hidden '>
    <BackgroundCircles/>
    <img 
      className="relative rounded-full h-32 w-32 mx-auto object-cover"
      src={'/images/myphoto.jpg'}
      alt=""
    />
    <div className="z-20">
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        software engineer 
      </h2>
      <h1 className="text-xl lg:text-6xl font-semibold px-10">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
      </h1>
    </div>
  </div>
  );
}