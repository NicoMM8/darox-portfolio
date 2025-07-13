export default function BlueShape({ className = "" }) {
  return (
    <div className={`absolute bottom-0 left-0 w-[40vw] h-[20vw] pointer-events-none z-0 ${className}`}>
      <svg
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 A80,80 0 0 1 80,0 H800 V400 H0 Z"
          fill="url(#grad)"
        />
      </svg>
    </div>
  )
}
