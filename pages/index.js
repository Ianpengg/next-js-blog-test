import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '../components/Hero'


export default function Home({ }) {
  return (
    <div className="z-20">
      <Hero />
    </div>
  )
}
