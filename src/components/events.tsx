import Image from "next/image";
import graphicFour from "../../public/assets/events/graphic_4.svg";
import graphicFive from "../../public/assets/events/graphic_5.svg";

export default function Events() {
  return (
    <section
      className="container relative h-svh md:h-[1086px] bg-[#330066] md:p-24 text-white"
      id="events"
    >
      <div className="flex justify-center flex-col gap-4 h-full">
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
