import About from "@/components/about";
import Hero from "@/components/hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <main>
        <section className="relative flex items-start justify-between flex-col h-svh md:h-screen bg-gradient-to-tl to-[#00C2FF] via-[45.814%] via-[#6633C2] from-[#330066] pb-5 opacity-[99%]">
          <Header />
          <Hero />
        </section>
        <About />
      </main>
    </>
  );
}
