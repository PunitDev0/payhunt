import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
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
  title: "Seamless & Secure Payment Solutions for Your Business",
  description: "Experience a hassle-free and secure payment gateway that allows businesses to accept and process payments seamlessly across e-commerce, education, retail, mobile apps, wallets, and B2B service payouts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className="bg-gray-50 text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <main className="flex-1 pt-16">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}
