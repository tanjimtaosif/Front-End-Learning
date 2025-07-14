import React from 'react';

const plans = [
    {
        name: 'Basic',
        price: '$19 / per month',
        features: [
            'Unlimited course access',
            'Certificates of completion',
            'Full access to community forum',
            'Course downloads for offline viewing',
            '1 mentor Q&A live per month',
        ],
    },
    {
        name: 'Team',
        price: '$99 / per month',
        features: [
            'Everything in Basic Plan for all users',
            'Team-based progress tracking',
            'Bulk onboarding support',
            'Monthly team performance report',
            'Invoice billing available',
        ],
    },
];

export default function PricingPlans() {
    return (
        <section id="pricing" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-10">Unlimited Learning. One Subscription.</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {plans.map((plan, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                            <p className="text-2xl font-bold text-green-500 mb-4">{plan.price}</p>
                            <ul className="text-left space-y-2">
                                {plan.features.map((f, j) => (
                                    <li key={j}>✔️ {f}</li>
                                ))}
                            </ul>
                            <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded">Get Started</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
