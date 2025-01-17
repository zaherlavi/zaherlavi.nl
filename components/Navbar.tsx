"use client";

import React, { useState, useEffect, useRef } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <li className="text-2xl p-5">
    <a
      href={href}
      onClick={onClick}
      className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text animate-text-shimmer bg-[length:200%_100%]"
    >
      {children}
    </a>
  </li>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "#about", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-sm">
      {/* Mobile Navigation */}
      <div ref={menuRef} className="flex md:hidden items-center relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-4xl text-indigo-400 hover:text-indigo-500 hover:cursor-pointer p-4"
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
        {isOpen && (
          <div className="absolute top-full left-5 bg-purple-900/85 backdrop-blur-sm shadow-lg rounded-br-lg p-2 animate-fadeIn">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block text-2xl text-white hover:text-indigo-300 py-2 px-4 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center py-2">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
