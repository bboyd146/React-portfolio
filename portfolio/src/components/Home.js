/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useRef, Fragment } from "react";
import { Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import me from '../images/me.jpeg'
import resume from '../images/2U.pdf'
import Typed from 'typed.js'


export default function Home({ currentPage, handlePageChange }) {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Front-end Developer", "Back-end Developer", "Passionate learner", "Programming Teaching Assistant"],
            startDelay: 100,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
            showCursor: false
        });


        return () => {
            typed.destroy();
        };
    }, );


    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <Popover>
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close main menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Bradley Boyd</span>{' '}
                                <span ref={el}className="block text-yellow-600 :inline"></span>
                            </h1>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href={resume}
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-900 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                    >
                                        Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src={me}
                    alt="self portrait"
                />
            </div>
        </div>
    )
}
