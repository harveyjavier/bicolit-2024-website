import Header from "@/components/header";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import About from "@/components/about";
import Events from "@/components/events";
import Membership from "@/components/membership";
import Blogs from "@/components/blogs";
import TabbedSection from "@/components/tabbed-section";
import { StateProvider } from "@/lib/state";

export default function Home() {
  return (
    <StateProvider>
      <main>
        <section className="relative flex px-4 pt-4  flex-col md:h-[50rem] h-svh bg-gradient-to-tl to-[#00C2FF] via-[60%] via-[#6633C2] from-[#330066]">
          <Header />
          <Hero />
        </section>
        <About />
        <Events />
        <Membership />
        {/* <Blogs /> */}
        <TabbedSection />
        <Partners />
      </main>
    </StateProvider>
  );
}
