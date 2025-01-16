'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';


interface Project {
  title: string;
  period: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Examination Hall Software",
    period: "Aug 2023 - Current",
    description: "Developing software for school's examination hall using networking protocols."
  },
  {
    title: "Object-Oriented Programming Projects",
    period: "Aug 2023 - Current",
    description: "Developing games like Snake and Tetris using Scala with emphasis on immutability."
  },
  {
    title: "IJVM Interpreter",
    period: "Jun 2023",
    description: "Created a Java assembly interpreter using C, working with byte code implementation."
  },
  {
    title: "Chat Application",
    period: "May 2023 - Jun 2023",
    description: "Built a chat application using Python with TCP and UDP protocols."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <Section id="about" className="bg-gradient-to-b from-black to-purple-900" title="About Me">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-12">
            Enthusiastic computer science student with a strong passion for coding and problem-solving. 
            Eager to pursue a career as a developer, utilizing my foundational knowledge in programming, 
            algorithms, and data structures.
          </p>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-purple-300 mb-6">Work Experience</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold">IT Digital Support</h4>
                  <p className="text-purple-200 mb-2">Vrije Universiteit of Amsterdam (2022 - Present)</p>
                  <p>Supporting the exam hall and assisting students with IT-related issues during exams.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Commercial Graphic Designer</h4>
                  <p className="text-purple-200 mb-2">Barg Print (2019 - 2020)</p>
                  <p>Managing client portfolio, building branding, and designing websites and print materials.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-purple-300 mb-6">Education</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold">Bachelor's in Computer Science</h4>
                  <p className="text-purple-200">Vrije Universiteit Amsterdam (2022 - Present)</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Information Technology</h4>
                  <p className="text-purple-200">Payame Noor University (2015 - 2019)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-gradient-to-b from-purple-900 to-black" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-black border border-purple-500/50 
                         hover:border-purple-400 hover:from-purple-900 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-purple-300/80 text-sm mb-2">{project.period}</p>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-gradient-to-b from-black to-purple-900" title="Contact Me">
        <ContactForm />
      </Section>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-purple-900 border-t border-purple-900/30">
        <p className="text-lg font-serif bg-gradient-to-r from-purple-500 to-white text-transparent bg-clip-text">
          © 2024 Zaher Lavi
        </p>
      </footer>
    </div>
  );
}