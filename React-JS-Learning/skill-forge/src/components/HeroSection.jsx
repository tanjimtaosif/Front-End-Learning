import React from 'react';
import heroImage from '../assets/courses/hero-image.png'; // Ensure this file exists

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-green-100 to-white py-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Learn New Skills. <br /> Advance Your Career. <br />
                        <span className="text-green-500">Anytime Anywhere.</span>
                    </h1>
                    <div className="mt-6">
                        <input
                            type="text"
                            placeholder="Search course"
                            className="p-3 border border-gray-300 rounded-md w-full max-w-md"
                        />
                    </div>
                </div>
                <div className="flex justify-center pl-35">
                    <img
                        src={heroImage}
                        alt="Student using laptop"
                        className="w-full max-w-md rounded-xl shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}
