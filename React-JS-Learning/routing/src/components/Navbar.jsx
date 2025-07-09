import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-center gap-8 text-sm font-semibold uppercase">
            <Link to="/" className="hover:text-green-400">Home</Link>
            <Link to="/about" className="hover:text-green-400">About</Link>
            <Link to="/contact" className="hover:text-green-400">Contact</Link>
            <Link to="/dashboard" className="hover:text-green-400">Dashboard</Link>
            <Link to="/blog" className="hover:text-green-400">Blog</Link>
        </nav>
    );
};

export default Navbar;
