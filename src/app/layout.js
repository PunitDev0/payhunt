import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Initialize fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// SEO Metadata
export const metadata = {
  title: "PayHunt - Secure Payment Gateway for Businesses",
  description: "PayHunt offers a secure, reliable payment gateway to accept online payments, manage subscriptions, and scale your business globally with ease.",
  keywords: "payment gateway, online payments, PayHunt, subscription management, secure transactions, global payments, business payments",
  viewport: "width=device-width, initial-scale=1", // Ensures mobile responsiveness
  robots: "index, follow", // Allows search engines to index the site
  alternates: {
    canonical: "https://www.payhunt.com", // Canonical URL to avoid duplicate content issues
  },
  openGraph: {
    title: "PayHunt - Seamless Payment Solutions",
    description: "Simplify your business payments with PayHunts secure and scalable payment gateway. Accept payments globally in 135+ currencies.",
    url: "https://www.payhunt.com",
    siteName: "PayHunt",
    images: [
      {
        url: "https://www.payhunt.com/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "PayHunt Payment Gateway",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayHunt - Secure Payment Gateway",
    description: "Accept online payments effortlessly with PayHunt. Secure, reliable, and built for global businesses.",
    image: "https://www.payhunt.com/twitter-image.jpg", // Replace with your actual Twitter image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to improve font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon for branding */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Schema.org JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PayHunt",
              url: "https://www.payhunt.com",
              logo: "https://www.payhunt.com/logo.png", // Replace with your actual logo
              description: "PayHunt provides a secure payment gateway for businesses to accept online payments globally.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-123-4567", // Replace with your contact number
                contactType: "Customer Service",
                email: "support@payhunt.com", // Replace with your email
              },
              sameAs: [
                "https://twitter.com/payhunt",
                "https://www.linkedin.com/company/payhunt",
                "https://www.facebook.com/payhunt",
              ],
            }),
          }}
        />
      </head>
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