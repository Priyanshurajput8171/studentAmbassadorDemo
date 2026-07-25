import React from "react";
import { Wrench, Trophy, Mic2, Users, TrendingUp, Flag } from "lucide-react";

// ---- design tokens (mirrors constants.js) ----
const SECTION_BACKGROUND = "bg-[#050505]";
const SECTION_PADDING = "px-4 py-20 sm:px-6 lg:py-28";
const SECTION_EYEBROW =
  "inline-flex items-center gap-2 rounded-full border border-[rgba(14,161,228,0.2)] bg-[rgba(14,161,228,0.06)] px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#0ea1e4] backdrop-blur-sm";
const SECTION_HEADING =
  "text-[clamp(1.6rem,4vw,2.5rem)] font-extrabold leading-tight tracking-tight text-white";
const SECTION_DESCRIPTION =
  "text-base leading-relaxed text-gray-400/90 sm:text-lg";
const GLASS_CARD =
  "rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm";
const CYAN_HIGHLIGHT = "text-[#0ea1e4]";

const RESPONSIBILITIES = [
  {
    n: "01",
    text: "Organise at least 1 technical event per month — workshops, hackathons, or seminars",
  },
  {
    n: "02",
    text: "Recruit and manage a core chapter team of 5–10 members from your campus",
  },
  {
    n: "03",
    text: "Share communityX content and updates with your college community regularly",
  },
  {
    n: "04",
    text: "Represent communityX at your college fest and inter-college tech events",
  },
  {
    n: "05",
    text: "Maintain a monthly chapter log and report activities to the communityX team",
  },
];

const IMPACT_GRID = [
  { icon: Wrench, label: "Workshop", pts: 100, bonus: false },
  { icon: Trophy, label: "Hackathon", pts: 200, bonus: false },
  { icon: Mic2, label: "Seminar / Webinar", pts: 50, bonus: false },
  { icon: Users, label: "Speaker Session", pts: 80, bonus: false },
  { icon: TrendingUp, label: "100+ Student Reach", pts: 50, bonus: true },
  { icon: Flag, label: "Fest Representation", pts: 150, bonus: false },
];

function ImpactCard({ icon: Icon, label, pts, bonus }) {
  return (
    <div
      className={`${GLASS_CARD} group relative flex flex-col justify-between gap-6 p-5 transition-colors duration-300 hover:border-[rgba(14,161,228,0.35)] hover:bg-white/[0.04]`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(14,161,228,0.25)] bg-[rgba(14,161,228,0.08)]">
          <Icon className={`h-5 w-5 ${CYAN_HIGHLIGHT}`} strokeWidth={2} />
        </div>
        {bonus && (
          <span className="rounded-full border border-[rgba(14,161,228,0.3)] bg-[rgba(14,161,228,0.08)] px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#0ea1e4]">
            Bonus
          </span>
        )}
      </div>

      <div>
        <p className="text-sm font-semibold text-white sm:text-[0.95rem]">
          {label}
        </p>
        <p className="mt-1 flex items-baseline gap-1">
          <span className={`text-2xl font-extrabold ${CYAN_HIGHLIGHT}`}>
            +{pts}
          </span>
          <span className="text-xs font-medium text-gray-500">pts</span>
        </p>
      </div>
    </div>
  );
}

export default function ChapterLeadSection() {
  return (
    <section className={`${SECTION_BACKGROUND} ${SECTION_PADDING}`}>
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="flex flex-col items-center text-center">
          <span className={SECTION_EYEBROW}>Chapter Lead Responsibilities</span>
          <h2 className={`${SECTION_HEADING} mt-5`}>What Chapter Leads Do</h2>
          <p className={`${SECTION_DESCRIPTION} mt-4 max-w-xl`}>
            Every action earns points. Points unlock rewards. The more you do,
            the more you grow.
          </p>
        </div>

        {/* content: left / right split */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left: core responsibilities */}
          <div className="flex h-full flex-col">
            <div className="mb-8 flex items-center gap-2 justify-center lg:justify-start">
              <span className={`h-1.5 w-1.5 rounded-full bg-[#0ea1e4]`} />
              <h3 className="text-lg font-bold text-white">
                Your Core Responsibilities
              </h3>
            </div>

            <ol className="flex flex-1 flex-col justify-center space-y-7">
              {RESPONSIBILITIES.map((item) => (
                <li key={item.n} className="flex items-start gap-4">
                  <span
                    className={`mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[rgba(14,161,228,0.3)] bg-[rgba(14,161,228,0.08)] text-xs font-bold ${CYAN_HIGHLIGHT}`}
                  >
                    {item.n.replace(/^0/, "")}
                  </span>
                  <p className="text-[0.95rem] leading-relaxed text-gray-300">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* right: impact grid */}
          <div>
            <div className="mb-8 flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full bg-[#0ea1e4]`} />
              <h3 className="text-lg font-bold text-white">
                communityX Impact System
              </h3>
            </div>

            <div className={`${GLASS_CARD} p-5`}>
              <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#0ea1e4]">
                Activity → Points Earned
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {IMPACT_GRID.map((item) => (
                  <ImpactCard key={item.label} {...item} />
                ))}
              </div>

              <p className="mt-5 border-t border-white/[0.06] pt-4 text-xs leading-relaxed text-gray-500">
                Points accumulate monthly. Milestones unlock reward tiers below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
