import React from 'react';
import PopularCourses from '../components/PopularCourses';
import { Link } from 'react-router-dom';
import Allcourse from '../components/Allcourse';

export default function Courses() {
  return (
    <div className="bg-white">

      <div className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Browse Our Top Online Courses
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're starting out or looking to grow, we have something for everyone. Discover high-quality courses taught by industry professionals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-4">
        <button className="px-4 py-2 rounded-full border hover:bg-green-100 transition">All</button>
        <button className="px-4 py-2 rounded-full border hover:bg-green-100 transition">Design</button>
        <button className="px-4 py-2 rounded-full border hover:bg-green-100 transition">Development</button>
        <button className="px-4 py-2 rounded-full border hover:bg-green-100 transition">Marketing</button>
        <button className="px-4 py-2 rounded-full border hover:bg-green-100 transition">Photography</button>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Allcourse/>
        </div>
      </section>
    </div>
  );
}
