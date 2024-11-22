/* eslint-disable react/no-unescaped-entities */
"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PhoneCallIcon, MapPinHouseIcon } from "lucide-react";
import { useState, CSSProperties } from "react";
import { useToast } from "@/hooks/use-toast"
import { Textarea } from "@/components/ui/textarea"


import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

import ReCAPTCHA from "react-google-recaptcha";

import { contactus } from "@/services";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const { toast } = useToast()

    let [loading, setLoading] = useState(true);

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!recaptchaToken) {
            console.error('Please complete the reCAPTCHA');
            return;
        }
        try {
            setLoading(true);
            const response = await contactus(formData);
            // console.log('Contact form submitted successfully:', response);
            setFormData({
                name: "",
                phone: "",
                email: "",
                message: ""
            });
            toast({
                variant: "success",
                title: "Message Sent!",
                description: "Message sent successfully!",
            })
        } catch (error) {
            console.error('Error submitting contact form:', error);
        }
        setLoading(false);
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
                                <Input disabled={loading} id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500" />
                            </div>
                            <div>
                                <Label htmlFor="phone" className="text-gray-200 font-semibold">Phone</Label>
                                <Input disabled={loading} id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500" />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="email" className="text-gray-200 font-semibold">
                                <span className="mr-1">Email</span>
                                <span className="text-yellow-500">*</span>
                            </Label>
                            <Input disabled={loading} id="email" type="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500" />
                        </div>

                        <div>
                            <Label htmlFor="message" className="text-gray-200 font-semibold">Message</Label>
                            <Textarea disabled={loading}
                                id="message"
                                placeholder="Enter your message"
                                value={formData.message || ""}
                                onChange={handleChange}
                                className="mt-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500 w-full h-32 p-3 rounded-md"
                            />
                        </div>

                        {loading && <ClipLoader
                            className="absolute top-1/2 left-1/2 !-ml-[75px]"
                            color="#14e7eb"
                            loading={loading}
                            cssOverride={override}
                            size={150}
                            aria-label="Submitting Message"
                            data-testid="loader"
                        />}

                        <ReCAPTCHA
                            sitekey={RECAPTCHA_SITE_KEY}
                            onChange={handleRecaptchaChange}
                        />
                        <Button type="submit" disabled={loading} className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ContactUsForm;