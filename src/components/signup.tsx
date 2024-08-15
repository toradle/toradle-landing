"use client"

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribe } from "@/services";

const Signup = () => {
    const [email, setEmail] = useState("");
    
    const onSignup = async () => {
        console.log(email);
        await subscribe(email);
        setEmail("");
    };

    return (
        <section className="w-full py-12 text-white" id="signup">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sign Up for the Beta</h2>
              <p className="mx-auto max-w-[600px]">
                Enter your email below to request access to the beta program. We&apos;ll be in touch with more details.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                    type="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 text-black"
                />
                <Button type="button" className="bg-toradleyellow text-black" onClick={onSignup}>Sign Up</Button>
              </form>
            </div>
          </div>
        </section>
    );
};

export default Signup;