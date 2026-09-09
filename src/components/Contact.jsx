import { Github, Linkedin, MicrosoftOutlook, } from '@thesvg/react'

function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-900 px-8 py-20 white"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          💬 Reach out!
        </h2>

        <p className="mt-4 max-w-xl text-zinc-500">
          Feel free to send an email or find me on Linkedin, keen to work and open to opportunities 😊.
        </p>

        <div className="mt-10 flex flex-wrap gap-8 ">
          <a
            href="https://github.com/camo45007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-zinc-400"
          >
            <Github className="h-5 w-5 text-white [&_path]:fill-white" />
            camo45007
          </a>

          <a
            href="mailto:camerongleed@hotmail.com"
            className="flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-zinc-400"
          >
            <MicrosoftOutlook className="h-5 w-5" />
            camerongleed@hotmail.com
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-zinc-400"
          >
            <Linkedin className="h-5 w-5" />
            Cameron Gleed
          </a>
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-6 text-sm text-white">
          © 2026 Cameron Gleed
        </div>
      </div>
    </section>
  )
}

export default Contact