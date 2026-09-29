import { React, Figma, Github, TailwindCss, Photoshop, Javascript, 
Html5, Css3, Nodejs, Typescript, Illustrator, AfterEffects, OpenaiChatgpt, 
Cursor, ClaudeCode, GeminiGoogle, Firebase, Firestore
} from '@thesvg/react'

import SkillCard from './SkillCard'

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white px-8 py-10 text-zinc-950"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold tracking-tight">
          🎓 My Skills
        </h2>

        <p className="mt-4 max-w-xl text-zinc-500">
          Languages, technologies and software I am proficient in.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-4">

          <SkillCard icon={Javascript} />
          <SkillCard icon={Typescript} />
          <SkillCard icon={Nodejs} />
          <SkillCard icon={Html5} />
          <SkillCard icon={Css3} />
          <SkillCard icon={React} />
          <SkillCard icon={TailwindCss} />
          <SkillCard icon={Firebase} />
          <SkillCard icon={Firestore} />
          <SkillCard icon={Github} />
          <SkillCard icon={Figma} />
          <SkillCard icon={Photoshop} />
          <SkillCard icon={Illustrator} />
          <SkillCard icon={AfterEffects} />
        </div>
      </div>
    </section>
  )
}

export default Skills