"use client";

import { useId, useState } from "react";
import { section } from "@/features/constants";

const faqData = [
  {
    id: 1,
    question: "Who can become an OSCode Campus Ambassador?",
    answer:
      "Any currently enrolled college student who is passionate about technology, community building, and creating opportunities for others can apply.",
  },
  {
    id: 2,
    question: "Do I need previous leadership experience?",
    answer:
      "No. You don’t need to have led a club before. We’re looking for initiative, consistency, and a genuine interest in bringing students together.",
  },
  {
    id: 3,
    question: "What does an OSCode Campus Ambassador do?",
    answer:
      "Campus Leads build a core team, organize workshops and hackathons, run open-source activities, share relevant opportunities, and grow the OSCode community at their college.",
  },
  {
    id: 4,
    question: "Can I apply if my college already has an OSCode chapter?",
    answer:
      "Yes. You can apply to join the existing chapter’s leadership team and help organize programs at your campus.",
  },
  {
    id: 5,
    question: "What support will OSCode provide?",
    answer:
      "Selected leads receive onboarding, event playbooks, activity ideas, promotional support, mentor or speaker connections, and guidance from the OSCode community team.",
  },
  {
    id: 6,
    question: "Are there any rewards or certificates?",
    answer:
      "Active Campus Leads can earn certificates, digital badges, merchandise, community features, mentorship access, and other milestone-based rewards.",
  },
  {
    id: 7,
    question: "How long does the program last?",
    answer:
      "The program runs for 6 months. Consistent performers may continue leading their chapter or progress to larger roles within the OSCode community.",
  },
  {
    id: 8,
    question: "How do I apply?",
    answer:
      "Complete the application form with your college details, interests, and motivation. If shortlisted, the OSCode team will contact you with the next steps.",
  },
];

export default function FaqSection() {
  const [activeId, setActiveId] = useState<number | null>(1);
  const baseId = useId();

  const toggleFaq = (id: number) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
  <section className={`${section}`}>
      <h2 className="mt-1 text-center text-2xl font-bold text-white sm:text-3xl sm:tracking-tight lg:text-4xl">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60">
        {faqData.map((item, index) => {
          const isActive = activeId === item.id;
          const questionId = `${baseId}-q-${item.id}`;
          const panelId = `${baseId}-a-${item.id}`;

          return (
            <div
              key={item.id}
              className={`relative border-b border-zinc-800/80 last:border-b-0 ${
                isActive ? "bg-zinc-900" : ""
              }`}
            >
              {/* active state bar */}
              <span
                className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-[#83B5E5] transition-transform duration-300 ${
                  isActive ? "scale-y-100" : "scale-y-0"
                }`}
              />

              <h3 className="m-0">
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(item.id)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#83B5E5] sm:px-6 sm:py-5"
                >
                  <span
                    className={`shrink-0 pt-px font-mono text-sm ${
                      isActive ? "text-[#83B5E5]" : "text-zinc-500"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-[14px] font-medium text-white">
                    {item.question}
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isActive ? "-rotate-180 text-[#83B5E5]" : "text-zinc-500"
                    }`}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={questionId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 pl-14 text-[14px] leading-relaxed text-gray-300">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
