"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-r text-white bg-[#43b2a8] backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* <Image 
                src="/PeAvenue-new-logo.png"
                alt="PayHunt"
                width={150}
                height={150}
                className="mr-10"
                unoptimized
               /> */}
               <h1 className="text-2xl">PeAvenue</h1>
               {/* <h1 className="font-bold text-2xl  drop-shadow-lg">PeAvenue</h1> */}
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
           
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/support" className="text-sm font-medium hover:text-primary transition-colors">
              Support
            </Link>
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
               Docs
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href={'https://member.PeAvenue.in/'} >
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            </Link>
          
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/products" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
           
            <Link 
              href="/about" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/support" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
           
          </div>
        </div>
      )}
    </header>
  );
}
