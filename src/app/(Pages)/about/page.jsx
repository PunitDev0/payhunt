import { ArrowRight, Award, BarChart, Clock, Globe, Shield, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/page-header";
import TeamMember from "@/components/team-member";

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About PayHunt" 
        description="Our mission is to simplify payments for businesses of all sizes."
      />
      
      {/* Our Story */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2018, PayHunt was born out of frustration with the complexity and high costs of existing payment solutions. Our founders, experienced entrepreneurs and engineers, set out to build a payment platform that would be simple to use, transparent in pricing, and accessible to businesses of all sizes.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a small team of 5 has now grown to over 200 employees across 10 countries. We're proud to serve more than 50,000 businesses worldwide, processing billions in transactions annually.
            </p>
            <p className="text-muted-foreground mb-4">
              Our mission remains the same: to simplify payments for businesses and help them grow. We believe that accepting payments should be seamless, secure, and accessible to everyone.
            </p>
            <Button className="mt-4">
              Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <img 
                src="/placeholder.svg?height=300&width=500" 
                alt="PayHunt Team" 
                className="rounded-lg shadow-lg max-w-[90%] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're guided by a set of core values that define who we are and how we work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-muted-foreground">
                We put our customers at the center of everything we do. Their success is our success.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust & Security</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards of security and compliance to protect our customers and their data.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Mindset</h3>
              <p className="text-muted-foreground">
                We think globally and build solutions that work for businesses around the world.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from product development to customer support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <BarChart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We're constantly innovating to stay ahead of the curve and provide the best solutions for our customers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
              <p className="text-muted-foreground">
                We value efficiency and simplicity in our products and processes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Leadership Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the team behind PayHunt's success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="Sarah Johnson"
            position="CEO & Co-Founder"
            bio="Sarah has over 15 years of experience in fintech and previously founded two successful startups."
            image="/placeholder.svg?height=300&width=300"
          />
          
          <TeamMember 
            name="Michael Chen"
            position="CTO & Co-Founder"
            bio="Michael is a seasoned engineer with expertise in building scalable payment systems and security infrastructure."
            image="/placeholder.svg?height=300&width=300"
          />
          
          <TeamMember 
            name="Elena Rodriguez"
            position="COO"
            bio="Elena brings 12 years of operational experience from leading global payment companies."
            image="/placeholder.svg?height=300&width=300"
          />
          
          <TeamMember 
            name="David Kim"
            position="CFO"
            bio="David has extensive experience in financial management and previously worked at top investment banks."
            image="/placeholder.svg?height=300&width=300"
          />
          
          <TeamMember 
            name="Priya Patel"
            position="VP of Product"
            bio="Priya leads our product team with a focus on creating intuitive and powerful payment solutions."
            image="/placeholder.svg?height=300&width=300"
          />
          
          <TeamMember 
            name="James Wilson"
            position="VP of Engineering"
            bio="James oversees our engineering team and ensures the reliability and scalability of our platform."
            image="/placeholder.svg?height=300&width=300"
          />
        </div>
      </section>
      
      {/* Achievements */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're proud of what we've accomplished in a short time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl font-bold text-primary mb-2">50K+</p>
              <p className="text-lg font-medium">Businesses</p>
              <p className="text-muted-foreground">Trusted by over 50,000 businesses worldwide</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl font-bold text-primary mb-2">$10B+</p>
              <p className="text-lg font-medium">Processed</p>
              <p className="text-muted-foreground">Over $10 billion in transactions processed annually</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl font-bold text-primary mb-2">135+</p>
              <p className="text-lg font-medium">Countries</p>
              <p className="text-muted-foreground">Serving customers in over 135 countries</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-4xl font-bold text-primary mb-2">200+</p>
              <p className="text-lg font-medium">Team Members</p>
              <p className="text-muted-foreground">A global team of over 200 talented individuals</p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Fintech Innovation Award 2023</h3>
              <p className="text-muted-foreground">
                Recognized for our innovative approach to payment solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Best Payment Gateway 2022</h3>
              <p className="text-muted-foreground">
                Voted as the best payment gateway by the Fintech Awards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Top 50 Fintech Companies 2021</h3>
              <p className="text-muted-foreground">
                Named one of the top 50 fintech companies by Forbes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Careers */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Join Our Team</h2>
            <p className="text-muted-foreground mb-4">
              We're always looking for talented individuals to join our team. If you're passionate about fintech and want to make a difference, we'd love to hear from you.
            </p>
            <p className="text-muted-foreground mb-4">
              We offer competitive salaries, comprehensive benefits, and a flexible work environment. Our culture is built on collaboration, innovation, and growth.
            </p>
            <div className="mt-6">
              <Button size="lg">
                View Open Positions
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/placeholder.svg?height=200&width=200" 
              alt="Team Member" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="/placeholder.svg?height=200&width=200" 
              alt="Team Member" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="/placeholder.svg?height=200&width=200" 
              alt="Team Member" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="/placeholder.svg?height=200&width=200" 
              alt="Team Member" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
