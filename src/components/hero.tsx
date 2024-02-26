import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Image
        className="absolute top-0 right-0 h-fit"
        src="/assets/graphic_1.png"
        alt="Nice Graphic"
        height={500}
        width={500}
        priority
      />
      <Image
        className="absolute right-0 md:right-14 bottom-0 h-min w-50"
        src="/assets/vr-girl.png"
        alt="A Girl in a VR Headset"
        height={600}
        width={600}
        priority
      />
      <span className="text-white pl-6 grow font-helvetica_bold text-5xl md:text-7xl lg:text-9xl md:pl-24 pt-6 md:pt-20 text-wrap font-bold transform">
        Innovating
        <br /> Tomorrow,
        <br /> Today.
      </span>
    </>
  );
}
