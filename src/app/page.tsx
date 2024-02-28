import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Events from "@/components/events";
import Membership from "@/components/membership";

export default function Home() {
  return (
    <main>
      <section className="container relative flex items-start justify-between flex-col h-svh md:h-screen bg-gradient-to-tl to-[#00C2FF] via-[45.814%] via-[#6633C2] from-[#330066] pb-5">
        <Header />
        <Hero />
      </section>
      <About />
      <Events />
      <Membership />
    </main>
  );
}
