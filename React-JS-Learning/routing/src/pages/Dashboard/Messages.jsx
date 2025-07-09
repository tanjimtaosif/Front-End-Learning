const Messages = () => {
    return (
        <section className="bg-gray-950 text-white py-16 px-6">
            <div className="max-w mx-auto">
                {/* Favorite Bar */}
                <div className="bg-gray-800 p-4 rounded-lg shadow mb-8">
                    <h3 className="text-xl font-semibold mb-2 text-green-400">Favorites</h3>
                    <div className="flex space-x-4 overflow-x-auto">
                        {/* Favorite contact/message boxes */}
                        <div className="bg-gray-700 px-4 py-2 rounded-full text-sm text-white whitespace-nowrap hover:bg-green-500 cursor-pointer transition">
                            Tanjim Mahtab
                        </div>

                        <div className="bg-gray-700 px-4 py-2 rounded-full text-sm text-white whitespace-nowrap hover:bg-green-500 cursor-pointer transition">
                            Mahtab Taosif
                        </div>
                    </div>
                </div>

                {/* Message List */}
                <div className="bg-gray-900 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-6 text-green-400">Messages</h2>

                    <div className="space-y-4">
                        {/* Message Item */}
                        <div className="bg-gray-800 p-4 rounded-md shadow hover:shadow-lg transition">
                            <h4 className="text-lg font-semibold">Tanjim Mahtab</h4>
                            <p className="text-gray-400 text-sm">Hey, are you free tomorrow to review the code?</p>
                        </div>

                        {/* Message Item */}
                        <div className="bg-gray-800 p-4 rounded-md shadow hover:shadow-lg transition">
                            <h4 className="text-lg font-semibold">Mahtab Taosif</h4>
                            <p className="text-gray-400 text-sm">Can we add more keywords to the homepage content?</p>
                        </div>

                        {/* Message Item */}
                        <div className="bg-gray-800 p-4 rounded-md shadow hover:shadow-lg transition">
                            <h4 className="text-lg font-semibold">Irteja Mahmud</h4>
                            <p className="text-gray-400 text-sm">Thanks for your contribution to our open source project!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Messages;
