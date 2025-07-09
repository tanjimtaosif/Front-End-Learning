import { FaStar } from 'react-icons/fa';

const OrderSection = () => {
  return (
    <section className="bg-gray-950 text-white rounded-2xl py-16 px-6">
      <div className="max-w mx-auto">
        <h2 className="text-3xl font-bold text-green-400 text-center mb-12">Service Orders</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition relative">
            {/* Star icon (important marker) */}
            <button className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 text-xl transition">
              <FaStar />
            </button>

            <h3 className="text-xl font-semibold mb-2">Tanjim Mahtab</h3>
            <p className="text-sm text-gray-400 mb-1">📧 tanjim@example.com</p>
            <p className="text-sm text-gray-400 mb-4">📞 +8801XXXXXXX</p>

            <p className="text-gray-300 mb-4">
              I need a responsive and modern frontend for my travel blog. Preferably React with Tailwind CSS.
            </p>

            <div className="w-full h-48 overflow-hidden rounded-md">
              <img
                src=""
                alt="Order Reference"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">Complete</button>
          </div>

          {/* Another Order Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition relative">
            <button className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 text-xl transition">
              <FaStar />
            </button>

            <h3 className="text-xl font-semibold mb-2">Irteja Mahmud</h3>
            <p className="text-sm text-gray-400 mb-1">irteja.dev@gmail.com</p>
            <p className="text-sm text-gray-400 mb-4">+88017XXXXXXX</p>

            <p className="text-gray-300 mb-4">
              Looking for a landing page design for a product launch with a modern UI.
            </p>

            <div className="w-full h-48 overflow-hidden rounded-md">
              <img
                src="https://via.placeholder.com/400x200.png?text=Landing+Page+Mockup"
                alt="Order Mockup"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="bg-green-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">Complete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
