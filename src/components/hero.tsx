import Image from "next/image";
import vrGirl from "../../public/assets/hero/vr-girl.png";
import graphicOne from "../../public/assets/hero/graphic_1.svg";

export default function Hero() {
  return (
    <>
      <Image
        className="absolute top-0 right-0 h-fit"
        src={graphicOne}
        alt="Nice Graphic"
        height={650}
        width={650}
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
            src={vrGirl}
            alt="A girl in a virtual reality headset"
            width={700}
            height={700}
            priority
          />
        </div>
      </div>
    </>
  );
}
