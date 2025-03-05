import { ArrowRight, MessageSquare, FileText, HelpCircle, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/page-header";
import Link from "next/link";

export default function SupportPage() {
  return (
    <>
      <PageHeader 
        title="24/7 Support" 
        description="Our dedicated support team is always ready to help you with any questions or issues."
      />
      
      {/* Contact Options */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" /> Live Chat
              </CardTitle>
              <CardDescription>
                Chat with our support team in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Get immediate assistance with your questions or issues. Our support team is available 24/7.
              </p>
              <Button className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" /> Email Support
              </CardTitle>
              <CardDescription>
                Send us an email and we'll get back to you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Email us at support@payhunt.com and we'll respond within 24 hours.
              </p>
              <Button variant="outline" className="w-full">
                Email Us
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2" /> Phone Support
              </CardTitle>
              <CardDescription>
                Speak directly with our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Call us at +1 (800) 123-4567 for immediate assistance. Available 24/7.
              </p>
              <Button variant="outline" className="w-full">
                Call Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Please describe your issue or question"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about PayHunt.
          </p>
        </div>
        
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="mt-4">
            <div className="max-w-3xl mx-auto space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> What is PayHunt?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    PayHunt is a complete payment solution that allows businesses to accept, process, and disburse payments online. We offer a range of products including payment gateway, payment links, subscription billing, and invoicing.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> How do I get started with PayHunt?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Getting started with PayHunt is easy. Simply sign up for an account, complete the verification process, and you'll be ready to accept payments in minutes. Our documentation provides step-by-step guides for integrating our payment solutions into your website or application.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> What countries does PayHunt support?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    PayHunt is available in over 135 countries worldwide. We support multiple currencies and payment methods to help you accept payments from customers around the globe.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> Is PayHunt secure?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, PayHunt is built with security as a top priority. We are PCI-DSS Level 1 compliant, use end-to-end encryption for all data, and have advanced fraud prevention systems in place to protect your business and customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="payments" className="mt-4">
            <div className="max-w-3xl mx-auto space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> What payment methods does PayHunt support?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    PayHunt supports over 100 payment methods including credit and debit cards, digital wallets, UPI, net banking, and more. We're constantly adding new payment methods to help you reach more customers.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> How long does it take to receive payouts?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Payout timelines depend on your plan. Standard payouts are processed in T+3 days, Business plan payouts in T+2 days, and Enterprise plan payouts can be as fast as T+0 (same day).
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> What are the transaction fees?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Transaction fees vary depending on your plan and payment method. Our Starter plan starts at 1.9% + ₹2 per transaction, Business plan at 1.5% + ₹1.5, and Enterprise plans offer custom pricing based on your volume.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> Can I accept international payments?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, PayHunt allows you to accept payments from customers worldwide. We support 135+ currencies with automatic conversion to your preferred settlement currency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="account" className="mt-4">
            <div className="max-w-3xl mx-auto space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> How do I create an account?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Creating an account is simple. Click on the "Sign Up" button, enter your email address and create a password, then follow the verification steps to complete your account setup.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> What documents do I need for verification?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    For business verification, you'll need to provide your business registration documents, proof of address, and identification documents for the business owner or authorized representative. The specific requirements may vary by country.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> How do I reset my password?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    To reset your password, click on the "Forgot Password" link on the login page. Enter your email address, and we'll send you a link to reset your password. If you're still having trouble, please contact our support team.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2" /> Can I have multiple users on my account?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Yes, our Business and Enterprise plans allow you to add multiple users to your account with different permission levels. This is perfect for teams where different people need access to different parts of the dashboard.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Knowledge Base */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Knowledge Base</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive documentation and guides to find quick answers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>
                  Everything you need to know to get started with PayHunt
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Account Setup Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Integration Quickstart
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Payment Methods Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Dashboard Tutorial
                    </Link>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Troubleshooting</CardTitle>
                <CardDescription>
                  Solutions to common issues and problems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Payment Failures
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Integration Issues
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Account Verification Problems
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Payout Delays
                    </Link>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>
                  Detailed documentation for developers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> API Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Authentication
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Payments API
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Webhooks
                    </Link>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
