export function Atmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#c5d3c4]"
      aria-hidden
    >
      <div className="absolute -top-28 left-1/2 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#eaf0d8] opacity-90 blur-3xl" />
      <div className="absolute top-[18%] -left-16 h-56 w-56 rounded-full bg-[#d7e4c8] blur-3xl" />
      <div className="absolute top-[38%] right-[-4rem] h-72 w-72 rounded-full bg-[#b7cbb8] blur-3xl" />
      <svg
        className="absolute bottom-0 left-1/2 w-[min(920px,160vw)] -translate-x-1/2 opacity-50"
        viewBox="0 0 900 340"
        fill="none"
      >
        <path
          d="M0 220C120 180 180 240 280 210C390 176 430 120 540 140C650 160 700 90 900 120V340H0V220Z"
          fill="#8fa88a"
        />
        <path
          d="M0 250C150 210 220 270 340 240C470 206 520 170 640 190C760 210 800 150 900 170V340H0V250Z"
          fill="#6f8b72"
        />
        <path d="M70 250 95 160 120 250Z" fill="#16352b" />
        <path d="M150 255 185 140 220 255Z" fill="#1b3d31" />
        <path d="M240 258 262 188 284 258Z" fill="#16352b" />
        <path d="M720 248 755 150 790 248Z" fill="#16352b" />
        <path d="M800 252 828 175 856 252Z" fill="#1b3d31" />
        <circle cx="760" cy="78" r="28" fill="#efe3a4" opacity="0.85" />
        <path
          d="M390 232h155v28c0 6-5 11-11 11H401c-6 0-11-5-11-11v-28Z"
          fill="#e7eee4"
        />
        <path d="M408 196h58l18 36H400v-28c0-4 4-8 8-8Z" fill="#c9d6c4" />
        <rect x="416" y="206" width="38" height="16" rx="3" fill="#3f6a58" />
        <circle cx="424" cy="268" r="11" fill="#16352b" />
        <circle cx="512" cy="268" r="11" fill="#16352b" />
      </svg>
      <div className="grain absolute inset-0" />
    </div>
  )
}
