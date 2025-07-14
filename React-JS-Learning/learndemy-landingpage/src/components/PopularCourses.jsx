import React from 'react';

const courses = Array.from({ length: 12 }).map((_, i) => ({
    title: 'Content Creator for Social Media',
    instructor: 'Charlotte Gellar',
    rating: (8 + Math.random()).toFixed(1),
    price: `${(10 + Math.random() * 10).toFixed(2)} USD`,
}));

export default function PopularCourses() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">This Week's Most Popular Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {courses.map((course, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-md">
                            <div className="h-40 bg-gray-200 rounded mb-4"></div>
                            <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                            <p className="text-sm text-gray-600">By {course.instructor}</p>
                            <div className="flex justify-between items-center mt-2 text-sm">
                                <span>⭐ {course.rating}</span>
                                <span>{course.price}</span>
                            </div>
                            <button className="mt-3 bg-green-500 text-white px-3 py-1 rounded w-full">View Course</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
