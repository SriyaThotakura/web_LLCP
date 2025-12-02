// Methodology Component
const Methodology = () => {
    const phases = [
        {
            title: "Research & Development",
            description: "Initial research into audio processing and AI algorithms",
            icon: "🔬"
        },
        {
            title: "Prototype Development",
            description: "Building and testing initial hardware and software prototypes",
            icon: "⚙️"
        },
        {
            title: "Testing & Refinement",
            description: "Rigorous testing and iterative improvements",
            icon: "🧪"
        },
        {
            title: "Production",
            description: "Manufacturing and quality assurance",
            icon: "🏭"
        }
    ];

    return (
        <section id="methodology" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Methodology</h2>
                    <div className="section-divider w-24 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our four-phase approach ensures we deliver a high-quality product that exceeds expectations.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {phases.map((phase, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover-scale transition-all duration-300">
                            <div className="text-4xl mb-4">{phase.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                            <p className="text-gray-600">{phase.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Team Component
const Team = () => (
    <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
                <div className="section-divider w-24 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Meet the talented individuals behind HearOnly.
                </p>
            </div>
            <div className="text-center">
                <p className="text-lg text-gray-600">Team information coming soon...</p>
            </div>
        </div>
    </section>
);

// Schedule Component
const Schedule = () => (
    <section id="schedule" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">Project Timeline</h2>
                <div className="section-divider w-24 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our roadmap to bringing HearOnly to life.
                </p>
            </div>
            <div className="text-center">
                <p className="text-lg text-gray-600">Timeline details coming soon...</p>
            </div>
        </div>
    </section>
);

// Marketing Component
const Marketing = () => (
    <section id="marketing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">Marketing Strategy</h2>
                <div className="section-divider w-24 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    How we plan to bring HearOnly to the world.
                </p>
            </div>
            <div className="text-center">
                <p className="text-lg text-gray-600">Marketing details coming soon...</p>
            </div>
        </div>
    </section>
);

// Risk Component
const Risk = () => (
    <section id="risk" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900 mb-4">Risk Assessment</h2>
                <div className="section-divider w-24 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    How we're addressing potential challenges.
                </p>
            </div>
            <div className="text-center">
                <p className="text-lg text-gray-600">Risk assessment details coming soon...</p>
            </div>
        </div>
    </section>
);

// Footer Component
const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full gradient-bg"></div>
                        <span className="text-xl font-bold">HearOnly</span>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">© 2025 HearOnly. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.292 2.747-1.024 2.747-1.024.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
);
