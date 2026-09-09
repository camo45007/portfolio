import { React, TailwindCss, Nodejs, Typescript, Javascript, Firebase, Firestore } from '@thesvg/react'

function Projects() {
    return (
        <section 
        id="projects"
        className="relative min-h-auto bg-zinc-900 px-8 py-10 text-white">
        
            <div className="mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold tracking-tight">
                    🎯 My Projects
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <div className="flex h-full flex-col">
                        <div className="h-80 overflow-hidden rounded-2xl border border-zinc-800">
                            <img
                                src="public\mytimetablethumb.gif"
                                alt="MyTimetable Preview"
                                className="h-full w-full scale-110 object-cover"
                            />
                        </div>

                        <h3 className="text-xl font-semibold mt-4">
                            MyTimetable
                        </h3>

                        <p className="mt-2 text-zinc-400">
                            A rework of the Bournemouth University timetable, built to solve inclusivity and accessibility issues.
                        </p>

                        <div className="mt-4 flex w-fit items-center gap-3 rounded-lg bg-zinc-950 px-3 py-2">
                            <TailwindCss className="h-4 w-4"/>
                            <React className="h-4 w-4" />
                            <Nodejs className="h-4 w-4" />
                            <Typescript className="h-4 w-4" />
                            <Javascript className="h-4 w-4" />
                            <Firebase className="h-4 w-4" />
                            <Firestore className="h-4 w-4" />
                        </div>
                        <div className="mt-auto pt-4">
                            <a
                                href="https://my-timetable-flame.vercel.app/login"
                                target="blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-block text-blue-400 hover:text-blue-300"
                            >
                                View Project
                            </a>
                        </div>

                    </div>

                    <div className="flex h-full flex-col">
                        <div className="h-80 rounded-2xl border border-zinc-800">
                        </div>

                        <h3 className="text-xl font-semibold mt-4">
                            Newhi
                        </h3>

                        <p className="mt-2 text-zinc-400">
                            WORK IN PROGRESS.
                        </p>
                        <div className="mt-auto pt-4">
                            <a
                                href="#"
                                className="mt-auto inline-block text-blue-400 hover:text-blue-300"
                            >
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="flex h-full flex-col">
                        <div className="h-80 rounded-2xl border border-zinc-800">
                        </div>

                        <h3 className="text-xl font-semibold mt-4">
                            Project 3
                        </h3>

                        <p className="mt-2 text-zinc-400">
                            Description of Project 3.
                        </p>

                        <div className="mt-auto pt-4">
                            <a
                                href="#"
                                className="mt-auto inline-block text-blue-400 hover:text-blue-300"
                            >
                                View Project
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects

    