function Navbar() {
  return (
  <nav className="fixed top-0 left-0 z-50 w-full py-6 bg-zinc-900">
      <div className="mx-auto flex items-center justify-between px-8">
        
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white">
          (◠﹏◠)
        </a>

        <div className="flex gap-8 text-sm font-medium text-white">
          <a
            href="#about"
            className="transition-colors hover:text-zinc-900"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-zinc-900"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-zinc-900"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-zinc-900"
          >
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar