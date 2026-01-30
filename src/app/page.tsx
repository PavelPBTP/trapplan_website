import Hero from "@/components/sections/Hero";
import Cases from "@/components/sections/Cases";
import VerticalServicesAccordion from "@/components/sections/VerticalServicesAccordion";
import ReadyToGoPackages from "@/components/sections/ReadyToGoPackages";
import GetAQuote from "@/components/sections/GetAQuote";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Cases />
      <VerticalServicesAccordion />
      <ReadyToGoPackages />
      <GetAQuote />
      <Footer />
    </>
  );
}
