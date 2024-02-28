import Image from "next/image";
import graphic_2 from "../../public/assets/graphic_2.png";

export default function About() {
  return (
    <section
      className="relative -z-10 container h-full md:h-screen flex items-start justify-center md:px-36 pt-14 gap-10 pb-36"
      id="about"
    >
      <h2 dir="rtl" className="font-bold text-xl leading-[28pt] ">
        We&lsquo;re the biggest and most
        <br /> active IT education advocacy organization in the Bicol region
        with 5k&#43;
        <br />
        members
      </h2>
      <div className="flex item-center text-sm flex-col justify-center gap-4 flex-wrap">
        <p>
          From its inception in 2013, our community has grown from a few
          enthusiasts to thousands of students, professionals, founders, and
          academics.
        </p>
        <p>
          We&apos;ve conducted dozens of seminars, meetups, and workshops on
          various technologies that have attracted thousands of participants
          from all over Bicol.
        </p>
        <p>
          Our events always feature experts from the industry. We&apos;re
          grateful for their continuous support in sharing their knowledge with
          our members.
        </p>
        <p>
          BICOLIT.ORG INC. is a duly registered nonprofit corporation under SEC,
          BIR, LGU, and other government institutions.
        </p>
      </div>
      <Image
        className="absolute left-0 bottom-0 h-fit z-[-5]"
        src={graphic_2}
        alt="Nice Graphic"
        height={400}
        width={400}
        priority
      />
    </section>
  );
}
