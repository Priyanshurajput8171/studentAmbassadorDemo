"use client";
import React, { useState, useRef, useEffect } from "react";
import { Search, Users, Rocket, Sparkles } from "lucide-react";
import { CYAN_HIGHLIGHT, GLASS_CARD,  SECTION_EYEBROW, SECTION_HEADING } from "../../constants";

export default function CheckCampus() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="check-campus" className={`relative flex flex-col items-center overflow-hidden bg-[#0a0a0a] px-6 py-20`}>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(14,161,228,0.06),transparent_70%)]" />

      <div className={`relative z-10 w-full max-w-[720px] flex flex-col items-center text-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Label */}
        <div className={`${SECTION_EYEBROW} mb-5`}>
          <span>Check Your Campus</span>
        </div>

        {/* Heading */}
        <h2 className={`${SECTION_HEADING} mb-4`}>
          Is Your College Already Part of{" "}
          <span className={CYAN_HIGHLIGHT}>communityX</span>?
        </h2>

        <p className={` mb-10 max-w-[560px]`}>
          Search your college below. If it&apos;s listed, you can join the chapter. If not, you could be the one to start it.
        </p>

        {/* Search bar */}
        <div className={`w-full max-w-[560px] mb-12 flex items-center rounded-[14px] px-5 border transition-all duration-300 ${isFocused ? "border-[rgba(14,161,228,0.5)] bg-[rgba(14,161,228,0.04)] shadow-[0_0_0_3px_rgba(14,161,228,0.08),0_8px_32px_rgba(14,161,228,0.1)]" : "border-white/10 bg-white/[0.03] hover:border-[rgba(14,161,228,0.3)]"}`}>
          <Search className={`w-[18px] h-[18px] shrink-0 transition-colors duration-300 ${isFocused ? "text-[#0ea1e4]" : "text-white/35"}`} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Type your college name or city..."
            className="flex-1 bg-transparent border-none outline-none text-white text-[0.95rem] py-4 px-3 placeholder:text-white/30 font-[inherit]"
            id="campus-search"
          />
          {query && (
            <button onClick={() => setQuery("")} className="w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.08] text-white/50 text-xs hover:bg-[rgba(14,161,228,0.2)] hover:text-[#0ea1e4] transition-all" aria-label="Clear">✕</button>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-[660px]">
          {[
            { icon: Users, title: "Campus already listed?", desc: "Join the existing chapter and become part of the core team." },
            { icon: Rocket, title: "Campus not listed?", desc: <>Be the Founding Chapter Lead and build something from scratch.</> },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className={`group relative cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(14,161,228,0.35)] hover:bg-[rgba(14,161,228,0.04)] hover:shadow-[0_0_40px_rgba(14,161,228,0.08)] ${GLASS_CARD}`}>
              <div className="p-8 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-[14px] bg-[rgba(14,161,228,0.1)] border border-[rgba(14,161,228,0.15)] flex items-center justify-center mb-1 transition-all duration-300 group-hover:bg-[rgba(14,161,228,0.2)] group-hover:shadow-[0_0_20px_rgba(14,161,228,0.2)] group-hover:scale-[1.08]">
                  <Icon className="w-[22px] h-[22px] text-[#0ea1e4]" />
                </div>
                <h3 className="text-[1.05rem] font-bold text-white">{title}</h3>
                <p className="text-sm text-gray-400/80 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
