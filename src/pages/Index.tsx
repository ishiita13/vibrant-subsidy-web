
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, TrendingUp, Shield, Zap, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-white font-semibold text-xl">RestaurantOS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Log In
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20">
                🚀 We're in Alpha
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Take control of your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    {" "}restaurant's success
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Streamline operations, boost profits, and delight customers with our all-in-one restaurant management platform. From orders to analytics, we've got you covered.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 border-2 border-gray-900"></div>
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">Trusted by 1000+ restaurants</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                  <span className="text-gray-300 text-sm ml-2">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                {/* Mobile mockup */}
                <div className="absolute -left-8 top-8 w-64 h-96 bg-gray-800 rounded-3xl border border-gray-700 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                  <div className="p-6 space-y-4">
                    <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-orange-500 rounded w-full"></div>
                      <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 bg-gray-700 rounded"></div>
                      <div className="h-16 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Desktop mockup */}
                <div className="w-96 h-64 bg-gray-800 rounded-xl border border-gray-700 shadow-2xl ml-16 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-orange-500/20 rounded"></div>
                        <div className="h-12 bg-gray-700 rounded"></div>
                        <div className="h-12 bg-gray-700 rounded"></div>
                      </div>
                      <div className="h-2 bg-gray-700 rounded w-full"></div>
                      <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20">
              Features
            </Badge>
            <h2 className="text-4xl font-bold text-white">Everything you need to succeed</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful tools designed specifically for restaurant owners and managers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Staff Management",
                description: "Manage schedules, track performance, and streamline communication with your team."
              },
              {
                icon: TrendingUp,
                title: "Analytics & Reports",
                description: "Real-time insights into sales, inventory, and customer behavior to drive growth."
              },
              {
                icon: Shield,
                title: "Secure Payments",
                description: "PCI-compliant payment processing with support for all major payment methods."
              },
              {
                icon: Zap,
                title: "Order Management",
                description: "Streamline kitchen operations with smart order routing and real-time updates."
              },
              {
                icon: Globe,
                title: "Multi-Location",
                description: "Manage multiple restaurant locations from a single, unified dashboard."
              },
              {
                icon: Star,
                title: "Customer Reviews",
                description: "Monitor and respond to customer feedback across all major review platforms."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 p-6 hover:bg-gray-800/70 transition-colors group">
                <feature.icon className="w-12 h-12 text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to transform your restaurant?
          </h2>
          <p className="text-xl text-gray-300">
            Join thousands of successful restaurants already using RestaurantOS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              Start Your Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="text-white font-semibold text-xl">RestaurantOS</span>
              </div>
              <p className="text-gray-400">
                The complete restaurant management solution for modern businesses.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Product</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Features</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Pricing</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">API</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Company</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">About</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Careers</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Contact</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Support</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Help Center</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Documentation</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Status</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 RestaurantOS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
