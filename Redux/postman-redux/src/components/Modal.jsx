// File: src/components/Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}                                   // backdrop click closes
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
                className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-lg relative"
                onClick={(e) => e.stopPropagation()}              // prevent inner clicks
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ✕
                </button>

                {title && (
                    <h3 id="modal-title" className="text-2xl font-semibold mb-4 text-gray-800">
                        {title}
                    </h3>
                )}

                {children}
            </div>
        </div>,
        document.body
    );
}
