"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Code2, Cog, Sparkles, Zap } from "lucide-react";
import { CYAN_HIGHLIGHT, SECTION_EYEBROW, SECTION_HEADING, SECTION_PADDING } from "../../constants";

const communities = [
  {
    id: "oscode",
    label: "OSCODE",
    title: "Software & Technology",
    description: "Build, code, and ship real products.",
    tags: ["Web Dev", "AI / ML", "Cybersecurity", "Open Source", "Cloud & Backend"],
    icon: Code2,
    accent: '#0ea1e4',
    accentRGB: '14, 161, 228'
  },
  {
    id: "osengiverse",
    label: "OSENGIVERSE",
    title: "Core Engineering",
    description: "Design, build, and engineer the physical world.",
    tags: ["Mechanical", "Civil", "Industrial", "Manufacturing", "Robotics"],
    icon: Cog,
    accent: '#f97316',
    accentRGB: '249, 115, 22'
  },
  {
    id: "osvolt",
    label: "OSVOLT",
    title: "Electrical & Electronics",
    description: "Power, connect, and automate everything.",
    tags: ["Electrical", "EV Technology", "Embedded", "IoT", "Power Systems"],
    icon: Zap,
    accent: '#22c55e',
    accentRGB: '34, 197, 94'
  },
];

export default function BranchCommunities() {
  const [selectedId, setSelectedId] = useState("oscode");
  const [hoveredId, setHoveredId] = useState(null);
  
  // Determine which card is currently active (hover takes priority over selected)
  const activeId = hoveredId || selectedId;

  return (
    <section className={`relative overflow-hidden ${SECTION_PADDING}`}>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(14,161,228,0.09),transparent_66%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className={`${SECTION_EYEBROW} mb-5 text-[0.68rem]`}>
            One ecosystem · three communities
          </div>
          <h2 className={`${SECTION_HEADING} mb-4`}>
            Which Community Fits Your <span className={CYAN_HIGHLIGHT}>Branch</span>?
          </h2>
          <p className={` mx-auto mt-5 max-w-2xl`}>
            communityX runs three parallel chapter programs, each built around a specific engineering discipline. Select yours to see relevant content throughout the page.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {communities.map(({ id, label, title, description, tags, icon: Icon, accent, accentRGB }) => {
            const isActive = activeId === id;
            return (
              <button
                type="button"
                key={id}
                onClick={() => setSelectedId(id)}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-pressed={isActive}
                className="relative min-h-[280px] overflow-hidden rounded-3xl border p-7 text-left transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea1e4] sm:p-8"
                style={{
                  borderColor: isActive ? `${accent}80` : 'rgba(255,255,255,0.11)',
                  backgroundColor: isActive ? `rgba(${accentRGB}, 0.06)` : 'rgba(255,255,255,0.025)',
                  boxShadow: isActive ? `0 0 0 1px rgba(${accentRGB}, 0.08), 0 20px 55px rgba(${accentRGB}, 0.12)` : 'none'
                }}
              >
                {/* Background Glow */}
                <div
                  className={`absolute -right-10 -top-12 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  style={{ backgroundColor: `rgba(${accentRGB}, 0.15)` }}
                />
                
                <div className="relative flex h-full flex-col">
                  <div className="mb-7 flex items-start justify-between">
                    <span 
                      className="font-mono text-[0.68rem] font-bold tracking-[0.16em] transition-colors"
                      style={{ color: isActive ? accent : '#9ca3af' }}
                    >
                      {label}
                    </span>
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300"
                      style={{
                        borderColor: isActive ? `${accent}59` : 'rgba(255,255,255,0.1)',
                        backgroundColor: isActive ? `rgba(${accentRGB}, 0.15)` : 'rgba(255,255,255,0.04)',
                        color: isActive ? accent : '#9ca3af',
                        boxShadow: isActive ? `0 0 22px ${accent}2E` : 'none'
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{description}</p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border px-2.5 py-1 font-mono text-[0.65rem]"
                        style={{
                          borderColor: isActive ? `${accent}4D` : 'rgba(255,255,255,0.1)',
                          backgroundColor: isActive ? `rgba(${accentRGB}, 0.07)` : 'rgba(0,0,0,0.1)',
                          color: isActive ? '#d1d5db' : '#9ca3af'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div
                    className="mt-auto flex items-center gap-2 pt-7 font-mono text-xs transition-colors"
                    style={{ color: isActive ? accent : '#6b7280' }}
                  >
                    {isActive ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Currently selected
                      </>
                    ) : (
                      <>
                        <span>Select community</span>
                        <ArrowUpRight
                          className={`h-3.5 w-3.5 transition-transform ${hoveredId === id ? 'translate-x-0.5 -translate-y-0.5' : ''}`}
                        />
                      </>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}