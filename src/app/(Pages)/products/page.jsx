import Link from "next/link";
import { ArrowRight, CreditCard, FileText, Repeat, Zap, Wallet, CreditCardIcon, BarChart, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from 'lucide-react';
import PageHeader from "@/components/page-header";
import Head from "next/head";

export default function ProductsPage() {
  return (
    <>
    <Head>
        <title>My Page Title</title>
        <meta name="description" content="This is the description of my page." />
      </Head>
      <PageHeader 
        title="Seamless & Secure Payment Solutions for Your Business" 
        description="Experience a hassle-free and secure payment gateway that allows businesses to accept and process payments seamlessly across e-commerce, education, retail, mobile apps, wallets, and B2B service payouts."
      />
      
      {/* Products Overview */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="gateway" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="gateway">Payment Gateway</TabsTrigger>
            <TabsTrigger value="upi-qr">UPI & QR Payments</TabsTrigger>
            <TabsTrigger value="links">Payment Links</TabsTrigger>
            <TabsTrigger value="subscription">Subscription Payments</TabsTrigger>
            <TabsTrigger value="b2b">B2B Solutions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gateway" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Choose Our Payment Gateway?</h2>
                <p className="text-muted-foreground mb-6">
                  Our advanced online payment processing solution supports all major payment methods including Credit/Debit Cards, Net Banking, and Mobile Wallets for a seamless checkout experience.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Instant & Secure Transactions with advanced encryption</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Easy Integration with API & Plugins for websites and apps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Multi-Channel Payment Acceptance (online, in-store, mobile)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Accept payments from Visa, MasterCard, RuPay, and more</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Net Banking from all leading banks in India</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Support for Paytm, PhonePe, Google Pay, and other wallets</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button>Get Started</Button>
                  <Link href="/pricing">
                    <Button variant="outline">View Pricing</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://t4.ftcdn.net/jpg/10/63/67/89/240_F_1063678906_v3S7FFfatWGl1vv5KGeMHm3NLFPMcXZX.jpg" 
                    alt="Payment Gateway Interface" 
                    className="rounded-lg shadow-lg h-full w-full mx-auto"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="upi-qr" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">UPI & QR Payments</h3>
                <p className="text-muted-foreground mb-6">
                  Enable instant, real-time payments through UPI and QR codes, making transactions faster and more convenient for customers.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>UPI Pay: Instant payments via UPI IDs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>QR Pay: Scan-to-pay with Bharat QR and custom QR codes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>No card details required for secure transactions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Interoperable QR-based payment system</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button>Get Started</Button>
                  <Link href="/pricing">
                    <Button variant="outline">View Pricing</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://as1.ftcdn.net/v2/jpg/04/60/36/80/1000_F_460368094_znffKCOlOMYO2XONVl3QmOA6IoARmx4C.jpg" 
                    alt="UPI & QR Payments Interface" 
                    className="rounded-lg shadow-lg w-full h-full mx-auto"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="links" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Payment Links</h3>
                <p className="text-muted-foreground mb-6">
                  Generate and share custom payment links via SMS, email, or WhatsApp to collect payments anytime, anywhere without a website or app.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Create payment links in seconds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Share via email, SMS, or WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Smart payment links for secure collections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Track payment status in real-time</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button>Get Started</Button>
                  <Link href="/pricing">
                    <Button variant="outline">View Pricing</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://t4.ftcdn.net/jpg/05/57/68/21/240_F_557682120_A12qU9QcoFaUiioAO6psjXlUV7767goA.jpg" 
                    alt="Payment Links Interface" 
                    className="rounded-lg shadow-lg h-full w-full mx-auto"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="subscription" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Subscription & Recurring Payments</h3>
                <p className="text-muted-foreground mb-6">
                  Set up automated recurring payments using eNACH and e-mandates, perfect for subscription-based services.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Flexible subscription plans with custom billing cycles</span>
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
                    <span>Comprehensive subscription analytics</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button>Get Started</Button>
                  <Link href="/pricing">
                    <Button variant="outline">View Pricing</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://cdn.dribbble.com/userupload/9462007/file/original-a6bc23910f256a0713ddca7e0ffbffec.jpg?format=webp&resize=450x338&vertical=center" 
                    alt="Subscription Payments Interface" 
                    className="rounded-lg shadow-lg w-full h-full mx-auto"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="b2b" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">B2B & Enterprise Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Manage large-scale transactions, vendor payouts, and enterprise-level payment solutions with bulk transaction processing and high security.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Automated payout solutions for vendors and salaries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Bulk transaction processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>High-security standards for enterprise needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Real-time monitoring and management</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button>Get Started</Button>
                  <Link href="/pricing">
                    <Button variant="outline">View Pricing</Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://img.freepik.com/free-vector/gradient-b2b-illustration_23-2149322240.jpg?uid=R186909835&semt=ais_hybrid" 
                    alt="B2B Solutions Interface" 
                    className="rounded-lg shadow-lg w-full h-full mx-auto"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      {/* How It Works */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold tracking-tight mb-4">How It Works?</h4>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started with our payment solutions in just a few simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-2xl font-bold">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Sign Up & Get Verified</h3>
              <p className="text-muted-foreground">
                Quick onboarding with easy KYC verification.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-2xl font-bold">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Integrate the API</h3>
              <p className="text-muted-foreground">
                Seamlessly integrate with your website, app, or ERP system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-2xl font-bold">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Accept Payments Instantly</h3>
              <p className="text-muted-foreground">
                Start accepting payments via multiple channels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-2xl font-bold">4️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Monitor & Manage</h3>
              <p className="text-muted-foreground">
                Track transactions and payouts in real-time from a dedicated dashboard.
              </p>
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
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground mb-4">
              Process tuition payments, manage installment plans, and handle donations.
            </p>
            <Link href="#" className="text-primary hover:underline flex items-center">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Retail</h3>
            <p className="text-muted-foreground mb-4">
              Accept payments in-store and online with QR codes and digital wallets.
            </p>
            <Link href="#" className="text-primary hover:underline flex items-center">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">B2B Services</h3>
            <p className="text-muted-foreground mb-4">
              Manage vendor payouts and large-scale transactions efficiently.
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