import { useState } from 'react'
import Floater from './Floater'

function Hero() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * -10
        const y = (event.clientY / window.innerHeight - 0.5) * -10

        setMousePosition({ x, y })
    }

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen overflow-hidden bg-white text-zinc-900 flex flex-col items-center justify-center px-8"
        >

            <div
                className="pointer-events-none absolute -inset-2 z-0 hero-grid"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
            />

            <Floater className="left-[25%] top-[50%]" duration="4s">
                <div className="rounded-xl border border-zinc-200 bg-white px-5 py-4">
                    <p className="text-sm font-medium">
                        💻 Programming
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                        Building for the web!
                    </p>
                </div>
            </Floater>

            <Floater className="left-[75%] top-[50%]" duration="6s">
                <div className="rounded-xl border border-zinc-200 bg-white px-5 py-4">
                    <p className="text-sm font-medium">
                        🎨 Design
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                        Passion for UI/UX!
                    </p>
                </div>
            </Floater>

            <Floater className="left-[50%] top-[50%]" duration="10s">
                <div className="rounded-xl border border-zinc-200 bg-white px-5 py-4">
                    <p className="text-sm font-medium">
                        🧑‍💻 Tech
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                        Tech enthusiast!
                    </p>
                </div>
            </Floater>

            <Floater className="left-[10%] top-[50%]" duration="8s">
                <div className="rounded-xl border border-zinc-200 bg-white px-5 py-4">
                    <p className="text-sm font-medium">
                        🏋️‍♂️ Fitness
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                        Love the gym!
                    </p>
                </div>
            </Floater>

            <Floater className="left-[90%] top-[50%]" duration="4s">
                <div className="rounded-xl border border-zinc-200 bg-white px-5 py-4">
                    <p className="text-sm font-medium">
                        🎾 Sports
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                        Anything with a ball!
                    </p>
                </div>
            </Floater>

            <div className="relative z-10 text-center">

                <div className="absolute inset-0 -z-10 scale-150 bg-white/40 blur-2xl" />

                <h1 className="fade-up delay-1 mt-4 text-6xl font-bold tracking-tight md:text-7xl">
                    For the web
                    <br />
                    and beyond... 🚀
                </h1>

                <p className="fade-up delay-2 mt-4 max-w-xl text-lg text-zinc-500">
                    I'm Cameron, a Software Engineering graduate with an interest in
                    frontend development.
                </p>

                <div className="fade-up delay-3 mt-10 flex justify-center gap-4">
                    <a
                        href="#contact"
                        className="rounded-lg border-2 border-zinc-900 px-6 py-3 font-medium text-zinc-900 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-400"
                    >
                        View my work
                    </a>

                    <a
                        href="#cv"
                        className="rounded-lg border-zinc-300 bg-zinc-900 px-6 py-3 font-medium text-white transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-800"
                    >
                        My CV
                    </a>
                </div>

            </div>

            <a
                href="#projects"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            >
                <p className="text-xs text-zinc-400">
                    This way!
                </p>

                <div className="mt-2 animate-bounce text-zinc-400">
                    ↓
                </div>
            </a>

        </section>
    )
}

export default Hero