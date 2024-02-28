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
      <div className="absolute bottom-0 flex z-10 md:px-14 items-start justify-start md:items-end md:justify-center flex-col-reverse md:flex-row-reverse">
        <Image
          className="h-min w-50 align-bottom"
          src="/assets/vr-girl.png"
          alt="A Girl in a VR Headset"
          height={620}
          width={620}
          priority
        />
        <div className="text-white md:translate-x-10 md:pb-20 font-helvetica_bold text-5xl md:text-6xl lg:text-9xl font-bold">
          <span className="block">Innovating</span>
          <span className="block">Tomorrow,</span>
          <span className="block">Today.</span>
        </div>
      </div>
    </>
  );
}
