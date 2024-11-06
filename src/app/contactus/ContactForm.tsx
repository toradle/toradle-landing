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
        <div className="w-full mx-auto py-12 md:py-16 px-10 sm:px-80">
            <div className="flex flex-col sm:flex-row gap-10 justify-between bg-slate-700 p-5 rounded">
                <div className="w-full">
                    <div>
                        <h1 className="text-3xl font-bold">Get in Touch</h1>
                        <p className="text-muted-foreground">
                            Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Enter your name"  value={formData.name} onChange={handleChange} />
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" type="tel" placeholder="Enter your phone number"  value={formData.phone} onChange={handleChange}  />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="email">
                                <span className="text-white mr-1">Email</span>
                                <span className="text-red-500">*</span>
                            </Label>
                            <Input id="email" type="email" placeholder="Enter your email" required  value={formData.email} onChange={handleChange}  />
                        </div>
                        <Button type="submit" className="w-full bg-toradleyellow text-black font-bold hover:bg-toradlegolden">
                            Send Invite
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ContactUsForm;