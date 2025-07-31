function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow transition"
        >
            {text}
        </button>
    );
}

export default Button;
