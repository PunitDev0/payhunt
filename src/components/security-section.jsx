import { Shield, ShieldCheck, ShieldAlert } from "lucide-react"

export default function SecuritySection() {
  return (
    <section className="bg-slate-900 text-white py-16" id="security">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Enterprise-Grade Security</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Your security is our top priority. We implement the highest standards of data protection and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">PCI-DSS Level 1</h3>
            </div>
            <p className="text-slate-300">
              We maintain the highest level of PCI-DSS compliance to ensure secure handling of sensitive payment data.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <ShieldCheck className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">End-to-End Encryption</h3>
            </div>
            <p className="text-slate-300">
              All data is encrypted in transit and at rest using industry-standard encryption protocols.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <ShieldAlert className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Fraud Prevention</h3>
            </div>
            <p className="text-slate-300">
              Advanced AI-powered fraud detection systems to protect your business from fraudulent transactions.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="bg-slate-800 p-4 rounded-lg flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="ISO 27001" className="h-10 mr-3" />
            <span>ISO 27001 Certified</span>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="GDPR" className="h-10 mr-3" />
            <span>GDPR Compliant</span>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="SOC 2" className="h-10 mr-3" />
            <span>SOC 2 Certified</span>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="3D Secure" className="h-10 mr-3" />
            <span>3D Secure 2.0</span>
          </div>
        </div>
      </div>
    </section>
  )
}

