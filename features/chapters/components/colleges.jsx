"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { CYAN_HIGHLIGHT, SECTION_EYEBROW, SECTION_HEADING } from "../../constants";

const colleges = [
  [
    "RR Institute of Technology",
    "Bangalore",
    "rrinstitute",
  ],
  ["Reva University", "Bangalore", "revaUniversity"],
  [
    "RNS Institute of Technology",
    "Bangalore",
    "rnsInstitute",
  ],
  ["Sai Vidya Institute", "Bangalore", "SaiVidya"],
  [
    "KCC Institute of Technology",
    "Greater Noida",
    "kccInstitute",
  ],
  ["AGMR College Of Engineering", "Hubli", "AGMRCollege"],
].map(([name, location, photo]) => ({
  name,
  location,
  image: '/images/' + photo + '.jpg', 
}));

const count = colleges.length,
  slots = Array.from({ length: 12 }),
  angle = 30,
  reel = [...colleges, ...colleges, ...colleges];
const normalAngle = (value) => ((((value + 180) % 360) + 360) % 360) - 180;

function Card({ college, width, height, active, curved = true }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{
        width,
        height,
        borderRadius: curved ? "50% / 7%" : 14,
        boxShadow: active
          ? "0 30px 70px -15px rgba(14,161,228,.4),0 12px 34px rgba(0,0,0,.55)"
          : "0 16px 40px rgba(0,0,0,.5)",
      }}
    >
      <Image
        src={college.image}
        alt={college.name}
        fill
        sizes="(max-width: 1024px) 210px, 300px"
        draggable={false}
        className="pointer-events-none object-cover"
      />
      <div
        className="absolute inset-x-0 bottom-0 px-4 py-3.5"
        style={{
          background: "rgba(235,236,240,.72)",
          backdropFilter: "blur(6px)",
        }}
      >
        <p className="truncate text-sm font-semibold leading-tight text-[#17181c] md:text-base">
          {college.name}
        </p>
        <p className="mt-0.5 truncate text-xs text-[#4a4b52]">
          {college.location}
        </p>
      </div>
    </div>
  );
}

function Revolver({ setActiveIndex }) {
  const [dims, setDims] = useState({ width: 300, height: 380, radius: 780 });
  const [rotation, setRotation] = useState(0),
    [dragging, setDragging] = useState(false);
  const rotationRef = useRef(0),
    drag = useRef({ active: false, x: 0, rotation: 0 }),
    hover = useRef(false),
    pause = useRef(0);

  useEffect(() => {
    const resize = () =>
      setDims(
        window.innerWidth < 1280
          ? { width: 250, height: 320, radius: 620 }
          : { width: 300, height: 380, radius: 780 },
      );
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  useEffect(() => {
    let last = performance.now(),
      frame;
    const tick = (now) => {
      if (!drag.current.active && !hover.current && now > pause.current)
        rotationRef.current -= (now - last) * 0.012;
      last = now;
      setRotation(rotationRef.current);
      const nearest = slots.reduce(
        (best, _, slot) =>
          Math.abs(normalAngle(slot * angle + rotationRef.current)) <
          Math.abs(normalAngle(best * angle + rotationRef.current))
            ? slot
            : best,
        0,
      );
      setActiveIndex((current) =>
        current === nearest % count ? current : nearest % count,
      );
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [setActiveIndex]);

  const start = (event) => {
    drag.current = {
      active: true,
      x: event.clientX,
      rotation: rotationRef.current,
    };
    setDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };
  const move = (event) => {
    if (drag.current.active)
      rotationRef.current =
        drag.current.rotation + (event.clientX - drag.current.x) * 0.18;
  };
  const end = () => {
    drag.current.active = false;
    setDragging(false);
    pause.current = performance.now() + 1400;
  };

  return (
    <div
      className="relative flex w-full select-none items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
      style={{ height: dims.height + 140, perspective: "2000px" }}
      onPointerDown={start}
      onPointerMove={move}
      onPointerUp={end}
      onPointerLeave={end}
      onMouseEnter={() => (hover.current = true)}
      onMouseLeave={() => (hover.current = false)}
    >
      <div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {slots.map((_, slot) => {
          const currentAngle = normalAngle(slot * angle + rotation);
          if (Math.abs(currentAngle) > 100) return null;
          const radians = (currentAngle * Math.PI) / 180,
            depth = Math.min(Math.abs(currentAngle) / 100, 1),
            x = dims.radius * Math.sin(radians),
            z = dims.radius * Math.cos(radians) - dims.radius;
          return (
            <div
              key={slot}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%,-50%) translateX(${x}px) translateZ(${z}px) rotateY(${-currentAngle}deg) scale(${1 - depth * 0.32})`,
                opacity: 1 - depth * 0.9,
                filter: `brightness(${1 - depth * 0.45})`,
                transition: dragging ? "none" : "box-shadow .3s ease",
                backfaceVisibility: "hidden",
              }}
            >
              <Card
                college={colleges[slot % count]}
                width={dims.width}
                height={dims.height}
                active={Math.abs(currentAngle) < angle / 2}
              />
            </div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#050506] to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#050506] to-transparent md:w-28" />
    </div>
  );
}

function FlatReel({ activeIndex, setActiveIndex }) {
  const scrollRef = useRef(null),
    state = useRef({ touch: false, hover: false, pause: 0 });
  const step = 226,
    width = count * step;
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollLeft = width;
    let last = performance.now(),
      frame;
    const tick = (now) => {
      const current = state.current;
      if (!current.touch && !current.hover && now > current.pause)
        element.scrollLeft += (now - last) * 0.045;
      last = now;
      if (element.scrollLeft >= width * 2) element.scrollLeft -= width;
      if (element.scrollLeft < width * 0.5) element.scrollLeft += width;
      const index =
        ((Math.round(
          (element.scrollLeft + element.clientWidth / 2 - step / 2) / step,
        ) %
          count) +
          count) %
        count;
      setActiveIndex((active) => (active === index ? active : index));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [setActiveIndex, width]);
  const touch = (value) => {
    state.current.touch = value;
    if (!value) state.current.pause = performance.now() + 1600;
  };
  return (
    <div
      ref={scrollRef}
      className="no-scrollbar flex w-full items-center gap-4 overflow-x-auto py-6"
      style={{ scrollSnapType: "x proximity" }}
      onTouchStart={() => touch(true)}
      onTouchEnd={() => touch(false)}
      onMouseDown={() => touch(true)}
      onMouseUp={() => touch(false)}
      onMouseEnter={() => (state.current.hover = true)}
      onMouseLeave={() => (state.current.hover = false)}
    >
      {reel.map((college, index) => (
        <div
          key={index}
          className="relative shrink-0"
          style={{ scrollSnapAlign: "center" }}
        >
          <Card
            college={college}
            width={210}
            height={270}
            active={index % count === activeIndex}
            curved={false}
          />
        </div>
      ))}
    </div>
  );
}

export default function CampusNetworkSection() {
  const [activeIndex, setActiveIndex] = useState(0),
    [desktop, setDesktop] = useState(false),
    active = colleges[activeIndex];
  useEffect(() => {
    const check = () => setDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050506] px-4 py-16 text-white md:px-12">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');.font-body{font-family:Inter,system-ui,sans-serif}.no-scrollbar{scrollbar-width:none}.no-scrollbar::-webkit-scrollbar{display:none}@keyframes fadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div className="pointer-events-none absolute right-0 top-1/3 h-[700px] w-[700px] rounded-full bg-[#0ea1e4]/10 blur-[160px]" />
      <div className="font-body relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-12 lg:flex-row lg:gap-8">
        <div className="flex flex-1 flex-col md:items-start items-center justify-center lg:w-[38%] lg:pr-8">
          <div className={`${SECTION_EYEBROW} mb-5`}>
            <span>communityX Campus Network</span>
          </div>
          <h2 className={`${SECTION_HEADING} mb-4`}>
            Chapters Active Across{" "}
            <span
              className={`${CYAN_HIGHLIGHT} underline decoration-[#0ea1e4]/50 underline-offset-4`}
            >
              77+{" "}
            </span>
            Engineering Colleges
          </h2>
          <p className="mb-10 max-w-md text-lg leading-relaxed text-[#9a9ca6]">
            Join a campus near you, or be the one to bring{" "}
            <span className={`${CYAN_HIGHLIGHT} font-semibold`}>OSCode</span> to
            your college.
          </p>
          <div
            key={active.name}
            className="mb-10 w-full max-w-lg rounded-2xl border border-[#22252e] bg-[#101218] p-5"
            style={{ animation: "fadeIn .4s ease" }}
          >
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 select-none items-center justify-center rounded-xl bg-gradient-to-br from-white to-[#d7d9e0] text-xl font-bold text-black shadow-lg">
                {active.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 3)}
              </div>
              <div className="min-w-0">
                <h3 className="mb-1 truncate text-xl font-semibold leading-tight">
                  {active.name}
                </h3>
                <p className="flex items-center gap-1.5 text-sm text-[#8b8b93]">
                  <svg
                    className="h-3.5 w-3.5 fill-[#8b8b93]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  {active.location}
                </p>
              </div>
              <div className="ml-auto flex shrink-0 gap-1">
                {colleges.map((_, index) => (
                  <span
                    key={index}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: index === activeIndex ? 18 : 6,
                      backgroundColor:
                        index === activeIndex ? "#0ea1e4" : "#33363f",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <button className="group flex items-center gap-2 rounded-full bg-[#0ea1e4] px-9 py-4 text-base font-semibold text-white 
          shadow-[0_0_25px_rgba(14,161,228,.2)] transition-all duration-300 hover:bg-[#0b8bc2] hover:shadow-[0_0_35px_rgba(14,161,228,.35)]
           focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ea1e4]">
            Start a chapter at your campus{" "}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
        <div className="flex flex-1 items-center lg:w-[62%]">
          {desktop ? (
            <Revolver setActiveIndex={setActiveIndex} />
          ) : (
            <FlatReel
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          )}
        </div>
      </div>
      <p className="font-body mt-4 text-center text-xs tracking-wide text-[#5c5e68] lg:hidden">
        swipe to browse
      </p>
    </section>
  );
}
