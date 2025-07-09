import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
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

            {/* Services Section */}
            <section className="bg-gray-950 text-white pb-[100px] px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-400">
                        My Services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Web Design
                            </h3>
                            <p className="text-gray-400">
                                Clean, modern, and responsive website designs with intuitive UX/UI.
                            </p>
                            <button className="mt-6 bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">
                                Get Service
                            </button>
                        </div>

                        {/* Service Card 2 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Frontend Development
                            </h3>
                            <p className="text-gray-400">
                                Interactive frontend applications using React and Tailwind CSS.
                            </p>
                            <button className="mt-6 bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">
                                Get Service
                            </button>
                        </div>

                        {/* Service Card 3 */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                SEO Optimization
                            </h3>
                            <p className="text-gray-400">
                                Optimize your site to rank better on Google and improve traffic.
                            </p>
                            <button className="mt-6 bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">
                                Get Service
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
