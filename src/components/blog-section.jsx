import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function BlogSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Latest from Our Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and insights from PayHunt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img 
              src="/placeholder.svg?height=200&width=400" 
              alt="Blog Post" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-2">May 15, 2023</p>
              <h3 className="text-xl font-semibold mb-2">The Future of Digital Payments in 2023</h3>
              <p className="text-muted-foreground mb-4">
                Explore the latest trends and innovations shaping the future of digital payments.
              </p>
              <Link href="#" className="text-primary hover:underline flex items-center">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img 
              src="/placeholder.svg?height=200&width=400" 
              alt="Blog Post" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-2">April 28, 2023</p>
              <h3 className="text-xl font-semibold mb-2">How to Reduce Payment Fraud for Your Business</h3>
              <p className="text-muted-foreground mb-4">
                Learn effective strategies to protect your business from payment fraud.
              </p>
              <Link href="#" className="text-primary hover:underline flex items-center">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img 
              src="/placeholder.svg?height=200&width=400" 
              alt="Blog Post" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-2">April 10, 2023</p>
              <h3 className="text-xl font-semibold mb-2">Subscription Business Models: A Complete Guide</h3>
              <p className="text-muted-foreground mb-4">
                Everything you need to know about building and scaling a subscription business.
              </p>
              <Link href="#" className="text-primary hover:underline flex items-center">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
