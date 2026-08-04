import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import Flexibility from "./components/Flexibility";
import ProgramsGrid from "./components/ProgramsGrid";
import PricesSummary from "./components/PricesSummary";
import Team from "./components/Team";
import PhilosophyBand from "./components/PhilosophyBand";
import Testimonials from "./components/Testimonials";
import LocationsGrid from "./components/LocationsGrid";
import ClosingCta from "./components/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Flexibility />
      <ProgramsGrid />
      <PricesSummary />
      <Team />
      <PhilosophyBand />
      <Testimonials />
      <LocationsGrid />
      <ClosingCta />
    </>
  );
}
