import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">PayHunt</span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              A complete payment solution to accept, process, and disburse payments with simple integration and transparent pricing.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
                  Payment Gateway
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
                  Payment Links
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
                  Subscription Billing
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
                  Invoicing
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
                  Payouts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/developers" className="text-slate-300 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-slate-300 hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-slate-300 hover:text-white transition-colors">
                  SDKs & Libraries
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} PayHunt. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Security
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}