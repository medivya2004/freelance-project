'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Target, Shield, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To empower businesses with innovative solutions that drive sustainable growth and create lasting value for our stakeholders.',
  },
  {
    icon: Shield,
    title: 'Integrity First',
    description:
      'We maintain the highest ethical standards in all our dealings, building trust through transparency and accountability.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driven',
    description:
      'We continuously evolve our approaches and solutions to meet the changing needs of modern businesses.',
  },
  {
    icon: Users,
    title: 'Client Focused',
    description:
      'Our success is measured by the success of our clients. We are dedicated to understanding and exceeding their expectations.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-accent/10 text-accent border-accent/20 mb-6">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Your Trusted Partner for{' '}
              <span className="text-primary">Business Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Gollya Avanta LLP is a distinguished Limited Liability Partnership
              committed to delivering exceptional business solutions. With years
              of experience across diverse industries, we have established
              ourselves as a reliable partner for organizations seeking growth
              and transformation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of professionals brings together deep expertise,
              innovative thinking, and a passion for excellence. We believe in
              building long-term relationships based on trust, mutual respect,
              and shared success.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">
                  Professional Excellence
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm font-medium text-foreground">
                  Industry Expertise
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary/60" />
                <span className="text-sm font-medium text-foreground">
                  Sustainable Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
