import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Events from "@/components/events";
import Membership from "@/components/membership";
import Blogs from "@/components/blogs";
import Advocates from "@/components/advocates";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <main>
      <section className="container relative flex  flex-col md:h-[50rem] h-svh bg-gradient-to-tl to-[#00C2FF] via-[60%] via-[#6633C2] from-[#330066]">
        <Header />
        <Hero />
      </section>
      <About />
      <Events />
      <Membership />
      {/* <Blogs /> */}
      <Advocates />
      <Partners />
    </main>
  );
}
