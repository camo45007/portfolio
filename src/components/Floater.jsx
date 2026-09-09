function Floater({ children, className = "", duration = "7s" }) {
  return (
    <div
      className={`absolute float ${className}`}
      style={{ animationDuration: duration }}
    >
      {children}
    </div>
  )
}

export default Floater