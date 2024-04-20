import Image, { StaticImageData } from "next/image";

export default function AdvocateTitle({
  title,
  url,
  icon,
}: {
  title: string;
  url: string;
  icon: StaticImageData;
}) {
  return (
    <div className="flex items-center justify-between mt-3">
      <span className="text-lg">{title}</span>
      <a href={url} className="relative h-full w-auto" target="_blank">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={22}
          height={22}
          className="grayscale hover:grayscale-0 transition-all duration-200 delay-50"
        />
      </a>
    </div>
  );
}
