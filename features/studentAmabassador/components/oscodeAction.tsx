"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { section } from "../../constants";

const blueGlowCard =
  "rounded-2xl bg-[#1f7998] border border-zinc-800/80 transition-all duration-300 hover:border-zinc-600/80 overflow-hidden flex-shrink-0";


const CARD_WIDTH = "w-[280px] sm:w-[340px] lg:w-[420px]";
const CARD_HEIGHT = "h-[200px] sm:h-[240px] lg:h-[280px]";

const rowConfigs = [
  {
    speed: 0.5,
    direction: 1,
    items: [1, 2, 3, 4, 5, 6],
  },
  {
    speed: 0.5,
    direction: -1,
    items: [1, 2, 3, 4, 5, 6],
  },
];

interface PhotoRowProps {
  items: number[];
  speed: number;
  direction: number;
}

function PhotoCard() {
  return (
    <div className={`${blueGlowCard} ${CARD_WIDTH} ${CARD_HEIGHT}`}>
      <img
        src={"/images/oscodeAction.png"}
        alt="OSCode community photo"
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function PhotoRow({ items, speed, direction }: PhotoRowProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef<{
    dragging: boolean;
    startX: number;
    startScroll: number;
  }>({
    dragging: false,
    startX: 0,
    startScroll: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const looped = [...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollLeft = track.scrollWidth / 3;

    let frameId: number;
    const tick = () => {
      if (track) {
        if (!dragState.current.dragging) {
          track.scrollLeft += speed * direction;
        }

        const third = track.scrollWidth / 3;
        if (track.scrollLeft >= third * 2) {
          track.scrollLeft -= third;
        } else if (track.scrollLeft <= 0) {
          track.scrollLeft += third;
        }
      }
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [speed, direction]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const track = trackRef.current;
      if (!track) return;
      dragState.current = {
        dragging: true,
        startX: e.clientX,
        startScroll: track.scrollLeft,
      };
      setIsDragging(true);
      track.setPointerCapture?.(e.pointerId);
    },
    []
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const track = trackRef.current;
      if (!track || !dragState.current.dragging) return;
      const dx = e.clientX - dragState.current.startX;
      track.scrollLeft = dragState.current.startScroll - dx;
    },
    []
  );

  const endDrag = useCallback(() => {
    dragState.current.dragging = false;
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
      className={`no-scrollbar flex gap-3 overflow-x-scroll sm:gap-4 ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      {looped.map((_, idx) => (
        <PhotoCard key={idx} />
      ))}
    </div>
  );
}

export default function OSCodeInAction() {
  return (
    <section className={`bg-[#0a0a0b] flex flex-col py-12 lg:py-12`}>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
          touch-action: pan-y;
        }
      `}</style>

  
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white sm:tracking-tight lg:text-4xl">
          OSCode in Action
        </h2>
      </div>

      <div className="relative mt-5 flex w-full flex-col gap-3 sm:gap-4">
   
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent sm:w-24 lg:w-40" />
  
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent sm:w-24 lg:w-40" />

        {rowConfigs.map((row, idx) => (
          <PhotoRow
            key={idx}
            items={row.items}
            speed={row.speed}
            direction={row.direction}
          />
        ))}
      </div>
    </section>
  );
}
