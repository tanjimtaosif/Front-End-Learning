const OrderForm = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
            <div className="bg-gray-900 p-6 rounded-lg shadow max-w-3xl w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-xl font-bold hover:text-green-400"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
                    Place a New Order
                </h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <textarea
                        placeholder="Order Description"
                        className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                        rows={4}
                    />
                    <input
                        type="file"
                        className="w-full p-2 rounded-md bg-gray-800 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-black hover:file:bg-green-400"
                    />
                    <button
                        type="submit"
                        className="bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition w-full"
                    >
                        Submit Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;
