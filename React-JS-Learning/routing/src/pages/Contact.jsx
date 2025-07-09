const Contact = () => {
    return (
        <section className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-green-500 mb-8">Let's Connect</h2>

            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
                <form
                    action="mailto:your-email@example.com"
                    method="POST"
                    encType="text/plain"
                >
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-semibold text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-semibold text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-semibold text-gray-300">
                            Message
                        </label>
                        <textarea
                            name="message"
                            required
                            rows="4"
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-md transition"
                    >
                        SEND
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
