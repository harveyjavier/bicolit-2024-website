import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative container">
      <span className="text-8xl text-wrap font-bold  top-1/2 left-10 transform -translate-y-1/2 z-14 w-1">
        Innovating Tomorrow, Today.
      </span>
      {/* <Image
        className="absolute top-0 h-[96] left-0"
        src="/assets/hero.jpg"
        alt="Hero Image"
        width={1920}
        height={1080}
        priority
      /> */}
    </section>
  );
}
