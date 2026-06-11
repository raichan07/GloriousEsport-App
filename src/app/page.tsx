import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Organization from "@/components/Organization";
import Teams from "@/components/Teams";
import HallOfFame from "@/components/HallOfFame";
import Gallery from "@/components/Gallery";
import JoinClan from "@/components/JoinClan";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Organization />
      <Teams />
      <HallOfFame />
      <Gallery />
      <JoinClan />
      <Footer />
    </>
  );
}