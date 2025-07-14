import React from 'react';

export default function Categories() {
    const data = [
        'Design & Creativity',
        'Tech & Programming',
        'Business & Marketing',
        'Photography & Visual Arts',
        'Personal Development',
    ];

    return (
        <section className="py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">Find Courses That Fit Your Passion</h2>
            <div className="flex justify-center gap-4 flex-wrap">
                {data.map((cat, i) => (
                    <div key={i} className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-green-500 hover:text-white transition cursor-pointer">
                        {cat}
                    </div>
                ))}
            </div>
        </section>
    );
}
