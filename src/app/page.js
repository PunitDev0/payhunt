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
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Comprehensive Payment Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              Everything you need to accept payments online, manage subscriptions, and scale your business with ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FeatureCard 
              icon={<CreditCard className="h-12 w-12 text-blue-600" />}
              title="Payment Gateway"
              description="Accept payments globally with 100+ payment methods and 135+ currencies."
              gradient="from-blue-50 to-blue-100"
            />
            <FeatureCard 
              icon={<FileText className="h-12 w-12 text-indigo-600" />}
              title="Payment Links"
              description="Create and share payment links instantly without any technical setup."
              gradient="from-indigo-50 to-indigo-100"
            />
            <FeatureCard 
              icon={<Repeat className="h-12 w-12 text-purple-600" />}
              title="Subscription Billing"
              description="Automate recurring payments with flexible billing cycles and plans."
              gradient="from-purple-50 to-purple-100"
            />
            <FeatureCard 
              icon={<Zap className="h-12 w-12 text-teal-600" />}
              title="Invoicing"
              description="Generate and send professional invoices to your customers automatically."
              gradient="from-teal-50 to-teal-100"
            />
          </div>
          
          <div className="mt-10 md:mt-12 text-center">
            <Link href="/products">
              <Button 
                variant="outline" 
                className="mt-4 px-8 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-700 font-semibold transition-all duration-300 transform hover:scale-105 shadow-md group"
              >
                Explore All Products 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-slate-50 to-blue-50 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-md">
              Why Choose PayHunt
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              We’re more than just a payment processor. We’re your partner in growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-blue-100/50 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Global Reach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accept payments from customers worldwide with support for 135+ currencies and localized payment methods.
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-indigo-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-indigo-100/50 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Enterprise Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  PCI-DSS Level 1 compliance, end-to-end encryption, and advanced fraud prevention to keep your business safe.
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-purple-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-purple-100/50 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <BarChart className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Actionable Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gain valuable insights into your payment flows, customer behavior, and business performance.
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-teal-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-teal-100/50 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Dedicated Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our expert support team is available 24/7 to help you with any questions or issues.
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-cyan-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-cyan-100/50 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-7 w-7 text-cyan-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">Quick Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get up and running in minutes with our easy-to-use APIs, SDKs, and pre-built integrations.
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Card>
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-green-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-5 bg-green-100/50 w-14 h-14 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 leading-tight">99.99% Uptime</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our robust infrastructure ensures your payment systems are always available and reliable.
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Card>
          </div>
        </div>
      </section>
      
      <StatsSection />
      <IntegrationSection />
      
      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              See what our customers have to say about PayHunt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <TestimonialCard 
              quote="PayHunt has transformed how we handle payments. The integration was seamless, and our conversion rates have improved by 25%."
              author="Sarah Johnson"
              position="CTO, TechStart Inc."
              image="/placeholder.svg?height=60&width=60"
            />
            <TestimonialCard 
              quote="The subscription management tools have been a game-changer for our SaaS business. We've reduced churn by 15% since switching to PayHunt."
              author="Michael Chen"
              position="Founder, SaaSly"
              image="/placeholder.svg?height=60&width=60"
            />
            <TestimonialCard 
              quote="The global payment options have helped us expand to new markets effortlessly. Their support team is also incredibly responsive."
              author="Elena Rodriguez"
              position="COO, Global Retail"
              image="/placeholder.svg?height=60&width=60"
            />
          </div>
        </div>
      </section>
      
      <BlogSection />
      <CtaSection />
    </>
  );
}