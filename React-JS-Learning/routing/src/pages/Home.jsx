import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
            <h4 className="text-green-500 text-lg mb-2">Hi, I'm Tanjim Mahtab</h4>
            <h1 className="text-4xl md:text-6xl font-extrabold text-center leading-tight mb-4">
                CREATING INTUITIVE <br /> AND ENGAGING <br /> DIGITAL PRODUCTS
            </h1>
            <p className="text-gray-300 text-center max-w-xl mb-6">
                I deliver exceptional user experiences across various platforms.
            </p>
            <Link to="/contact">
                <button className="bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">
                    LET'S CONNECT
                </button>
            </Link>
        </section>
    );
};

export default Home;
