"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";


export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialIcons />
      </main>
      <Footer />
    </div>
  )
}
