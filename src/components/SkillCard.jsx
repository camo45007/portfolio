function SkillCard({ icon: Icon}) {
  return (
    <div className="flex h-40 flex-col items-center justify-center rounded-2xl border border-zinc-200">
      <Icon className="h-12 w-12" />
    </div>
  )
}

export default SkillCard