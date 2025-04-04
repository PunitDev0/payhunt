import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Digital Payment gateway Provider In India",
  description: "we are the best payment gateway provider with 100+ payment modes, Perfect for e-commerce, education,  payouts, UPI Pay, Link Pay, and QR Pay.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className="bg-gray-50 text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <header>
            <Navbar />
          </header>
          <main className="flex-1 pt-16">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
