/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


export default function Navbar({currentPage, handlePageChange}) {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center md:items-stretch ">
                                <div className="hidden md:block sm:ml-6">
                                    <div className="flex space-x-4">
                                    <a
                                    href='#projects'
                                    onClick= {() => handlePageChange('Project')}
                                    className={(currentPage === 'Project'
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white','block px-3 py-2 rounded-md text-base font-medium')
                                    }
                                >
                                    Projects
                                </a>
                                <a
                                    href='#about'
                                    onClick= {() => handlePageChange('About')}
                                    className={(currentPage === 'About'
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white','block px-3 py-2 rounded-md text-base font-medium')
                                    }
                                >
                                    About
                                </a>
                                <a
                                    href='#contact'
                                    onClick= {() => handlePageChange('Contact')}
                                    className={(currentPage === 'Contact'
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white','block px-3 py-2 rounded-md text-base font-medium')
                                    }
                                >
                                    Contact
                                </a>
                                <a
                                    href='#skills'
                                    onClick= {() => handlePageChange('Skills')}
                                    className={(currentPage === 'Skills'
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white','block px-3 py-2 rounded-md text-base font-medium')
                                    }
                                >
                                    Skills
                                </a>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                                <Menu as="div" className="ml-3 relative">
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                                    href='#projects'
                                    onClick= {() => handlePageChange('Project')}
                                    className={(currentPage === 'Project'
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white','block px-3 py-2 rounded-md text-base font-medium')
                                    }
                                    aria-current='true'
                                >
                                    Projects
                                </a>
                                <a
                                    href='#about'
                                    onClick= {() => handlePageChange('About')}
                                    className={(currentPage === 'About'
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white','block px-3 py-2 rounded-md text-base font-medium')
                                    }
                                >
                                    About
                                </a>
                                <a
                                    href='#contact'
                                    onClick= {() => handlePageChange('Contact')}
                                    className={(currentPage === 'Contact'
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white','block px-3 py-2 rounded-md text-base font-medium')
                                    }
                                >
                                    Contact
                                </a>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
