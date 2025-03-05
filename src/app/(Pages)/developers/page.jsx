import Link from "next/link";
import { ArrowRight, Code, FileCode, BookOpen, GitBranch, Terminal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from "@/components/page-header";

export default function DevelopersPage() {
  return (
    <>
      <PageHeader 
        title="Developer Resources" 
        description="Integrate our payment solutions into your applications with our comprehensive APIs and SDKs."
      />
      
      {/* API Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Powerful APIs for Seamless Integration</h2>
            <p className="text-muted-foreground mb-6">
              Our RESTful APIs are designed to be easy to use, well-documented, and flexible enough to handle any payment scenario.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">RESTful Architecture</h3>
                  <p className="text-muted-foreground">Standard HTTP methods and status codes for easy integration</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                  <FileCode className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Comprehensive Documentation</h3>
                  <p className="text-muted-foreground">Detailed guides, reference, and examples for all endpoints</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Webhooks</h3>
                  <p className="text-muted-foreground">Real-time notifications for payment events</p>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <Button size="lg">
                Explore API Docs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="bg-slate-900 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-slate-400">api-request.sh</div>
            </div>
            <pre className="text-sm font-mono overflow-x-auto">
              <code className="language-bash">
{`# Create a payment
curl -X POST https://api.payhunt.com/v1/payments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "USD",
    "description": "Order #1234",
    "customer": {
      "email": "customer@example.com"
    },
    "metadata": {
      "order_id": "1234"
    }
  }'`}
              </code>
            </pre>
          </div>
        </div>
      </section>
      
      {/* SDKs */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">SDKs for Popular Platforms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Integrate quickly with our libraries for popular programming languages and frameworks.
            </p>
          </div>
          
          <Tabs defaultValue="javascript" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="javascript">JS</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="php">PHP</TabsTrigger>
              <TabsTrigger value="java">Java</TabsTrigger>
            </TabsList>
            
            <TabsContent value="javascript" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">JavaScript / Node.js</h3>
                  <p className="text-muted-foreground mb-6">
                    Our JavaScript SDK works in both browser and Node.js environments, making it perfect for full-stack applications.
                  </p>
                  <div className="bg-slate-900 rounded-lg p-4 text-white mb-6">
                    <pre className="text-sm font-mono overflow-x-auto">
                      <code className="language-javascript">
{`// Install the SDK
npm install payhunt-js

// Initialize the SDK
const PayHunt = require('payhunt-js');
const client = new PayHunt('YOUR_API_KEY');

// Create a payment
async function createPayment() {
  try {
    const payment = await client.payments.create({
      amount: 1000,
      currency: 'USD',
      description: 'Order #1234',
      customer: {
        email: 'customer@example.com'
      }
    });
    console.log(payment);
  } catch (error) {
    console.error(error);
  }
}`}
                      </code>
                    </pre>
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline">
                      <GitBranch className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                    <Button variant="outline">
                      <BookOpen className="mr-2 h-4 w-4" /> Documentation
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Promise-based API</h4>
                        <p className="text-muted-foreground">Modern async/await support for clean code</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">TypeScript Support</h4>
                        <p className="text-muted-foreground">Full type definitions for better developer experience</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Framework Integrations</h4>
                        <p className="text-muted-foreground">Ready-to-use components for React, Vue, and Angular</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Webhook Handling</h4>
                        <p className="text-muted-foreground">Built-in webhook signature verification</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="python" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">Python</h3>
                  <p className="text-muted-foreground mb-6">
                    Our Python SDK is perfect for backend applications, data analysis, and integrating with Django or Flask.
                  </p>
                  <div className="bg-slate-900 rounded-lg p-4 text-white mb-6">
                    <pre className="text-sm font-mono overflow-x-auto">
                      <code className="language-python">
{`# Install the SDK
pip install payhunt

# Initialize the SDK
import payhunt
client = payhunt.Client("YOUR_API_KEY")

# Create a payment
def create_payment():
    try:
        payment = client.payments.create(
            amount=1000,
            currency="USD",
            description="Order #1234",
            customer={
                "email": "customer@example.com"
            }
        )
        print(payment)
    except payhunt.error.PayHuntError as e:
        print(f"Error: {e}")`}
                      </code>
                    </pre>
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline">
                      <GitBranch className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                    <Button variant="outline">
                      <BookOpen className="mr-2 h-4 w-4" /> Documentation
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Django Integration</h4>
                        <p className="text-muted-foreground">Seamless integration with Django projects</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Flask Integration</h4>
                        <p className="text-muted-foreground">Easy to use with Flask applications</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Async Support</h4>
                        <p className="text-muted-foreground">Async/await support for high-performance applications</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Comprehensive Testing</h4>
                        <p className="text-muted-foreground">Mock objects for easy testing</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="php" className="mt-4">
              {/* PHP SDK content similar to above */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">PHP</h3>
                  <p className="text-muted-foreground mb-6">
                    Our PHP SDK works with all modern PHP frameworks including Laravel, Symfony, and WordPress.
                  </p>
                  <div className="bg-slate-900 rounded-lg p-4 text-white mb-6">
                    <pre className="text-sm font-mono overflow-x-auto">
                      <code className="language-php">
{`// Install the SDK
composer require payhunt/payhunt-php

// Initialize the SDK
<?php
require_once('vendor/autoload.php');

$client = new \\PayHunt\\Client('YOUR_API_KEY');

// Create a payment
try {
    $payment = $client->payments->create([
        'amount' => 1000,
        'currency' => 'USD',
        'description' => 'Order #1234',
        'customer' => [
            'email' => 'customer@example.com'
        ]
    ]);
    print_r($payment);
} catch (\\PayHunt\\Exception\\PayHuntException $e) {
    echo 'Error: ' . $e->getMessage();
}`}
                      </code>
                    </pre>
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline">
                      <GitBranch className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                    <Button variant="outline">
                      <BookOpen className="mr-2 h-4 w-4" /> Documentation
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Laravel Integration</h4>
                        <p className="text-muted-foreground">Dedicated Laravel package with Facades and config</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">WordPress Plugin</h4>
                        <p className="text-muted-foreground">Easy integration with WordPress and WooCommerce</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">PSR-18 Compatible</h4>
                        <p className="text-muted-foreground">Works with any PSR-18 HTTP client</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Webhook Handling</h4>
                        <p className="text-muted-foreground">Built-in webhook signature verification</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="java" className="mt-4">
              {/* Java SDK content similar to above */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">Java</h3>
                  <p className="text-muted-foreground mb-6">
                    Our Java SDK is perfect for enterprise applications, Android development, and Spring Boot projects.
                  </p>
                  <div className="bg-slate-900 rounded-lg p-4 text-white mb-6">
                    <pre className="text-sm font-mono overflow-x-auto">
                      <code className="language-java">
{`// Add dependency to your pom.xml
// <dependency>
//   <groupId>com.payhunt</groupId>
//   <artifactId>payhunt-java</artifactId>
//   <version>1.0.0</version>
// </dependency>

// Initialize the SDK
import com.payhunt.PayHunt;
import com.payhunt.model.Payment;
import com.payhunt.exception.PayHuntException;

public class PaymentExample {
    public static void main(String[] args) {
        PayHunt client = new PayHunt("YOUR_API_KEY");
        
        try {
            Payment payment = client.payments.create(
                new PaymentCreateParams.Builder()
                    .setAmount(1000L)
                    .setCurrency("USD")
                    .setDescription("Order #1234")
                    .setCustomer(
                        new CustomerCreateParams.Builder()
                            .setEmail("customer@example.com")
                            .build()
                    )
                    .build()
            );
            System.out.println(payment);
        } catch (PayHuntException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`}
                      </code>
                    </pre>
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline">
                      <GitBranch className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                    <Button variant="outline">
                      <BookOpen className="mr-2 h-4 w-4" /> Documentation
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Spring Boot Integration</h4>
                        <p className="text-muted-foreground">Dedicated Spring Boot starter</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Android Support</h4>
                        <p className="text-muted-foreground">Optimized for Android applications</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Thread Safety</h4>
                        <p className="text-muted-foreground">Thread-safe implementation for concurrent applications</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded mr-3 mt-0.5">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Comprehensive Testing</h4>
                        <p className="text-muted-foreground">Mock objects for easy testing</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Plugins & Integrations */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Plugins & Integrations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready-to-use plugins for popular platforms and e-commerce solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>WooCommerce</CardTitle>
              <CardDescription>
                Accept payments on your WordPress store
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Our WooCommerce plugin allows you to accept payments directly on your WordPress store with minimal setup.
              </p>
              <Button variant="outline" className="w-full">
                Download Plugin
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Shopify</CardTitle>
              <CardDescription>
                Integrate PayHunt with your Shopify store
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Our Shopify app provides seamless integration with your Shopify store, allowing you to accept payments with ease.
              </p>
              <Button variant="outline" className="w-full">
                Install App
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Magento</CardTitle>
              <CardDescription>
                Payment extension for Magento 2
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Our Magento extension provides a secure and reliable payment solution for your Magento 2 store.
              </p>
              <Button variant="outline" className="w-full">
                Download Extension
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>PrestaShop</CardTitle>
              <CardDescription>
                Payment module for PrestaShop
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Our PrestaShop module allows you to accept payments directly on your PrestaShop store with minimal setup.
              </p>
              <Button variant="outline" className="w-full">
                Download Module
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>OpenCart</CardTitle>
              <CardDescription>
                Payment extension for OpenCart
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Our OpenCart extension provides a secure and reliable payment solution for your OpenCart store.
              </p>
              <Button variant="outline" className="w-full">
                Download Extension
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Custom Integration</CardTitle>
              <CardDescription>
                Need help with a custom integration?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Our team can help you integrate PayHunt with your custom platform or application.
              </p>
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Developer Support */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Developer Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're here to help you with any questions or issues you may have.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Comprehensive documentation with guides, API reference, and examples.
                </p>
                <Button variant="outline" className="w-full">
                  View Docs
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Developer Forum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Connect with other developers and get help from the community.
                </p>
                <Button variant="outline" className="w-full">
                  Join Forum
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Developer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Get direct support from our developer team for technical questions.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
