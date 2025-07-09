import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGithub,
} from 'react-icons/fa';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';
import { Link } from 'react-router-dom';
import OrderForm from '../components/OrderForm'; // ✅ import the modal

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen w-full overflow-hidden text-white px-6 flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Spline scene="https://prod.spline.design/smN9ZdgA852R-BRJ/scene.splinecode" />
                </div>
                <div className="z-10 text-center">
                    <h4 className="text-green-500 text-lg mb-2">Hi, I'm Tanjim Mahtab</h4>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                        CREATING INTUITIVE <br /> AND ENGAGING <br /> DIGITAL PRODUCTS
                    </h1>
                    <p className="text-gray-300 max-w-xl mx-auto mb-6">
                        I deliver exceptional user experiences across various platforms.
                    </p>
                    <Link to="/contact">
                        <button className="bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">
                            LET'S CONNECT
                        </button>
                    </Link>
                </div>
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
                            <button
                                onClick={openModal}
                                className="mt-6 bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition"
                            >
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
                            <button
                                onClick={openModal}
                                className="mt-6 bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition"
                            >
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
                            <button
                                onClick={openModal}
                                className="mt-6 bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition"
                            >
                                Get Service
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skill Section */}
            <section className="bg-black text-white py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-400">
                        My Skills
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center gap-2 hover:scale-105 transition text-center">
                            <FaHtml5 className="text-orange-500 text-4xl" />
                            <p>HTML5</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 hover:scale-105 transition text-center">
                            <FaCss3Alt className="text-blue-500 text-4xl" />
                            <p>CSS3</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 hover:scale-105 transition text-center">
                            <FaJs className="text-yellow-300 text-4xl" />
                            <p>JavaScript</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 hover:scale-105 transition text-center">
                            <SiTailwindcss className="text-cyan-400 text-4xl" />
                            <p>Tailwind CSS</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 hover:scale-105 transition text-center">
                            <FaReact className="text-blue-400 text-4xl" />
                            <p>React</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 hover:scale-105 transition text-center">
                            <FaGithub className="text-white text-4xl" />
                            <p>Git & GitHub</p>
                        </div>
                        <div className="flex flex-col items-center gap-2 hover:scale-105 transition text-center">
                            <SiFirebase className="text-yellow-400 text-4xl" />
                            <p>Firebase</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Mount */}
            {showModal && <OrderForm onClose={closeModal} />}
        </>
    );
};

export default Home;
