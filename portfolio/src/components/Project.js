
import { projects } from '../projects';



export default function Project() {
    return (
        <>
            <h1 className=" border-t-2 border-gray-300 text-4xl tracking-tight bg-white font-extrabold flex-1 flex items-center justify-center pt-10 text-pink-700 sm:text-5xl md:text-6xl">Work</h1>
            <div className="bg-white ">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Projects</h2>
                    <div className="container">
                        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  gap-10">
                            {projects.map((project) => (
                                <>
                                    <a key={project.id} href={project.dHref} className="group">
                                        <div className="border-b w-full lg:max-w-full lg:flex my-10">
                                            <div className="h-48 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                                                <img
                                                    src={project.imageSrc}
                                                    alt={project.imageAlt}
                                                    className="w-full object-left object-cover group-hover:opacity-75"
                                                />
                                            </div>
                                            <div className=" border-gray-400 lg:border-l-0  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                                <div className="mb-8">
                                                    <div className="text-yellow-900 font-bold text-4xl mb-2">{project.name}</div>
                                                    <p className="text-gray-700 text-base">{project.desc}</p>
                                                </div>
                                                <div className="flex items-center pt-5 flex-row sm:flex-wrap md:flex-wrap">
                                                    <div className="text-sm mb-5">
                                                        <p className="text-gray-900 leading-loose text-lg">Technologies Used:</p>
                                                        <div className="flex md:flex-wrap justify-center xl:justify-end sm:flex-wrap">
                                                            {project.tech.map((type, index) => {
                                                                return <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0"><span className="text-sm bg-red-300 text-white px-5 py-1 font-sm rounded-md m-2" key={index}>{type}</span>
                                                                </div>
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pt-10 md:mt-0 md:ml-3 flex items-center justify-center flex-row sm:items-center sm:justify-center">
                                                    <a href={project.gHref} className="w-10 flex items-center justify-center  border border-transparent text-xs font-sm mx-10 rounded-md text-white bg-pink-900 hover:bg-indigo-200 md:py-4 md:text-xs md:px-10 sm:px-5">
                                                        <button>Git Link</button></a>
                                                    <a href={project.dHref} className="w-10 flex items-center  justify-center  border border-transparent text-xs font-sm rounded-md text-white bg-pink-900 hover:bg-indigo-200 md:py-4 md:text-xs md:px-10">
                                                        <button>Live Link</button></a>
                                                </div>
                                            </div>
                                            {/* <h3 className="mt-4 text-sm text-gray-700">{project.name}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900">{project.price}</p> */}
                                        </div>
                                    </a>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
