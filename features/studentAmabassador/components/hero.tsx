"use client";

import Image from "next/image";
import { SECTION_PADDING, SECTION_HEADING, GLASS_CARD } from "../../constants";

const STATS: [string, string][] = [
  ["55K+", "OSCode Members"],
  ["77+", "Colleges"],
  ["362+", "Events"],
];

export default function Hero() {
  return (
    <section className="relative isolate flex flex-col overflow-hidden lg:h-screen lg:max-h-screen">
      <div className="relative h-[42vh] min-h-[240px] w-full md:h-[52vh] md:min-h-[360px] lg:absolute lg:inset-0 lg:z-0 lg:h-full lg:min-h-0">
        <Image
          src="/images/studentAmbassador/bgDesktop.jpeg"
          alt=""
          fill
          priority
          className="hidden h-full w-full object-cover lg:block"
        />
        <Image
          src="/images/studentAmbassador/bgMobHero.jpeg"
          alt=""
          fill
          priority
          className="block h-full w-full object-cover lg:hidden"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col bg-black pb-6 pt-5 md:pb-8 md:pt-6 lg:justify-between lg:bg-transparent lg:py-8 ${SECTION_PADDING}`}
      >
        <div className="grid grid-cols-1 items-start gap-4 sm:gap-8 md:flex-1 md:items-center md:gap-6 lg:pt-0">
          <div className="flex flex-col items-start gap-3 text-left sm:gap-6 md:max-w-xl lg:max-w-2xl">
            <h2 className={SECTION_HEADING}>
              OSCode Campus <br />
              Ambassador Program
            </h2>

            <div className="mt-6 flex w-full flex-col-reverse gap-3 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-4 md:w-auto">
              <button className="w-full rounded-xl bg-[#0050FF] px-6 py-3.5 font-bold text-white transition-colors duration-300 hover:bg-[#0040CC] sm:w-auto sm:whitespace-nowrap md:px-7 md:py-4 md:text-[15px]">
                Apply to Become a Chapter Lead
              </button>

              <button className="w-full rounded-xl border border-white/25 bg-transparent px-6 py-3.5 font-bold text-gray-400 transition-colors duration-300 hover:border-white/50 hover:text-white/80 sm:w-auto sm:whitespace-nowrap md:px-7 md:py-4 md:text-[15px]">
                Check Your Campus
              </button>
            </div>

            <div className="mt-3 text-sm font-bold uppercase tracking-wider text-gray-400">
              Free to apply · Applications close [date]
            </div>
          </div>
        </div>

        <div className="order-3 mt-6 grid grid-cols-3 gap-3 pb-2 sm:mt-10 sm:gap-4 sm:pb-10 md:mt-8 md:max-w-[75%] md:gap-5 md:pb-4 lg:mt-6 lg:max-w-[50%] lg:pb-0">
          {STATS.map(([value, label]) => (
            <div
              key={label}
              className={`${GLASS_CARD} flex flex-col gap-1 rounded-2xl px-4 py-4 sm:gap-1.5 sm:px-5 sm:py-5 md:px-6 md:py-6`}
            >
              <span className="text-2xl font-extrabold leading-none sm:text-3xl md:text-3xl lg:text-4xl">
                {value}
              </span>
              <span className="font-mono text-[11px] leading-tight tracking-wide text-gray-200 sm:text-xs md:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
