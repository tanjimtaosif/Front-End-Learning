import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Tidemy</h1>
                <nav className="space-x-6">
                    <Link to="/" className="hover:text-green-500">Home</Link>
                    <Link to="/courses" className="hover:text-green-500">Courses</Link>
                    <a href="#pricing" className="hover:text-green-500">Pricing</a>
                </nav>
            </div>
        </header>
    );
}
