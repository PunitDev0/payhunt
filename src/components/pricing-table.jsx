import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Starter Plan */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-muted-foreground mb-6">Perfect for small businesses and startups</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">1.9%</span>
            <span className="text-muted-foreground"> + ₹2</span>
            <p className="text-sm text-muted-foreground mt-1">per successful transaction</p>
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
            <span className="text-4xl font-bold">1.5%</span>
            <span className="text-muted-foreground"> + ₹1.5</span>
            <p className="text-sm text-muted-foreground mt-1">per successful transaction</p>
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
          </div>
          <Button variant="outline" className="w-full">
            Contact Sales
          </Button>
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
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>Custom integration support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

