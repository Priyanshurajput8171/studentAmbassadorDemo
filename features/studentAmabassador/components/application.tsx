"use client";

import Image from "next/image";
import { FileEdit, ListChecks, MessageCircle, Users } from "lucide-react";
import { section, STEP_GRID, STEP_CARD_HEIGHT, glass } from "../../constants";

const steps = [
  {
    n: "1",
    title: "Apply",
    desc: "Tell us about yourself, your campus, and why you want to build a strong open-source community.",
    img: "/images/studentAmbassador/application/applyNow2.png",
    icon: FileEdit,
  },
  {
    n: "2",
    title: "Shortlisting",
    desc: "Our team reviews every application and selects candidates based on their motivation, initiative, and potential.",
    img: "/images/studentAmbassador/application/shortList.png",
    icon: ListChecks,
  },
  {
    n: "3",
    title: "Interview",
    desc: "Have a short conversation with the OSCode team about your ideas, experience, and vision for your campus.",
    img: "/images/studentAmbassador/application/interview.png",
    icon: MessageCircle,
  },
  {
    n: "4",
    title: "Join the Cohort",
    desc: "Selected ambassadors join the national cohort, meet fellow campus leaders, and begin their six-month journey.",
    img: "/images/studentAmbassador/application/cohort.png",
    icon: Users,
  },
];

export default function ApplicationProcess() {
  return (
    <section className={`${section} flex flex-col`}>
      <div className="mx-auto flex w-full flex-col items-center">
        <h2 className="mt-1 text-center text-2xl font-bold text-white sm:text-3xl sm:tracking-tight lg:text-4xl">
          Application Process
        </h2>

        <div className={STEP_GRID}>
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.n}
                className={`${glass} ${STEP_CARD_HEIGHT} flex flex-col items-start gap-2 text-left sm:items-center sm:text-center`}
              >
                <div className="flex flex-col gap-2 px-4 py-6">
                  <div className="mb-2 flex w-full items-center gap-2 px-2 font-semibold sm:justify-center">
                    <Icon className="h-5 w-5 text-[#83B5E5]" />
                    <span style={{ fontSize: "14px" }}>
                      {step.n}. {step.title}
                    </span>
                  </div>

                  <p
                    className="mt-2 flex-1 text-sm leading-relaxed text-gray-300 sm:text-sm"
                    style={{ fontSize: "12px" }}
                  >
                    {step.desc}
                  </p>
                </div>

                <div className="relative mt-3 min-h-[130px] w-full flex-1 overflow-hidden rounded-lg">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover overflow-hidden"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button className="mt-8 w-full rounded-xl bg-[#0050FF] px-6 py-3.5 font-bold text-white transition-colors duration-300 hover:bg-[#0040CC] md:w-auto">
          Start my Application
        </button>
      </div>
    </section>
  );
}
