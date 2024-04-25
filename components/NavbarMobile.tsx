'use client'

import React, { useState, useEffect, useRef } from 'react';

interface NavbarMobileProps {
    closeMenu: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ closeMenu }) => {
    const handleMenuItemClick = () => {
        closeMenu();
    };

    return(
        <div className="fixed top-0 left-0 mt-10 ml-1 bg-purple-900 flex flex-col justify-start items-start">
            <a href="#about" className="mx-1 text-2xl text-white hover:text-indigo-300" onClick={handleMenuItemClick}>About Me</a>
            <a href="#projects" className="mx-1 text-2xl text-white hover:text-indigo-300" onClick={handleMenuItemClick}>Projects</a>
            <a href="#blog" className="mx-1 text-2xl text-white hover:text-indigo-300" onClick={handleMenuItemClick}>Blog Posts</a>
            <a href="#contact" className="mx-1 text-2xl text-white hover:text-indigo-300" onClick={handleMenuItemClick}>Contact Me</a>
        </div>
    );
};

const NavbarMobileContainer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="visible md:invisible flex flex-col justify-center items-center">
            <button onClick={toggleMenu} className="text-4xl text-indigo-400 hover:text-indigo-500 hover:cursor-pointer">&#9776;</button>
            {isOpen && <NavbarMobile closeMenu={() => setIsOpen(false)} />}
        </div>
    );
};

export default NavbarMobileContainer;
