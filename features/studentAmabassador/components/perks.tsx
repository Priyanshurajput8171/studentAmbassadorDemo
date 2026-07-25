"use client";
import Image from "next/image";
import { glass, section } from "../../constants";

type Perk = {
  id: number;
  pos: string;
  title: string;
  desc: string;
  bg: string; // tailwind bg color class for the card
  i: string;
};

const perks: Perk[] = [
  {
    id: 1,
    pos: "lg:col-start-1 lg:row-start-1 lg:row-span-3",
    title: "Exclusive Merch & Referral Rewards",
    desc: "Get branded merch and earn rewards for every successful referral you bring in.",
    bg: "bg-amber-400",
    i: `/images/studentAmbassador/perks/rewards.png`,
  },
  {
    id: 5,
    pos: "lg:col-start-1 lg:row-start-4 lg:row-span-3",
    title: "Pre-Placement Interview Opportunity*",
    desc: "Stand out to hiring teams and unlock a fast-tracked interview opportunity.",
    bg: "bg-emerald-400",
    i: `/images/studentAmbassador/perks/interview.png`,
  },
  {
    id: 2,
    pos: "lg:col-start-2 lg:row-start-1 lg:row-span-2",
    title: "Recognition at the OSCode Awards",
    desc: "Get celebrated on stage for your contribution and impact.",
    bg: "bg-sky-400",
    i: `/images/studentAmbassador/perks/award.png`,
  },
  {
    id: 4,
    pos: "lg:col-start-2 lg:row-start-3 lg:row-span-2",
    title: "Certificate of Excellence",
    desc: "An official certificate to showcase your journey and achievements.",
    bg: "bg-rose-400",
    i: `/images/studentAmbassador/perks/certificate.png`,
  },
  {
    id: 6,
    pos: "lg:col-start-2 lg:row-start-5 lg:row-span-2",
    title: "Personalized 1:1 Mentorship*",
    desc: "Personal guidance from industry mentors for your career growth.",
    bg: "bg-yellow-400",
    i: `/images/studentAmbassador/perks/mentor.png`,
  },
  {
    id: 3,
    pos: "lg:col-start-3 lg:row-start-1 lg:row-span-3",
    title: "Internships with a ₹10,000 Stipend*",
    desc: "Work on real projects while earning a monthly stipend.",
    bg: "bg-violet-400",
    i: `/images/studentAmbassador/perks/stipent.png`,
  },
  {
    id: 7,
    pos: "lg:col-start-3 lg:row-start-4 lg:row-span-3",
    title: "Build Real-World Skills",
    desc: "Hands-on experience solving problems that matter in the industry.",
    bg: "bg-orange-400",
    i: `/images/studentAmbassador/perks/project.png`,
  },
];

const PerkCard = ({ p }: { p: Perk }) => (
  <div
    className={`${glass} group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:scale-[1.02] md:min-h-[240px] lg:min-h-[220px] ${p.pos}`}
  >
    <div className="relative top-[20%] z-10">
      <h3 className="max-w-[75%] text-xl font-bold leading-tight text-white">
        {p.title}
      </h3>
      <p className="mt-4 max-w-[50%] text-[14px] md:text-[12px] leading-snug text-gray-400">
        {p.desc}
      </p>
    </div>

    <div className="pointer-events-none absolute bottom-0 right-0 h-[65%] w-[60%] translate-x-2 translate-y-2">
      <Image
        src={p.i}
        alt={p.title}
        fill
        className="object-contain object-bottom-right transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  </div>
);

export default function Perks() {
  return (
    <section className={`${section}`}>
      <div className="pointer-events-none absolute inset-0">

  {/* Sky Blue */}
  <div className="absolute top-1/2 right-20 h-[400px] w-[400px] rounded-full bg-sky-400/15 blur-[180px]" />

  {/* Violet */}
  <div className="absolute -top-40 right-1/3 h-[350px] w-[350px] rounded-full bg-violet-500/12 blur-[180px]" />

  {/* Cyan */}
  <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full flex-col items-center">
        <div className="mx-auto w-full">
          <h2 className="text-4xl font-bold mb-2 text-center">Perks</h2>

          <div className="mt-8 grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:grid-rows-6 lg:gap-3 lg:items-center mx-auto">
            {perks.map((p) => (
              <PerkCard key={p.id} p={p} />
            ))}
          </div>

          <p className="mt-4 text-left text-xs italic text-cyan-400 md:ml-1">
            * Based on Performance
          </p>
        </div>
      </div>
    </section>
  );
}
