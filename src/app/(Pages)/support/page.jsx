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
      
      {/* Contact Form */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <p className="text-muted-foreground">
                Email: support@PeAvenue.in
              </p>
              <p className="text-muted-foreground">
                Address: H-73 Suit No. G05, Sector-63, Noida, Dist. Gautam Buddha Nagar U.P.201301
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
    </>
  );
}