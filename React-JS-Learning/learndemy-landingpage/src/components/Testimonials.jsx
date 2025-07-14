import React from 'react';

const testimonials = [
    {
        quote: "Tidemy Academy’s UI/UX course helped me refine my skills. Now I’m working with clients all over the world!",
        name: "Sarah Viddi",
        role: "Freelance Designer",
    },
    {
        quote: "Tidemy's bite-sized lessons made it possible to learn coding part-time!",
        name: "Mike Tyson",
        role: "Marketing Manager",
    },
    {
        quote: "Tidemy’s real-world projects made learning fast and useful!",
        name: "Anita Chan",
        role: "Aspiring Developer",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Hear From Our Learners</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-gray-100 p-6 rounded-lg shadow">
                            <p className="italic mb-4">“{t.quote}”</p>
                            <p className="font-semibold">{t.name}</p>
                            <p className="text-sm text-gray-600">{t.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
