"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Docs', href: '#' },
    { name: 'Templates', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Changelog', href: '#' },
  ];

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1400px] z-50 bg-surface/80 backdrop-blur-md border border-stroke-cyan shadow-sm rounded-xl">
      <div className="flex justify-between items-center px-md py-xs max-w-container-max mx-auto">
        <div className="font-headline-md text-headline-md font-bold text-electric-cyan tracking-tighter">Nexus</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-md items-center">
          {links.map((link) => (
            <li key={link.name}>
              <Link className="text-on-surface-variant font-medium font-body-md text-body-md hover:text-electric-cyan transition-colors duration-200" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-sm">
          <button className="bg-primary-container text-on-primary-container px-sm py-xs rounded font-medium font-body-md text-body-md transition-all duration-300 btn-primary-glow btn-hover-effect">Start Free</button>
        </div>

        {/* Mobile Burger Icon */}
        <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-surface-container-low border-t border-stroke-cyan p-md">
          <ul className="flex flex-col space-y-sm">
            {links.map((link) => (
              <li key={link.name}>
                <Link className="block text-on-surface-variant font-medium font-body-md text-body-md hover:text-electric-cyan" href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button className="w-full bg-primary-container text-on-primary-container px-sm py-xs rounded font-medium font-body-md text-body-md btn-primary-glow">Start Free</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}