import Image from "next/image";
import graphicFour from "@/assets/events/graphic_4.svg";
import graphicFive from "@/assets/events/graphic_5.svg";
import thumnail from "@/assets/vid-thumbnail.png";

export default function Events() {
  return (
    <section
      className="relative p-4 h-1/2 pt-14 md:h-[68rem] bg-[#330066] md:p-24 text-white"
      id="events"
    >
      <video
        controls
        preload="none"
        aria-label="Video player"
        poster={thumnail.src}
        style={{ width: "80%", height: "auto" }}
        className="absolute top-0 right-0 left-0 -translate-y-[75%] mx-auto md:z-10 z-[5] md:w-10/12"
      >
        <source src="solana-ecosystem-call.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex justify-end flex-col gap-4 h-full">
        <h2 className="font-helvetica_bold text-2xl font-extrabold text-white">
          Events
        </h2>
        <div className="flex flex-col text-8xl z-[2] md:text-[204.1pt] font-helvetica_bold  font-bold leading-[0.75]">
          <span>
            BIT
            <br />
            CON
            <br />
            2024
          </span>
        </div>
        <Image
          src={graphicFive}
          className="md:ml-4 md:mt-4"
          alt="Nice Code Graphic"
          height={22}
          width={44}
        />
      </div>

      <Image
        className="absolute left-0 bottom-0 h-fit"
        src={graphicFour}
        alt="Nice Graphic"
        priority
        style={{
          width: "100%",
          height: "916.198",
        }}
      />
    </section>
  );
}
