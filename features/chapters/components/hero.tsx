"use client";
import { Rocket, Search, ArrowUpRight } from "lucide-react";
import StudentIllustration from "./StudentIllustration";
import { CYAN_HIGHLIGHT, SECTION_HEADING } from "../../constants";


const random = (seed: number) => (Math.sin(seed * 9999) + 1) / 2;
const stars = (count: number, size: number) => Array.from({ length: count }, (_, i) => `${random(i + size) * 100}vw ${random(i + size * 2) * 100}vh 0 rgba(255,255,255,${(.3 + random(i + size * 3) * .6).toFixed(2)})`).join(",");
const small = stars(160, 1), big = stars(50, 2);
const meteors = Array.from({ length: 6 }, (_, i) => ({ top: `${random(i + 4) * 60}%`, left: `${random(i + 10) * 80}%`, delay: `${(i * 1.3 + random(i + 16) * 2).toFixed(2)}s`, dur: `${(3.5 + random(i + 22) * 2.5).toFixed(2)}s` }));

function SpaceBackground() {

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 80% 20%,rgba(14,161,228,.12),transparent 60%),radial-gradient(ellipse 50% 40% at 10% 80%,rgba(14,161,228,.08),transparent 60%)" }} />
      <div className="star-layer" style={{ boxShadow: small, width: 1, height: 1 }} />
      <div className="star-layer star-twinkle" style={{ boxShadow: big, width: 2, height: 2 }} />
      {meteors.map((m, i) => (
        <span key={i} className="meteor" style={{ top: m.top, left: m.left, animationDelay: m.delay, animationDuration: m.dur }} />
      ))}
    </div>
  );
}


// ---------------------------------------------------------------------------
// Main Hero
// ---------------------------------------------------------------------------

export default function Hero() {
  return (
    <section className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 py-16 sm:px-6 lg:px-12 lg:py-20`}>
      <SpaceBackground />

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:gap-12 lg:min-h-[85vh] lg:grid-cols-2 lg:gap-16">
        {/* ---- Left column ---- */}
        <div className="flex flex-col gap-6 sm:gap-8 items-center text-center md:items-start md:text-left">
          <h2 className={`${SECTION_HEADING} mb-4`}>
          Start the Engineering{" "}
          <span className={CYAN_HIGHLIGHT}>Community in Your Campus</span>
        </h2>

          <p className={`max-w-lg mx-auto md:mx-0`}>
            Become a communityX Chapter Lead and build a thriving engineering community at your
            college. Organise workshops, hackathons, and technical events while gaining leadership
            experience.
          </p>

          <div className={`text-xs font-bold uppercase tracking-wider sm:text-sm text-center md:text-left ${CYAN_HIGHLIGHT}`}>
            Open to students from all engineering branches
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="primary-btn group relative rounded-lg p-[2px] transition-transform duration-300 hover:scale-[1.03] active:scale-95">
              <span className="relative flex items-center gap-2.5 overflow-hidden rounded-[7px] bg-[#0ea1e4] px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(14,161,228,0.35)] transition-shadow duration-300 group-hover:shadow-[0_0_40px_rgba(14,161,228,0.6)] sm:px-8">
                <span className="water-fill absolute inset-x-0 bottom-0 z-0 h-[220%] translate-y-[72%] transition-transform duration-700 ease-out group-hover:translate-y-[36%]">
                  <svg
                    className="wave-svg"
                    style={{ animation: "wave-drift 7s linear infinite" }}
                    viewBox="0 0 800 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,30 C50,10 150,10 200,30 C250,50 350,50 400,30 C450,10 550,10 600,30 C650,50 750,50 800,30 L800,100 L0,100 Z"
                      fill="rgba(255,255,255,0.16)"
                    />
                  </svg>
                  <svg
                    className="wave-svg"
                    style={{ animation: "wave-drift 4.2s linear infinite reverse" }}
                    viewBox="0 0 800 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,45 C50,65 150,65 200,45 C250,25 350,25 400,45 C450,65 550,65 600,45 C650,25 750,25 800,45 L800,100 L0,100 Z"
                      fill="rgba(255,255,255,0.28)"
                    />
                  </svg>
                </span>
                <span className="shine-sweep" />
                <Rocket className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="relative z-10 text-black text-sm sm:text-base">
                  Apply to Become a Chapter Lead
                </span>
              </span>
            </button>

            <button className="group relative flex items-center gap-2 overflow-hidden rounded-lg border border-white/25 bg-white/[0.03] px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#0ea1e4] hover:text-[#0ea1e4] active:scale-95 sm:px-8">
              <Search className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm sm:text-base">Check Your Campus</span>
              <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </button>
          </div>

          {/* Stats - UPDATED SECTION BELOW */}
          <div className="mt-8 grid w-full grid-cols-2 justify-items-center gap-x-3 gap-y-7 border-t border-white/10 pt-8 md:grid-cols-4 md:gap-x-8 md:gap-y-0">
            {[
              ["77+", "Engineering Colleges"],
              ["30K+", "Student Members"],
              ["362+", "Workshops & Hackathons"],
              ["50K+", "Students Reached"],
            ].map(([v, l]) => (
              <div key={l} className="flex min-w-0 flex-col items-center gap-2 text-center">
                <span className={`text-4xl font-extrabold leading-none sm:text-[2.55rem] ${CYAN_HIGHLIGHT}`}>{v}</span>
                <span className="whitespace-nowrap font-mono text-xs tracking-wide text-[#b7a99a]">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Right column: Student illustration ---- */}
        <div className="relative flex h-[400px] w-full items-center justify-center sm:h-[480px] lg:h-[600px]">
          <StudentIllustration />
        </div>
      </div>

      {/* Global keyframe styles – keep them here to avoid flickering */}
      <style jsx>{`
        .star-layer {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          background: transparent;
        }
        .star-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .meteor {
          position: absolute;
          width: 120px;
          height: 2px;
          background: linear-gradient(90deg, #fff, rgba(14,161,228,0.6), transparent);
          border-radius: 999px;
          transform: rotate(215deg);
          opacity: 0;
          animation: fall linear infinite;
        }
        @keyframes fall {
          0% { transform: translate(0,0) rotate(215deg); opacity: 0; }
          8% { opacity: 1; }
          25% { transform: translate(-420px,300px) rotate(215deg); opacity: 0; }
          100% { transform: translate(-420px,300px) rotate(215deg); opacity: 0; }
        }
        .primary-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: conic-gradient(from var(--angle, 0deg), #0ea1e4, #fff, #0ea1e4);
          animation: spin-border 3s linear infinite;
          z-index: 0;
        }
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes spin-border {
          to { --angle: 360deg; }
        }
        .shine-sweep {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 7px;
          z-index: 10;
        }
        .shine-sweep::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -50%;
          width: 33%;
          background: rgba(255,255,255,0.25);
          transform: skewX(-20deg);
          animation: shine 2.6s ease-in-out infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-40%) skewX(-20deg); opacity: 0; }
          10% { opacity: 0.6; }
          40% { transform: translateX(220%) skewX(-20deg); opacity: 0; }
          100% { transform: translateX(220%) skewX(-20deg); opacity: 0; }
        }
        .water-fill {
          animation: water-bob 3.2s ease-in-out infinite;
        }
        @keyframes water-bob {
          0%, 100% { margin-bottom: 0; }
          50% { margin-bottom: 3px; }
        }
        .wave-svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100%;
        }
        @keyframes wave-drift {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .wave-letter {
          display: inline-block;
          animation: letter-wave 1.8s ease-in-out infinite;
        }
        @keyframes letter-wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </section>
  );
}
