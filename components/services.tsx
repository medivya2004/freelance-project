'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  TrendingUp,
  Lightbulb,
  FileCheck,
  Users2,
  Settings,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description:
      'Strategic guidance to optimize operations, improve efficiency, and achieve sustainable business growth.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description:
      'Comprehensive market analysis and strategic planning to identify opportunities and drive expansion.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Advisory',
    description:
      'Expert guidance on adopting new technologies and methodologies to stay ahead of the competition.',
  },
  {
    icon: FileCheck,
    title: 'Compliance Services',
    description:
      'Navigate regulatory requirements with confidence through our comprehensive compliance solutions.',
  },
  {
    icon: Users2,
    title: 'Human Resource Solutions',
    description:
      'Build and nurture high-performing teams with our HR consulting and talent management services.',
  },
  {
    icon: Settings,
    title: 'Operational Excellence',
    description:
      'Streamline processes and enhance productivity through proven operational optimization strategies.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-6">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Comprehensive Solutions for{' '}
            <span className="text-primary">Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide a wide range of professional services designed to help
            your business thrive in today&apos;s competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card"
            >
              <CardHeader className="pb-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
