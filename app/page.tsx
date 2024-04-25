import React from "react";
import { merriweather } from "./ui/fonts";
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import NavbarMobile from "@/components/NavbarMobile";
import Image from 'next/image'


export default function Home() {
  return (
    <div className="grid grid-cols-1">
      <nav className="flex md:hidden items-center">
        <NavbarMobile />
      </nav>
      <div className="order-2 md:order-1 grid lg:grid-cols-2 md:justify-items-center mt-20 md:mt-32 md:mb-32">
        <div className="md:w-1/2 flex justify-center md:items-center mb-20 md:mb-0">
          <div>
            <div>
              <h1 className={`${merriweather.className} antialiased tracking- wider leading-10 bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text text-2xl md:text-4xl pb-2`}>
                Hello, <br />
                I’m Zaher Lavi,
              </h1>
              <p className={`${merriweather.className} antialiased tracking- wider leading-10 bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text text-xl md:text-2xl pb-2`}>
                Computer Science
                <br />
                Student
              </p>
              <p className={`${merriweather.className} antialiased tracking- wider leading-10 bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text text-lg md:text-xl pb-2`}>
                Based in The Netherlands.
              </p>
            </div>
            <Button>
              <a href="./Zaher Lavi CV English copy.pdf">Download CV</a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:items-center">
          <ul className="lg:block flex justify-center">
            <li className="p-5">
              <a href="https://github.com/zaherlavi">
                <Image
                  className="hover:scale-110"
                  width={48}
                  height={48}
                  src="/githubIcon.svg" 
                  alt="Github Icon" 
                  quality={90}
                  />
              </a>
            </li>
            <li className="p-5">
              <a href="https://www.linkedin.com/in/zaher-lavi-a85a70172/">
                <Image
                  className="hover:scale-110" 
                  src="./linkedinIcon.svg"
                  width={48}
                  height={48} 
                  alt="linkedin Icon" 
                  />
              </a>
            </li>
            <li className="p-5">
              <a href="https://www.instagram.com/zaher.lavi/">
                <Image 
                  className="hover:scale-110"
                  src="./instagramIcon.svg" 
                  width={48}
                  height={48}
                  alt="Instagram Icon" 
                  />
              </a>
            </li>
            <li className="p-5">
              <a href="https://twitter.com/NULL____pointer">
                <Image 
                  className="hover:scale-110"
                  src="./xIcon.svg"
                  width={48}
                  height={48}
                  alt="X Icon" 
                  />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="order-1 md:order-2 hidden md:flex justify-start md:justify-center">
        <Navbar />
      </nav>
      <footer className={`${merriweather.className} fixed order-3 md:order-3 bottom-5 left-0 right-0 flex justify-center w-full bg-gradient-to-r from-purple-500 to-white text-transparent bg-clip-text`}>
        <p className="text-lg">© 2024 Zaher Lavi</p>
      </footer>

    </div >
  );
}
