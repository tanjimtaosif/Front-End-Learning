import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Brand / Name */}
                <div className="text-lg font-bold text-green-400">
                    Tanjim Mahtab
                </div>

                {/* Navigation Links */}
                <nav className="flex gap-6 text-sm">
                    <Link to="/" className="hover:text-green-400 transition">Home</Link>
                    <Link to="/about" className="hover:text-green-400 transition">About</Link>
                    <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
                </nav>

                {/* Copyright */}
                <div className="text-xs text-gray-500 text-center md:text-right">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
