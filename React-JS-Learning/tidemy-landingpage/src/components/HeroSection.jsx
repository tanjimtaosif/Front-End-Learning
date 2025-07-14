import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-green-100 to-white py-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-4xl font-bold leading-tight">
                        Learn New Skills. <br /> Advance Your Career. <br /> <span className="text-green-500">Anytime Anywhere.</span>
                    </h1>
                    <div className="mt-6">
                        <input type="text" placeholder="Search course" className="p-3 border rounded-md w-full max-w-md" />
                    </div>
                </div>
                <div>
                    <img src="/hero-image.png" alt="Student" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
}
