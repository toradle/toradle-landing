import React from "react";
import Link from "next/link";
import Signup from "./signup";

const ContactUs: React.FC = () => {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 text-white" id="contactus">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What&apos;s in the Beta?</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                The beta program offers early access to our innovative product, with exclusive features and the
                                opportunity to provide feedback that will shape the final release.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 text-center sm:text-left">
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Early Access</h3>
                            <p className="text-sm text-muted-foreground">
                                Be one of the first to experience our groundbreaking new product.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Exclusive Features</h3>
                            <p className="text-sm text-muted-foreground">
                                Gain access to beta-only features not available in the public release.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Feedback Influence</h3>
                            <p className="text-sm text-muted-foreground">
                                Your feedback will directly shape the development of the final product.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Signup />
        </>
    );
};

export default ContactUs;