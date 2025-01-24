"use client";

import Image from 'next/image';
import React, { useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'О школе', href: '#' },
  { label: 'Курсы', href: '#' },
  { label: 'Библиотека', href: '#' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="h-[60px] border-b border-gray-200 flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        <a href="#" className="flex items-center space-x-4">
          <Image
            src="assets/logo.svg"
            alt="Logo"
            width={28}
            height={28}
          />
          <span className="tracking-wide">STEMPS</span>
        </a>

        <nav className="flex-grow ml-[300px] hidden md:flex space-x-6" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="cursor-pointer">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4 cursor-pointer group">
          <span>Вход</span>
          <button
            type="button"
            className="flex items-center justify-center w-[25px] h-[28px] bg-black rounded-md relative"
            aria-label="Enter"
          >
            <Image
              className="absolute right-2 transition-transform duration-500 mix-blend-difference group-hover:translate-x-2"
              src="assets/right-arrow.svg"
              alt="arrow"
              width={23}
              height={16}
            />
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="bg-black text-white py-1 px-2 rounded-md cursor-pointer md:hidden"
          aria-label="Toggle Menu"
        >
          Меню
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-[#fafafa] shadow-lg z-10 md:hidden">
          <nav className="flex flex-col p-4 space-y-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="cursor-pointer">
                {item.label}
              </a>
            ))}
            <a href="#" className="cursor-pointer">
              Вход
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;