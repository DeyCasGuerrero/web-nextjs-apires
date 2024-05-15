import InformationSection from "@/components/common/sections/Informations";
import NewSection from "@/components/common/sections/News";
import EventSection from "@/components/common/sections/Projects";
import Slogan from "@/components/common/sections/Slogan";

export default function Home() {
  return (
    <>
      <Slogan></Slogan>
      <InformationSection></InformationSection>
      <NewSection></NewSection>
      <EventSection></EventSection>
    </>
    
  );
}
