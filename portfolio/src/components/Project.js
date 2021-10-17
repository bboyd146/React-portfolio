import progress from '../images/progress.png'
import workout from '../images/workout.png'
const projects = [
    {
        id: 1,
        name: 'Progressive Budget',
        href: '#',
        price: '$48',
        imageSrc: {progress},
        imageAlt: 'This project is designed to allow a user to budget their finances by adding or deducting funds. This is a PWA which allows a user to have all functionality of the application on or offline. If the user loses connection for any reason, their data is stored and is retrieved once back online.',
    },
    {
        id: 2,
        name: 'Workout Tracker',
        href: '#',
        price: '$35',
        imageSrc: {workout},
        imageAlt: 'This Full-stack project is designed to allow a user to post and keep track of previous workouts. When the user hits the landing page, they are able to post a new workout and view their progress chart on the dashboard page.',
    },
    {
        id: 3,
        name: 'E-Commerce',
        href: '#',
        price: '$89',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More Projects...
]

export default function Example() {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Projects</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {projects.map((project) => (
                        <a key={project.id} href={project.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={project.imageSrc}
                                    alt={project.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{project.name}</h3>
                            {/* <p className="mt-1 text-lg font-medium text-gray-900">{project.price}</p> */}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
