import { ArrowRight, Award, BarChart, Clock, Globe, Shield, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/page-header";
import TeamMember from "@/components/team-member";
import Image from 'next/image';

export const metadata = {
  title: "Best Digital Payment Gateway Provider In India",
  description: "We are the best payment gateway provider with 100+ payment modes, perfect for e-commerce, education, payouts, UPI Pay, Link Pay, and QR Pay."
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="Powering India's Digital Payments & API Banking in India" 
        description="Integrate 100+ payment modes seamlessly with our secure payment gateways. Perfect for e-commerce, education, retail, apps, wallets, and B2B service payouts, UPI Pay, Link Pay, and QR Pay."
      />
      
      {/* Our Story */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-4">
              PeAvenue stands at the forefront of India's digital payments and API banking revolution. Our comprehensive suite of fintech solutions empowers businesses to accept payments and process payouts seamlessly through an extensive network of over 180 payment modes—all with a simple and efficient integration process.
            </p>
            <p className="text-muted-foreground mb-4">
              With the trust of businesses across the globe, PeAvenue drives innovation in payment collections, vendor and salary payouts, bulk refunds, expense reimbursements, and loyalty programs. Our platform serves as the backbone for businesses of all sizes, helping them thrive in today’s fast-evolving digital economy.
            </p>
            <p className="text-muted-foreground mb-4">
              Founded in 2024 and headquartered in Noida, PeAvenue is rapidly emerging as a leader in the fintech space, with regional offices across India. We are committed to providing secure, efficient, and customizable payment solutions tailored to every business need.
            </p>
            <Button className="mt-4">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <Image 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="PeAvenue Team" 
                className="rounded-lg shadow-lg w-full h-full mx-auto"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Services */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how PeAvenue’s innovative solutions can transform your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Online Payment Gateway</h3>
              <p className="text-muted-foreground">
                PeAvenue’s Online Payment Gateway simplifies transactions with support for all major payment methods, including Credit/Debit Cards, Net Banking, UPI, Wallets, Bharat QR, and more. Enjoy fast, secure, and seamless online payments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Offline Payments</h3>
              <p className="text-muted-foreground">
                India’s first B2B collection solution, enabling businesses to collect payments from partners, dealers, and agents through a Virtual Account Number (VAN) with prior validation, ensuring secure and hassle-free transactions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">B2B e-Collect</h3>
              <p className="text-muted-foreground">
                With PeAvenue’s eNACH solutions, businesses can automate recurring payment collections through e-mandates. Improve cash flow management with seamless, automated payments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">eNACH</h3>
              <p className="text-muted-foreground">
                Process recurring payments with ease using PeAvenue’s eNACH services, designed to simplify collections through automated mandates and ensure smoother financial operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Payment Links</h3>
              <p className="text-muted-foreground">
                PeAvenue’s Payment Link solution allows businesses to generate and share payment links via SMS, email, or social media, making it easier for customers to pay instantly through multiple payment methods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Payouts</h4>
              <p className="text-muted-foreground">
                Our advanced payout system enables businesses to manage bulk transactions effortlessly, ensuring smooth vendor and salary disbursements, refunds, and expense reimbursements with easy reconciliation.
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Easy Integration</h4>
              <p className="text-muted-foreground">
                Seamlessly integrate PeAvenue’s payment solutions into your business with minimal effort. Our platform offers comprehensive APIs and advanced encryption technologies, ensuring secure, fast, and efficient transactions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">A Payment Gateway for All Businesses</h4>
              <p className="text-muted-foreground">
                PeAvenue provides a comprehensive range of payment solutions and financial services, ensuring businesses of all sizes can thrive with tailored fintech tools.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Achievements */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building the future of payments, one milestone at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl font-bold text-primary mb-2">180+</p>
              <p className="text-lg font-medium">Payment Modes</p>
              <p className="text-muted-foreground">Supporting over 180 payment methods</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm 次日">
              <p className="text-4xl font-bold text-primary mb-2">2024</p>
              <p className="text-lg font-medium">Founded</p>
              <p className="text-muted-foreground">Launched in Noida, India</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl font-bold text-primary mb-2">India</p>
              <p className="text-lg font-medium">Focus</p>
              <p className="text-muted-foreground">Serving businesses across India</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl font-bold text-primary mb-2">Global</p>
              <p className="text-lg font-medium">Trust</p>
              <p className="text-muted-foreground">Trusted by businesses worldwide</p>
            </div>
          </div>
        </div>
      </section>
      

    </>
  );
}