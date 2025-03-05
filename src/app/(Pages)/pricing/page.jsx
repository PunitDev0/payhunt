import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/page-header";
import PricingTable from "@/components/pricing-table";
import PricingFaq from "@/components/pricing-faq";

export default function PricingPage() {
  return (
    <>
      <PageHeader 
        title="Transparent Pricing" 
        description="Choose the plan that works best for your business. No hidden fees, no surprises."
      />
      
      {/* Pricing Tabs */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="monthly">
            <PricingTable />
          </TabsContent>
          
          <TabsContent value="annual">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Starter</h3>
                  <p className="text-muted-foreground mb-6">Perfect for small businesses and startups</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">1.5%</span>
                    <span className="text-muted-foreground"> + ₹1.5</span>
                    <p className="text-sm text-muted-foreground mt-1">per successful transaction</p>
                    <p className="text-sm text-green-600 font-medium mt-2">Save 20% with annual billing</p>
                  </div>
                  <Button className="w-full">Get Started</Button>
                </div>
                <div className="border-t border-gray-200 p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Standard payment gateway</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>10 payment links per month</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Basic reporting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Email support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Standard payout (T+3)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Business Plan */}
              <div className="bg-white rounded-lg shadow-md border-2 border-primary overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Business</h3>
                  <p className="text-muted-foreground mb-6">Ideal for growing businesses</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">1.2%</span>
                    <span className="text-muted-foreground"> + ₹1</span>
                    <p className="text-sm text-muted-foreground mt-1">per successful transaction</p>
                    <p className="text-sm text-green-600 font-medium mt-2">Save 20% with annual billing</p>
                  </div>
                  <Button className="w-full">Get Started</Button>
                </div>
                <div className="border-t border-gray-200 p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Advanced payment gateway</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Unlimited payment links</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Subscription management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Advanced reporting & analytics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Priority email & chat support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Faster payout (T+2)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                  <p className="text-muted-foreground mb-6">For large businesses with custom needs</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">Custom</span>
                    <p className="text-sm text-muted-foreground mt-1">tailored to your volume</p>
                    <p className="text-sm text-green-600 font-medium mt-2">Annual contracts available</p>
                  </div>
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </div>
                <div className="border-t border-gray-200 p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Custom payment solutions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>All features from Business plan</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Volume-based discounts</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>24/7 phone, email & chat support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Same-day payout (T+0)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need a custom plan for your enterprise? We've got you covered.
          </p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </section>
      
      {/* Transaction Pricing */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Transaction Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for all payment methods with no hidden fees.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Payment Method</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Starter</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Business</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm">Credit & Debit Cards</td>
                    <td className="px-6 py-4 text-sm">1.9% + ₹2</td>
                    <td className="px-6 py-4 text-sm">1.5% + ₹1.5</td>
                    <td className="px-6 py-4 text-sm">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">UPI & Wallets</td>
                    <td className="px-6 py-4 text-sm">1.5% + ₹1</td>
                    <td className="px-6 py-4 text-sm">1.2% + ₹1</td>
                    <td className="px-6 py-4 text-sm">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">Net Banking</td>
                    <td className="px-6 py-4 text-sm">1.8% + ₹2</td>
                    <td className="px-6 py-4 text-sm">1.4% + ₹1.5</td>
                    <td className="px-6 py-4 text-sm">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">International Cards</td>
                    <td className="px-6 py-4 text-sm">3.0% + ₹3</td>
                    <td className="px-6 py-4 text-sm">2.5% + ₹2</td>
                    <td className="px-6 py-4 text-sm">Custom</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">EMI</td>
                    <td className="px-6 py-4 text-sm">2.5% + ₹5</td>
                    <td className="px-6 py-4 text-sm">2.0% + ₹3</td>
                    <td className="px-6 py-4 text-sm">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing FAQ */}
      <PricingFaq />
    </>
  );
}
