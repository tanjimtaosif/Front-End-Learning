const About = () => {
    return (
        <section className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center justify-start">
            <div className="max-w-3xl text-center">
                <h2 className="text-4xl font-bold text-green-500 mb-4">About Me</h2>

                <p className="text-lg text-gray-300 mb-8">
                    I'm <span className="text-white font-semibold">Tanjim Mahtab</span>, a passionate front-end developer and UI/UX enthusiast from Bangladesh.
                </p>

                <p className="text-md text-gray-400 mb-8">
                    I started my web development journey in university and have grown my skills in HTML, CSS, Tailwind, JavaScript, and React.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 text-left">
                    <div>
                        <h3 className="text-xl font-semibold text-green-400 mb-2">Skills</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>HTML, CSS, Tailwind</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Responsive Design</li>
                            <li>Git & GitHub</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-green-400 mb-2">Experience</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>Personal portfolio projects</li>
                            <li>React app development</li>
                            <li>UI design using Tailwind</li>
                            <li>Learning MERN stack</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
