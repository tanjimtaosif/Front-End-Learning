import React from 'react';
import HeroSection from '../components/HeroSection';
import Categories from '../components/Categories';
import PopularCourses from '../components/PopularCourses';
import Testimonials from '../components/Testimonials';
import PricingPlans from '../components/PricingPlans';

export default function Home() {
    return (
        <>
            <HeroSection />
            <Categories />
            <PopularCourses />
            <Testimonials />
            <PricingPlans />
        </>
    );
}
