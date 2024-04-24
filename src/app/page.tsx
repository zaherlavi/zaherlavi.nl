import React from "react";
import { merriweather } from "./ui/fonts";
import Button from '@/src/components/Button';
import Navbar from '@/src/components/Navbar';


export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-2 md:justify-items-center mt-32 mb-32">
        <div className="w-1/2 flex items-center">
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
        <div className="w-1/2 flex md:justify-center">
          <ul className="lg:block flex justify-center">
            <li className="p-5">
              <a href="https://github.com/zaherlavi">
                <img className="hover:scale-110" src="./githubIcon.svg" alt="Github Icon" />
              </a>
            </li>
            <li className="p-5">
              <a href="https://www.linkedin.com/in/zaher-lavi-a85a70172/">
                <img className="hover:scale-110" src="./linkedinIcon.svg" alt="linkedin Icon" />
              </a>
            </li>
            <li className="p-5">
              <a href="https://www.instagram.com/zaher.lavi/">
                <img className="hover:scale-110" src="./instagramIcon.svg" alt="Instagram Icon" />
              </a>
            </li>
            <li className="p-5">
              <a href="https://twitter.com/NULL____pointer">
                <img className="hover:scale-110" src="./xIcon.svg" alt="X Icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="flex justify-start md:justify-center">
        <Navbar />
      </nav>
      <footer className={`${merriweather.className} fixed bottom-0 left-0 right-0 flex justify-center w-full bg-gradient-to-r from-purple-500 to-white text-transparent bg-clip-text`}>
        <p className="text-lg">© 2024 Zaher Lavi</p>
      </footer>

    </>
  );
}
