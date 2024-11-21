/* eslint-disable react/no-unescaped-entities */
"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PhoneCallIcon, MapPinHouseIcon } from "lucide-react";
import { useState } from "react";

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(JSON.stringify(formData, null, 2));
    };

    return (
        <div className="w-full mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8 sm:p-12">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Get in Touch</h1>
                        <p className="mt-3 text-lg text-gray-300">
                            We're excited to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="name" className="text-gray-200 font-semibold">Name</Label>
                                <Input id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500" />
                            </div>
                            <div>
                                <Label htmlFor="phone" className="text-gray-200 font-semibold">Phone</Label>
                                <Input id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500" />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="email" className="text-gray-200 font-semibold">
                                <span className="mr-1">Email</span>
                                <span className="text-yellow-500">*</span>
                            </Label>
                            <Input id="email" type="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500" />
                        </div>
                        <Button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ContactUsForm;