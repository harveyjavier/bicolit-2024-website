import Image from "next/image";
import graphic_4 from "../../public/assets/graphic_4.svg";
import graphic_5 from "../../public/assets/graphic_5.svg";

export default function Events() {
  return (
    <section
      className="relative container h-svh md:h-[1086px] bg-[#330066] md:pl-24 text-white "
      id="events"
    >
      <div className="flex items-start justify-center flex-col gap-4 h-full">
        <h2 className="font-helvetica_bold text-lg font-extrabold">Events</h2>
        <div className="flex flex-col text-8xl md:text-[204.1pt] font-helvetica_bold  font-bold leading-[0.65]">
          <span>
            BIT
            <br />
            CON
            <br />
            2024
          </span>
        </div>
        <Image
          src={graphic_5}
          className="md:ml-4 md:mt-4"
          alt="Nice Code Graphic"
          height={22}
          width={44}
        />
      </div>

      <div className="absolute inset-0 flex items-end justify-center">
        <Image
          className="h-fit"
          src={graphic_4}
          alt="Nice Graphic"
          objectFit="contain"
          layout="fill"
          priority
        />
      </div>
    </section>
  );
}
