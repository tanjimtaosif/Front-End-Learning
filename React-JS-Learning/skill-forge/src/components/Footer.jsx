import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 mt-10">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Tidemy</h2>
                    <p className="mb-4">Enter your email and get exclusive learning tips, course releases, and discounts straight to your inbox.</p>
                    <div className="flex">
                        <input type="email" placeholder="Enter Email" className="p-2 rounded-l bg-white text-black" />
                        <button className="bg-green-500 text-white p-2 rounded-r">Submit</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold mb-2">Quicklinks</h3>
                        <ul className="space-y-1">
                            <li>Home</li>
                            <li>All Courses</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Popular Categories</h3>
                        <ul className="space-y-1">
                            <li>UI/UX Design</li>
                            <li>Programming</li>
                            <li>Business</li>
                            <li>Personal Growth</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center mt-6 text-gray-400">© 2025 Skill Forge Inc. All rights reserved.</div>
        </footer>
    );
}
