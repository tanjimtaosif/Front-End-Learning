import React from 'react';
import { Link } from 'react-router-dom';
import webDev from '../assets/courses/web-dev.png';
import uiux from '../assets/courses/uiux.png';
import marketing from '../assets/courses/marketing.png';
import dataScience from '../assets/courses/data-science.png';
import python from '../assets/courses/python.png';
import seo from '../assets/courses/seo.png';
import photography from '../assets/courses/photography.png';
import contentCreation from '../assets/courses/content-creation.png';
import videoEditing from '../assets/courses/video-editing.png';
import finance from '../assets/courses/finance.png';
import mobileDev from '../assets/courses/mobile-dev.png';
import gameDev from '../assets/courses/game-dev.png';
import rctntv from "../assets/courses/react-native.png";
import fullstack from "../assets/courses/full-stack-development.png";

const courses = [
    {
        title: 'Web Development Bootcamp',
        instructor: 'Tanjim Mahtab',
        rating: 9.1,
        price: '14.99 USD',
        image: webDev
    },
    {
        title: 'Full-Stack Development',
        instructor: 'Irteja Mahmud',
        rating: 9.0,
        price: '80.00 USD',
        image: fullstack
    },
    {
        title: 'UI/UX Design Masterclass',
        instructor: 'Rimon Borua',
        rating: 8.9,
        price: '12.99 USD',
        image: uiux
    },
    {
        title: 'Digital Marketing 101',
        instructor: 'Shakil Ahmed',
        rating: 8.6,
        price: '11.49 USD',
        image: marketing
    },
    {
        title: 'Data Science with Python',
        instructor: 'Pankaj Mahanta',
        rating: 9.2,
        price: '18.00 USD',
        image: dataScience
    },
    {
        title: 'Python Programming Basics',
        instructor: 'Abid Hossain',
        rating: 8.7,
        price: '13.00 USD',
        image: python
    },
    {
        title: 'SEO Fundamentals',
        instructor: 'Md. Tanjim Mahtab',
        rating: 8.5,
        price: '10.50 USD',
        image: seo
    },
    {
        title: 'Photography for Beginners',
        instructor: 'Shawon Hawlader',
        rating: 9.0,
        price: '16.75 USD',
        image: photography
    },
    {
        title: 'Content Creation Strategy',
        instructor: 'Rimon Borua Dipta',
        rating: 8.3,
        price: '14.25 USD',
        image: contentCreation
    },
    {
        title: 'Video Editing with Premiere',
        instructor: 'Shakil Ahmed',
        rating: 8.8,
        price: '17.99 USD',
        image: videoEditing
    },
    {
        title: 'Finance for Freelancers',
        instructor: 'Tanvir Newaz',
        rating: 8.6,
        price: '12.00 USD',
        image: finance
    },
    {
        title: 'Mobile App Development',
        instructor: 'Kamrul Hasan',
        rating: 9.3,
        price: '19.99 USD',
        image: mobileDev
    },
    {
        title: 'Game Development with Unity',
        instructor: 'Kamrul Hasan',
        rating: 9.0,
        price: '15.00 USD',
        image: gameDev
    },
    {
        title: 'React Native',
        instructor: 'Mostak Ahamed',
        rating: 2.0,
        price: '2000.00 USD',
        image: rctntv
    },
];

const PopularCourses = ({ limit = 3 }) => {
    const displayedCourses = courses.slice(0, limit);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">This Week's Most Popular Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {displayedCourses.map((course, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-md">
                            <img src={course.image} alt={course.title} className="h-40 w-full object-cover rounded mb-4" />
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

                <div className="mt-8 text-center">
                    <Link to="/courses">
                        <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                            See More Courses
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;
