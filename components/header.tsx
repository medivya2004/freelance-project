'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/#contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Brand Logo Wrapper */}
        <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 p-1 transition-colors group-hover:bg-primary/10">
            <Image
              src={logo}
              alt="Gollya Avanta Logo"
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
              GOLLYA AVANTA
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase -mt-0.5">
              LLP
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300 pb-1"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] flex flex-col justify-between p-6">
            <div className="flex flex-col space-y-5 mt-8">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Navigation</p>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary py-1 border-b border-border/40"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Button asChild className="w-full" size="lg">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}