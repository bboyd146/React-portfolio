import { useEffect, useRef } from 'react';
import { projects } from '../projects';

export default function Project() {
    const projectRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.5 // Adjust as needed
        });

        projectRefs.current.forEach((ref) => {
            observer.observe(ref);
        });

        // Cleanup observer
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <h1 className="border-t-2 border-gray-300 text-4xl tracking-tight bg-white font-extrabold flex-1 flex items-center justify-center pt-10 text-pink-700 sm:text-5xl md:text-6xl">Work</h1>
            <main>
                <section className="bg-white">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Projects</h2>
                        <div className="grid grid-cols-1 gap-10">
                            {projects.map((project, index) => (
                                <a key={project.id} href={project.dHref} className="group block" ref={(el) => (projectRefs.current[index] = el)}>
                                    <div className="border rounded-lg overflow-hidden bg-white shadow-lg lg:flex">
                                        <div className="h-48 lg:h-auto lg:w-80 lg:flex-none bg-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg text-center overflow-hidden">
                                            <img
                                                src={project.imageSrc}
                                                alt={project.imageAlt}
                                                className="w-full h-full object-cover group-hover:opacity-75"
                                            />
                                        </div>
                                        <div className="p-4 lg:flex lg:flex-col lg:justify-between">
                                            <div>
                                                <h3 className="text-2xl font-semibold text-gray-900">{project.name}</h3>
                                                <p className="text-gray-700 mt-2">{project.desc}</p>
                                            </div>
                                            <div className="mt-4 lg:mt-0">
                                                <p className="text-gray-900 font-medium">Technologies Used:</p>
                                                <div className="flex flex-wrap mt-2">
                                                    {project.tech.map((type, index) => (
                                                        <span className="text-sm bg-red-300 text-white px-3 py-1 mr-2 mb-2 rounded-md" key={index}>{type}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="mt-4 flex justify-center lg:justify-start">
                                                <a href={project.gHref} className="inline-block text-sm font-medium py-2 px-4 mr-2 bg-pink-900 text-white rounded-md hover:bg-indigo-200">
                                                    Git Link
                                                </a>
                                                <a href={project.dHref} className="inline-block text-sm font-medium py-2 px-4 bg-pink-900 text-white rounded-md hover:bg-indigo-200">
                                                    Live Link
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
