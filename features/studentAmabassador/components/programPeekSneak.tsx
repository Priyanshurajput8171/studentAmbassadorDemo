"use client";
import {Rocket} from "lucide-react";
import {
  section,
  glass,
  STEP_GRID,
  STEP_CARD_HEIGHT,
} from "../../constants";

const sneakPeek = [
  {
    weeks: "Weeks 1-6",
    title: "Build Your Foundation",
    points: [
      "Join the national cohort and understand the program",
      "Map your campus community and recruit a core team",
      "Set up communication channels and plan your first activity",
    ],
    output: "Campus team, community channels, and first event plan",
  },
  {
    weeks: "Weeks 7-12",
    title: "Activate Your Campus",
    points: [
      "Promote and host workshops, technical talks, or meetups",
      "Introduce students to open source and practical contribution workflows",
      "Collect feedback and establish a regular activity calendar",
    ],
    output: "First campus events, student contributions, and monthly activity plan",
  },
  {
    weeks: "Weeks 13-20",
    title: "Grow Your Impact",
    points: [
      "Expand outreach through clubs, departments, and faculty",
      "Collaborate with ambassadors from other campuses",
      "Organize a larger initiative such as a hackathon, bootcamp, or project sprint",
    ],
    output: "Cross-campus collaboration, wider participation, and completed community projects",
  },
  {
    weeks: "Weeks 21-24",
    title: "Showcase & Get Recognized",
    points: [
      "Compile event data, contributions, testimonials, and project highlights",
      "Create and practice your campus impact presentation",
      "Present your journey to the national cohort and plan what comes next",
    ],
    output: "Impact report, final showcase, program rewards, and recognition",
  },
];

export default function ProgramSneakPeek() {
  return (
    <section className={`${section} flex flex-col`}>
      <div className="mx-auto w-full flex flex-col items-center gap-6 lg:gap-8">
        <div className="flex flex-col items-center">
          <h2 className="mt-1 text-center text-2xl sm:text-3xl font-bold text-white sm:tracking-tight lg:text-4xl">
            Program Sneak Peek
          </h2>
        </div>

        <div className={`relative ${STEP_GRID}`}>


          {sneakPeek.map((card, idx) => (
            <div
              key={idx}
              className={`${glass} ${STEP_CARD_HEIGHT} relative flex flex-col items-start justify-start gap-2 p-5 py-6 text-left sm:items-center sm:p-4 sm:py-5 sm:text-center`}
            >
              <div className="mb-2 flex w-full items-center justify-between">
                <span className="font-semibold uppercase tracking-wide text-white text-[14px]">
                  {card.weeks}
                </span>
                <span className="rounded-full bg-[#83B5E5] border border-[#0ea1e4]/40 p-1.5 sm:p-1 text-[#0050FF]">
                   <Rocket className="h-5 w-5" />
                </span>
              </div>

              <h3 className="mb-2 text-[14px] font-semibold text-white sm:text-base" style={{fontSize : "14px" }}>
                {card.title}
              </h3>

              <ul className="mb-3 flex flex-1 flex-col justify-center gap-1.5 text-sm leading-relaxed text-gray-300 list-disc pl-4 sm:gap-1 sm:text-xs">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mt-auto w-full">
                <span className="text-[14px] font-bold uppercase tracking-wider text-white sm:text-[12px]">
                  Output:
                </span>
                <p className="mt-1 text-sm leading-relaxed text-gray-300 sm:text-xs">
                  {card.output}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-8 w-full rounded-xl bg-[#0050FF] px-6 py-3.5 font-bold text-white transition-colors duration-300 hover:bg-[#0040CC] md:w-auto">
          Start my Application
        </button>
      </div>
    </section>
  );
}