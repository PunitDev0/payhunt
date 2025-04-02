import Link from "next/link";
import { ArrowRight, CheckCircle2, CreditCard, FileText, Repeat, Zap, BarChart, Globe, Shield, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/hero-section";
import FeatureCard from "@/components/feature-card";
import TestimonialCard from "@/components/testimonial-card";
import StatsSection from "@/components/stats-section";
import IntegrationSection from "@/components/integration-section";
import BlogSection from "@/components/blog-section";
import CtaSection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Services Overview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#43B2A8]/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43B2A8]/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>
        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#43B2A8] to-teal-600 bg-clip-text text-transparent">
              Smooth Payment Gateway Integration for All Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              Enhance your transactions with our seamless payment gateway integration services. From UPI payment gateways to comprehensive solutions, we ensure secure and efficient transactions for websites, apps, and businesses of all sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FeatureCard 
              icon={<CreditCard className="h-12 w-12 text-[#43B2A8]" />}
              title="Payment Gateway for E-commerce"
              description="Boost your online store with fast, secure, and reliable transactions that enhance customer trust and drive higher sales."
              gradient="from-[#43B2A8]/10 to-teal-100"
            />
            <FeatureCard 
              icon={<FileText className="h-12 w-12 text-[#43B2A8]" />}
              title="Payment Gateway for Education"
              description="Simplify fee collections for schools and colleges with secure, hassle-free payment solutions."
              gradient="from-[#43B2A8]/10 to-teal-100"
            />
            <FeatureCard 
              icon={<Repeat className="h-12 w-12 text-[#43B2A8]" />}
              title="Payment Gateway for Stores"
              description="Support offline and online retail with multiple payment methods for fast, convenient transactions."
              gradient="from-[#43B2A8]/10 to-teal-100"
            />
            <FeatureCard 
              icon={<Zap className="h-12 w-12 text-[#43B2A8]" />}
              title="Advanced API Integration"
              description="Empower developers with seamless API integration for faster, scalable payment experiences in Noida and beyond."
              gradient="from-[#43B2A8]/10 to-teal-100"
            />
          </div>
          <div className="mt-10 md:mt-12">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                Multi-Party Transactions and Payouts in Noida
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Integrate secure, efficient payment processing into your platform or marketplace. Enjoy seamless fund distribution and enhanced automation tailored to your business needs.
              </p>
            </div>
            <div className="text-center">
              <Link href="/products">
                <Button 
                  variant="outline" 
                  className="mt-4 px-8 py-3 border-2 border-[#43B2A8] text-[#43B2A8] hover:bg-[#43B2A8]/10 hover:border-[#43B2A8] font-semibold transition-all duration-300 transform hover:scale-105 shadow-md group"
                >
                  Explore All Products 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Solutions */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#43B2A8]/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43B2A8]/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>
        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#43B2A8] to-teal-600 bg-clip-text text-transparent">
              Accept Payments Easily with Multi-Mode Solutions
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              Ensure a seamless and secure payment experience with multiple options tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FeatureCard 
              icon={<CreditCard className="h-12 w-12 text-[#43B2A8]" />}
              title="UPI & Cards"
              description="Fast, secure UPI transactions and trusted credit/debit card payments."
              gradient="from-[#43B2A8]/10 to-teal-100"
            />
            <FeatureCard 
              icon={<FileText className="h-12 w-12 text-[#43B2A8]" />}
              title="Digital Wallets"
              description="Support Paytm, Amazon Pay, Google Pay, and more."
              gradient="from-[#43B2A8]/10 to-teal-100"
            />
            <FeatureCard 
              icon={<Repeat className="h-12 w-12 text-[#43B2A8]" />}
              title="Payment Links & QR Codes"
              description="Instant payments via links and quick in-person QR scanning."
              gradient="from-[#43B2A8]/10 to-teal-100"
            />
            <FeatureCard 
              icon={<Zap className="h-12 w-12 text-[#43B2A8]" />}
              title="Net Banking & EMI"
              description="Secure bank transfers and flexible installment options."
              gradient="from-[#43B2A8]/10 to-teal-100"
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gradient-to-b from-slate-50 to-[#43B2A8]/10 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#43B2A8]/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#43B2A8]/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#43B2A8] to-teal-600 bg-clip-text text-transparent drop-shadow-md">
              PeAvenue Key Features of Our Payment Gateway
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              A secure, efficient, and scalable payment gateway designed to enhance your business transactions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-[#43B2A8]/20 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-7 w-7 text-[#43B2A8]" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">100+ Payment Modes</h4>
                <p className="text-gray-600 leading-relaxed">
                  Offer customers UPI, wallets, cards, net banking, and more for flexible transactions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-[#43B2A8]/20 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-[#43B2A8]" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Secure Transactions</h4>
                <p className="text-gray-600 leading-relaxed">
                  Advanced encryption and fraud prevention ensure every payment is protected.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-[#43B2A8]/20 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-7 w-7 text-[#43B2A8]" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Multi-Business Support</h4>
                <p className="text-gray-600 leading-relaxed">
                  Tailored solutions for e-commerce, education, retail, and B2B services.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-[#43B2A8]/20 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-7 w-7 text-[#43B2A8]" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Seamless Integration</h4>
                <p className="text-gray-600 leading-relaxed">
                  Developer-friendly APIs for easy platform integration.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-[#43B2A8]/20 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <BarChart className="h-7 w-7 text-[#43B2A8]" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Real-Time Analytics</h4>
                <p className="text-gray-600 leading-relaxed">
                  Track payments and gain insights with advanced reporting tools.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-[#43B2A8]/20 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="h-7 w-7 text-[#43B2A8]" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Instant Settlements</h4>
                <p className="text-gray-600 leading-relaxed">
                  Receive funds quickly for smooth cash flow management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#43B2A8] to-teal-600 bg-clip-text text-transparent">
            Why Choose Our Payment Gateway Services?
          </h4>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            As one of India’s most trusted payment solution providers, we empower businesses across e-commerce, education, retail, and more to manage transactions seamlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6 pb-6 px-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-900">Seamless Payouts</h4>
              <p className="text-gray-600">Instantly transfer funds 24/7 to any bank account, UPI ID, card, or wallet with our cutting-edge API platform.</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6 pb-6 px-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-900">Wide Integration</h4>
              <p className="text-gray-600">Effortlessly integrates with Shopify, PayPal, Amazon Pay, Google Pay, and more for unmatched flexibility.</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6 pb-6 px-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-900">Diverse Use Cases</h4>
              <p className="text-gray-600">Handles vendor payouts, employee salaries, bulk refunds, wallets, and payment links with precision.</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-10 text-center">
          <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">What is a Payment Gateway?</h4>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            A payment gateway is a secure technology that enables businesses to accept online payments by transmitting payment details to the bank and confirming transaction approval.
          </p>
          <Link href="/learn-more">
            <Button variant="outline" className="px-8 py-3 border-2 border-[#43B2A8] text-[#43B2A8] hover:bg-[#43B2A8]/10">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How to Choose the Right Payment Gateway */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#43B2A8]/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43B2A8]/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>
        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#43B2A8] to-teal-600 bg-clip-text text-transparent">
              How to Choose the Right Payment Gateway for Your Business?
            </h4>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              Selecting the best payment gateway depends on your business needs. Consider these key factors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">Supported Payment Methods</h5>
                <p className="text-gray-600">Ensure it accepts UPI, cards, wallets, net banking, and other relevant options.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">Transaction Fees</h5>
                <p className="text-gray-600">Compare processing fees to find a cost-effective solution.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">Security Features</h5>
                <p className="text-gray-600">Look for encryption, fraud protection, and PCI DSS compliance.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">Integration Ease</h5>
                <p className="text-gray-600">Check if it offers easy API or plugin-based integration for your website or app.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">Settlement Time</h5>
                <p className="text-gray-600">Opt for gateways that provide quick fund settlements.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">Customer Support</h5>
                <p className="text-gray-600">Ensure 24/7 support for smooth payment processing.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Secure Are Online Payment Gateways */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#43B2A8]/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#43B2A8]/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>
        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#43B2A8] to-teal-600 bg-clip-text text-transparent">
              How Secure Are Online Payment Gateways?
            </h4>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              Online payment gateways are highly secure with advanced measures to protect customer data and prevent fraud.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">End-to-End Encryption</h5>
                <p className="text-gray-600">Ensures payment data is securely transmitted and cannot be intercepted.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">PCI DSS Compliance</h5>
                <p className="text-gray-600">Adheres to strict security standards to protect cardholder information.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">Tokenization</h5>
                <p className="text-gray-600">Replaces sensitive payment details with a unique token to reduce data breaches.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">Fraud Detection Tools</h5>
                <p className="text-gray-600">Uses AI-driven techniques like transaction monitoring and risk assessment.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">Two-Factor Authentication</h5>
                <p className="text-gray-600">Verifies transactions with OTPs or biometric authentication for added security.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-[#43B2A8]/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="pt-6 pb-6 px-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">Secure Sockets Layer (SSL)</h5>
                <p className="text-gray-600">Encrypts data during transmission to prevent unauthorized access.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              With these security measures, our online payment gateways ensure safe and seamless transactions for businesses and customers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}