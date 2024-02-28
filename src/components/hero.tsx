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
      <div className="grow flex items-start sm:flex-row justify-start z-[1] md:items-end md:justify-end flex-col h-full">
        <div className="flex items-end md:items-center h-full">
          <span className="text-white md:translate-x-16 font-helvetica_bold text-5xl md:text-6xl lg:text-9xl font-bold">
            Innovating
            <br />
            Tomorrow,
            <br />
            Today.
            <br />
          </span>
        </div>
        <div className="flex items-end justify-end  h-full">
          <Image
            src="/assets/vr-girl.png"
            alt="A Girl in a VR Headset"
            height={680}
            width={680}
            priority
          />
        </div>
      </div>
    </>
  );
}
