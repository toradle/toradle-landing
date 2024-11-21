"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Lock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="h-full"
  >
    <Card className="h-full bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg border border-gray-700 hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="text-center">
        <Icon className="h-10 w-10 mb-3 text-yellow-500" />
        <CardTitle className="text-white text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const ContactUs: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-transparent">
      <div className="container mx-auto px-6 md:px-10">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Discover the Beta Experience
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-gray-400 md:text-lg lg:text-xl"
          >
            Join our exclusive beta program and shape the future of innovation.
            Get early access, exclusive features, and the power to influence
            our product&apos;s development.
          </motion.p>
        </div>

        {/* Cards Section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Zap}
            title="Early Access"
            description="Be among the first to experience our groundbreaking new product and stay ahead of the curve."
          />
          <FeatureCard
            icon={Lock}
            title="Exclusive Features"
            description="Unlock beta-only features and functionalities not available in the public release."
          />
          <FeatureCard
            icon={MessageSquare}
            title="Direct Influence"
            description="Your feedback will play a crucial role in shaping the final product. Be heard, be influential."
          />
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Button
            size="lg"
            className="bg-yellow-500 text-black font-semibold py-4 px-8 shadow-lg group hover:bg-yellow-600 transition-all duration-300"
          >
            Join the Beta Program
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
