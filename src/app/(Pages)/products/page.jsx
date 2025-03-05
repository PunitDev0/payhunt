import Link from "next/link";
import { ArrowRight, CreditCard, FileText, Repeat, Zap, Wallet, CreditCardIcon, BarChart, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from 'lucide-react';
import PageHeader from "@/components/page-header";

export default function ProductsPage() {
  return (
    <>
      <PageHeader 
        title="Our Products" 
        description="Comprehensive payment solutions for businesses of all sizes"
      />
      
      {/* Products Overview */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="gateway" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="gateway">Payment Gateway</TabsTrigger>
            <TabsTrigger value="links">Payment Links</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="invoicing">Invoicing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gateway" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Accept Payments Globally</h3>
                <p className="text-muted-foreground mb-6">
                  Our payment gateway enables you to accept payments from customers worldwide with support for multiple payment methods and currencies.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Support for 100+ payment methods including credit cards, digital wallets, and UPI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Process transactions in 135+ currencies with automatic conversion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Seamless checkout experience with smart routing for higher success rates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Advanced fraud detection and prevention tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Real-time transaction monitoring and detailed analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>PCI-DSS Level 1 compliance for secure payment processing</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button>
                    Get Started
                  </Button>
                  <Link href="/pricing">
                    <Button variant="outline">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <img 
                    src="/placeholder.svg?height=300&width=500" 
                    alt="Payment Gateway Interface" 
                    className="rounded-lg shadow-lg max-w-[90%] mx-auto"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="links" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Simple Payment Links</h3>
                <p className="text-muted-foreground mb-6">
                  Create and share payment links instantly without any technical setup. Perfect for small businesses, freelancers, and remote sales.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Create payment links in seconds without any coding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Share via email, SMS, WhatsApp, or social media</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Customize with your brand logo and colors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Set expiry dates and payment limits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Track payment status in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Generate QR codes for in-person payments</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button>
                    Get Started
                  </Button>
                  <Link href="/pricing">
                    <Button variant="outline">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <img 
                    src="/placeholder.svg?height=300&width=500" 
                    alt="Payment Links Interface" 
                    className="rounded-lg shadow-lg max-w-[90%] mx-auto"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="subscription" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Subscription Management</h3>
                <p className="text-muted-foreground mb-6">
                  Automate recurring payments with flexible billing cycles and plans. Perfect for SaaS, membership sites, and subscription businesses.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Create flexible subscription plans with custom billing cycles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Offer free trials, setup fees, and discounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Automated retry logic for failed payments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Smart dunning management to reduce churn</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Comprehensive subscription analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Customer portal for self-service management</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button>
                    Get Started
                  </Button>
                  <Link href="/pricing">
                    <Button variant="outline">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <img 
                    src="/placeholder.svg?height=300&width=500" 
                    alt="Subscription Management Interface" 
                    className="rounded-lg shadow-lg max-w-[90%] mx-auto"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="invoicing" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Smart Invoicing</h3>
                <p className="text-muted-foreground mb-6">
                  Generate and send professional invoices to your customers automatically. Perfect for service businesses, agencies, and freelancers.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Create professional invoices with your branding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Schedule recurring invoices for regular clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Automated payment reminders and follow-ups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Track invoice status and payment history</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Generate tax-compliant receipts automatically</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Multiple currency support and automatic tax calculation</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button>
                    Get Started
                  </Button>
                  <Link href="/pricing">
                    <Button variant="outline">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <img 
                    src="/placeholder.svg?height=300&width=500" 
                    alt="Invoicing Interface" 
                    className="rounded-lg shadow-lg max-w-[90%] mx-auto"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Additional Products */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">More Payment Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our additional products designed to help your business grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <Wallet className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Wallet</h3>
              <p className="text-muted-foreground mb-4">
                Offer your customers a secure digital wallet for faster checkout and improved conversion rates.
              </p>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <CreditCardIcon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Virtual Cards</h3>
              <p className="text-muted-foreground mb-4">
                Issue virtual cards for your team to manage expenses and control spending in real-time.
              </p>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <BarChart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Gain valuable insights into your payment flows, customer behavior, and business performance.
              </p>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Solutions for Every Industry</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored payment solutions for businesses across different sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
            <p className="text-muted-foreground mb-4">
              Boost conversion rates with optimized checkout flows and multiple payment options.
            </p>
            <Link href="#" className="text-primary hover:underline flex items-center">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">SaaS & Subscription</h3>
            <p className="text-muted-foreground mb-4">
              Manage recurring billing, reduce churn, and scale your subscription business.
            </p>
            <Link href="#" className="text-primary hover:underline flex items-center">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Marketplaces</h3>
            <p className="text-muted-foreground mb-4">
              Split payments, manage escrow, and handle multi-party transactions seamlessly.
            </p>
            <Link href="#" className="text-primary hover:underline flex items-center">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground mb-4">
              Process tuition payments, manage installment plans, and handle donations.
            </p>
            <Link href="#" className="text-primary hover:underline flex items-center">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
