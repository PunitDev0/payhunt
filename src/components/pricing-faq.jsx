import { HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingFaq() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Pricing FAQ</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Answers to common questions about our pricing.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" /> Are there any setup fees?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              No, there are no setup fees for any of our plans. You only pay the transaction fees for successful payments.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" /> Can I switch plans later?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Yes, you can upgrade or downgrade your plan at any time. Changes will take effect from the next billing cycle.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" /> Are there any hidden fees?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              No, we believe in transparent pricing. The transaction fees listed are the only fees you'll pay. There are no hidden fees, monthly minimums, or surprise charges.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" /> Do you offer volume discounts?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Yes, we offer volume-based discounts for businesses processing high volumes. Contact our sales team to discuss custom pricing for your business.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-2" /> What happens if I exceed my plan limits?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you exceed your plan limits, you'll still be able to process payments, but you may be charged additional fees. We'll notify you when you're approaching your limits so you can upgrade if needed.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
