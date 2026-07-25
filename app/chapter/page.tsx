import CheckCampus from "@/features/chapters/components/CheckCampus";
import Hero from "@/features/chapters/components/hero";
import BranchCommunities from "@/features/chapters/components/BranchCommunities";
import ChapterLeadSection from "@/features/chapters/components/ChapterLeadSection";
import CampusNetworkSection from "@/features/chapters/components/colleges"; 
export default function Home() {
  return (
    <main>
      <Hero />
      <CheckCampus />  
      <CampusNetworkSection />
      <BranchCommunities />
      <ChapterLeadSection />
    </main>
  );
}