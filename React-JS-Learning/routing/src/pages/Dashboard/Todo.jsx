const Todo = () => {
    return (
        <section className="bg-gray-900 text-white max-w-xxl mx-auto p-6 rounded-lg shadow-lg mt-20">
            <h2 className="text-3xl font-bold mb-6 text-green-400 text-center">My Todo List</h2>

            {/* Input and Button */}
            <div className="flex gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Add a new task"
                    className="flex-grow px-4 py-2 rounded-md text-black focus:outline-none"
                />
                <button className="bg-green-500 hover:bg-green-400 text-black px-6 py-2 rounded-md font-semibold transition">
                    Add
                </button>
            </div>

            {/* Example Todo Items */}
            <ul className="space-y-3">
                <li className="flex items-center justify-between bg-gray-800 p-3 rounded-md shadow">
                    <span className="text-lg">Finish portfolio section</span>
                    <button className="text-red-500 hover:text-red-400 font-light text-xl">Close</button>
                </li>
                <li className="flex items-center justify-between bg-gray-800 p-3 rounded-md shadow">
                    <span className="text-lg">Update resume</span>
                    <button className="text-red-500 hover:text-red-400 font-light text-xl">Close</button>
                </li>
                <li className="flex items-center justify-between bg-gray-800 p-3 rounded-md shadow">
                    <span className="text-lg">Deploy website to GitHub</span>
                    <button className="text-red-500 hover:text-red-400 font-light text-xl">Close</button>
                </li>
            </ul>
        </section>

    );
};

export default Todo;
