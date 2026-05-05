/* Decorative soap bubble SVG background — pure vector, infinitely sharp */
export default function SoapBubbles() {
  return (
    <svg
      className="bubbleBg"
      viewBox="0 0 1440 860"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* ── Bubble fill: barely-there translucent sphere ── */}
        <radialGradient id="bf" cx="35%" cy="30%" r="70%">
          <stop offset="0%"   stopColor="#E0F2FE" stopOpacity="0.22" />
          <stop offset="55%"  stopColor="#BAE6FD" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.03" />
        </radialGradient>

        {/* ── Bubble stroke: iridescent blue-cyan-violet ring ── */}
        <linearGradient id="bs-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#93C5FD" stopOpacity="0.75" />
          <stop offset="35%"  stopColor="#67E8F9" stopOpacity="0.65" />
          <stop offset="65%"  stopColor="#A5B4FC" stopOpacity="0.70" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="bs-b" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#BAE6FD" stopOpacity="0.70" />
          <stop offset="50%"  stopColor="#C4B5FD" stopOpacity="0.60" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.50" />
        </linearGradient>
        <linearGradient id="bs-c" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%"   stopColor="#A5F3FC" stopOpacity="0.65" />
          <stop offset="50%"  stopColor="#93C5FD" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#C084FC" stopOpacity="0.45" />
        </linearGradient>

        {/* ── Bottom-rim shadow gradient (inside bubble) ── */}
        <radialGradient id="brim" cx="50%" cy="88%" r="50%">
          <stop offset="0%"   stopColor="#38BDF8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.00" />
        </radialGradient>

        {/* ── Clip to viewport ── */}
        <clipPath id="bg-clip">
          <rect width="1440" height="860" />
        </clipPath>
      </defs>

      <g clipPath="url(#bg-clip)">

        {/* ══════════════════════════════════════════
            BUBBLE A — large, upper-right (r = 130)
        ══════════════════════════════════════════ */}
        <g className="bubble bubble--a" transform="translate(1240, 110)">
          <circle r="130" fill="url(#bf)" stroke="url(#bs-a)" strokeWidth="1.6" />
          {/* main highlight */}
          <ellipse cx="-48" cy="-52" rx="52" ry="28"
            fill="white" fillOpacity="0.70"
            transform="rotate(-38 -48 -52)" />
          {/* secondary highlight */}
          <circle cx="42" cy="-82" r="14" fill="white" fillOpacity="0.42" />
          {/* micro glint */}
          <circle cx="-68" cy="-18" r="5"  fill="white" fillOpacity="0.55" />
          {/* bottom rim */}
          <ellipse cx="0" cy="100" rx="70" ry="18" fill="url(#brim)" />
        </g>

        {/* ══════════════════════════════════════════
            BUBBLE B — large, lower-left (r = 110)
        ══════════════════════════════════════════ */}
        <g className="bubble bubble--b" transform="translate(155, 710)">
          <circle r="110" fill="url(#bf)" stroke="url(#bs-b)" strokeWidth="1.5" />
          <ellipse cx="-40" cy="-44" rx="44" ry="24"
            fill="white" fillOpacity="0.68"
            transform="rotate(-42 -40 -44)" />
          <circle cx="36" cy="-70" r="12" fill="white" fillOpacity="0.40" />
          <circle cx="-58" cy="-15" r="4"  fill="white" fillOpacity="0.50" />
          <ellipse cx="0" cy="84"  rx="58" ry="15" fill="url(#brim)" />
        </g>

        {/* ══════════════════════════════════════════
            BUBBLE C — medium, upper-left (r = 72)
        ══════════════════════════════════════════ */}
        <g className="bubble bubble--c" transform="translate(62, 180)">
          <circle r="72" fill="url(#bf)" stroke="url(#bs-c)" strokeWidth="1.4" />
          <ellipse cx="-26" cy="-29" rx="30" ry="16"
            fill="white" fillOpacity="0.72"
            transform="rotate(-36 -26 -29)" />
          <circle cx="24" cy="-46" r="8"  fill="white" fillOpacity="0.40" />
          <circle cx="-40" cy="-10" r="3" fill="white" fillOpacity="0.52" />
          <ellipse cx="0" cy="55"  rx="38" ry="10" fill="url(#brim)" />
        </g>

        {/* ══════════════════════════════════════════
            BUBBLE D — medium-large, right-mid (r = 88)
        ══════════════════════════════════════════ */}
        <g className="bubble bubble--d" transform="translate(1390, 440)">
          <circle r="88" fill="url(#bf)" stroke="url(#bs-a)" strokeWidth="1.5" />
          <ellipse cx="-32" cy="-35" rx="36" ry="19"
            fill="white" fillOpacity="0.68"
            transform="rotate(-40 -32 -35)" />
          <circle cx="30" cy="-56" r="10" fill="white" fillOpacity="0.40" />
          <circle cx="-48" cy="-12" r="4" fill="white" fillOpacity="0.48" />
          <ellipse cx="0" cy="67"  rx="46" ry="12" fill="url(#brim)" />
        </g>

        {/* ══════════════════════════════════════════
            BUBBLE E — small, top-center-right (r = 48)
        ══════════════════════════════════════════ */}
        <g className="bubble bubble--e" transform="translate(920, 55)">
          <circle r="48" fill="url(#bf)" stroke="url(#bs-b)" strokeWidth="1.3" />
          <ellipse cx="-17" cy="-19" rx="20" ry="11"
            fill="white" fillOpacity="0.74"
            transform="rotate(-38 -17 -19)" />
          <circle cx="16" cy="-31" r="6"  fill="white" fillOpacity="0.42" />
          <circle cx="-26" cy="-6"  r="2" fill="white" fillOpacity="0.50" />
          <ellipse cx="0" cy="36"   rx="26" ry="7"  fill="url(#brim)" />
        </g>

        {/* ══════════════════════════════════════════
            BUBBLE F — small, lower-right (r = 55)
        ══════════════════════════════════════════ */}
        <g className="bubble bubble--f" transform="translate(1310, 790)">
          <circle r="55" fill="url(#bf)" stroke="url(#bs-c)" strokeWidth="1.3" />
          <ellipse cx="-20" cy="-22" rx="23" ry="12"
            fill="white" fillOpacity="0.70"
            transform="rotate(-40 -20 -22)" />
          <circle cx="18" cy="-35" r="7"  fill="white" fillOpacity="0.40" />
          <circle cx="-30" cy="-7"  r="2.5" fill="white" fillOpacity="0.50" />
          <ellipse cx="0" cy="42"   rx="30" ry="8"  fill="url(#brim)" />
        </g>

        {/* ══════════════════════════════════════════
            BUBBLE G — tiny accent, upper-left area (r = 32)
        ══════════════════════════════════════════ */}
        <g className="bubble bubble--g" transform="translate(280, 40)">
          <circle r="32" fill="url(#bf)" stroke="url(#bs-a)" strokeWidth="1.2" />
          <ellipse cx="-11" cy="-13" rx="14" ry="7"
            fill="white" fillOpacity="0.76"
            transform="rotate(-35 -11 -13)" />
          <circle cx="10" cy="-21" r="4"  fill="white" fillOpacity="0.44" />
          <ellipse cx="0" cy="24"   rx="17" ry="5"  fill="url(#brim)" />
        </g>

        {/* ══════════════════════════════════════════
            BUBBLE H — tiny accent, mid-left (r = 28)
        ══════════════════════════════════════════ */}
        <g className="bubble bubble--h" transform="translate(22, 480)">
          <circle r="28" fill="url(#bf)" stroke="url(#bs-b)" strokeWidth="1.1" />
          <ellipse cx="-10" cy="-11" rx="12" ry="6"
            fill="white" fillOpacity="0.72"
            transform="rotate(-36 -10 -11)" />
          <circle cx="9" cy="-18"  r="3.5" fill="white" fillOpacity="0.42" />
          <ellipse cx="0" cy="21"   rx="15" ry="4"  fill="url(#brim)" />
        </g>

        {/* ══════════════════════════════════════════
            BUBBLE I — tiny, bottom-center (r = 36)
        ══════════════════════════════════════════ */}
        <g className="bubble bubble--i" transform="translate(680, 830)">
          <circle r="36" fill="url(#bf)" stroke="url(#bs-c)" strokeWidth="1.2" />
          <ellipse cx="-13" cy="-14" rx="15" ry="8"
            fill="white" fillOpacity="0.70"
            transform="rotate(-38 -13 -14)" />
          <circle cx="11" cy="-23" r="4.5" fill="white" fillOpacity="0.40" />
          <ellipse cx="0" cy="27"   rx="19" ry="5"  fill="url(#brim)" />
        </g>

      </g>
    </svg>
  );
}
