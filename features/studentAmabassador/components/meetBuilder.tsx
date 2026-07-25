"use client";
import React from "react";
import { Rocket, Users } from "lucide-react";
import {
  section,
} from "../../constants";

const blueGlowCard =
  "rounded-2xl bg-white border border-[#0ea1e4]/30 hover:border-[#0ea1e4]/60 transition-all duration-300";

const columnHeightPatterns = [
  ["h-56", "h-36"],
  ["h-32", "h-52"],
  ["h-64", "h-28"],
  ["h-48", "h-32"],
];

const columnLabels = [
  ["Box 1", "Box 2", "Box 3", "Box 4"],
  ["Box 5", "Box 6", "Box 7", "Box 8"],
  ["Box 9", "Box 10", "Box 11", "Box 12"],
  ["Box 13", "Box 14", "Box 15", "Box 16"],
];

const columns = columnLabels.map((labels, colIdx) =>
  labels.map((label, i) => ({
    label,
    height: columnHeightPatterns[colIdx][i % 2],
  }))
);

const columnConfig = [
  { duration: 22, delay: 0 },
  { duration: 28, delay: -4 },
  { duration: 20, delay: -9 },
  { duration: 26, delay: -2 },
];

interface BuilderBoxProps {
  label: string;
  height: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface BuilderColumnProps {
  items: { label: string; height: string }[];
  duration: number;
  delay: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function BuilderBox({ label, height,}: BuilderBoxProps) {
  return (
    <div
      className={`${blueGlowCard} ${height} flex w-full flex-shrink-0 flex-col items-center justify-center gap-1.5 p-2 text-center hover:scale-102 sm:gap-2 sm:p-4`}
    >
      <span className="text-xs font-bold text-white sm:text-base">{label}</span>
    </div>
  );
}

function BuilderColumn({ items, duration, delay, icon }: BuilderColumnProps) {
  const looped = [...items, ...items];

  return (
    <div className="relative h-[380px] w-full overflow-hidden">

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-black to-transparent sm:h-20" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-black to-transparent sm:h-20" />

      <div
        className="flex flex-col gap-2 animate-builders-scroll-up sm:gap-4"
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      >
        {looped.map((item, idx) => (
          <BuilderBox
            key={`${item.label}-${idx}`}
            label={item.label}
            height={item.height}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
}

export default function MeetTheBuilders() {
  return (
    <section className={`${section} flex flex-col py-12 lg:py-12`}>
      <style>{`
        @keyframes builders-scroll-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .animate-builders-scroll-up {
          animation-name: builders-scroll-up;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-builders-scroll-up {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full flex flex-col items-center gap-6 lg:gap-8">
        <div className="flex flex-col items-center">
          <h2 className="mt-1 text-center text-2xl sm:text-3xl font-bold text-white sm:tracking-tight lg:text-4xl">
            Meet the Builders
          </h2>
        </div>

        <div className="mt-5 grid w-full grid-cols-2 grid-rows-1 gap-2 sm:gap-4 lg:grid-cols-4">
          {columns.map((items, idx) => (
            <div key={idx} className={idx >= 2 ? "hidden lg:block" : ""}>
              <BuilderColumn
                items={items}
                duration={columnConfig[idx].duration}
                delay={columnConfig[idx].delay}
                icon={idx % 2 === 0 ? Rocket : Users}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
