import Image, { StaticImageData } from "next/image";

export default function AdvocateTitle({
  title,
  icon,
}: {
  title: string;
  icon: StaticImageData;
}) {
  return (
    <div className="flex items-center justify-between mt-3">
      <span className="text-lg">{title}</span>
      <div className="relative h-full w-auto">
        <Image src={icon} alt={`${title} icon`} width={22} height={22} />
      </div>
    </div>
  );
}
