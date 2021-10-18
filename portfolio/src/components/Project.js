
import { projects } from '../projects';



export default function Project() {
    return (
        <>
            <h1 className=" border-t-2 border-gray-300 text-4xl tracking-tight bg-white font-extrabold flex-1 flex items-center justify-center pt-10 text-pink-700 sm:text-5xl md:text-6xl">Work</h1>
            <div className="bg-white ">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Projects</h2>

                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {projects.map((project) => (
                            <>
                                <a key={project.id} href={project.dHref} className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src={project.imageSrc}
                                            alt={project.imageAlt}
                                            className="w-full h-full object-center object-cover group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{project.name}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{project.price}</p>
                                <div className="pt-10 sm:mt-0 sm:ml-3">
                                    <a href={project.gHref} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-xs font-medium rounded-md text-white bg-pink-900 hover:bg-indigo-200 md:py-4 md:text-xs md:px-10">
                                        <button>Git Link</button></a>
                                </div>
                                </a>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
