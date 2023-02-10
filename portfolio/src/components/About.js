import Home from "./Home";



export default function About() {
    return (
        <>
        <Home />
            <h1 className="border-t-2 border-gray-300 text-4xl tracking-tight bg-white font-extrabold flex-1 flex items-center justify-center pt-10 text-pink-700 sm:text-5xl md:text-6xl">About Me</h1>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Me</h2>
                    <p className="mt-3 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 ">
                        Full Stack Software Developer currently working as a TA (Teaching Assistant) at Rice University's Online Coding Boot Camp. With the experience I've gained through working in the Software Development industry - I've gained skills necessary to build, design, and implement new technologies for a user-friendly full stack application.
                        I'm looking forward to building more projects to hone my skills and become a better developer as time progresses!</p>
                </div>
            </div>
        </>
    )
}
