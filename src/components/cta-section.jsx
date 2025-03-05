import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Join thousands of businesses that trust PayHunt for their payment needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="px-8">
            Create Account
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8">
            Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
