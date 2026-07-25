"use client";
import Image from "next/image";
import { Calendar, MapPin, UserPlus } from "lucide-react";
import { glass, section } from "@/features/constants";

const icons = { Calendar, MapPin, UserPlus };

export default function CTASection() {
  const chips = [
    { label: "6 Months", icon: icons.Calendar },
    { label: "Campus-Based", icon: icons.MapPin },
    { label: "Limited Seats", icon: icons.UserPlus },
  ];

  return (
    <section className={`${section}`}>
      <div className="mx-auto w-full">
        {/* Main CTA Card */}
        <div
          className={`rounded-2xl border border-white/5 bg-zinc-900/60 relative flex flex-col md:flex-row md:max-h-[500px] overflow-hidden rounded-3xl`}
        >
          {/* image left */}

          <div className="relative w-full md:w-[42%] h-64 md:h-auto min-h-[320px] overflow-hidden md:rounded-l-3xl">
            <Image
              src={"/images/heroImg.JPG"}
              alt="Campus community building"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900/60 md:bg-gradient-to-r md:from-transparent md:to-black" />
          </div>

          <div className="relative w-full overflow-hidden md:w-[58%] p-8 md:p-12 lg:p-14 flex flex-col justify-center">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-violet-500/15 blur-[100px]" />
              <div className="absolute top-1/3 right-0 h-56 w-56 rounded-full  bg-[#10B981]/10 blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl font-bold text-white leading-tight tracking-tight">
                Don’t just join the community.
                <br className="hidden sm:block" />
                Build one on your campus.
              </h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {chips.map((chip, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 rounded-full border border-zinc-500/60 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-zinc-600/60 hover:bg-zinc-900 hover:text-zinc-300"
                  >
                    <chip.icon size={16} />
                    {chip.label}
                  </div>
                ))}
              </div>

              <button className="mt-8 lg:mt-15 w-full rounded-xl bg-white px-6 py-3.5 font-bold text-black sm:w-[40%] md:w-[60%] lg:w-[35%]">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
