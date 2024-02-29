import Card from "@/components/card";
import { siteConfig } from "@/config/site";
import AdvocateTitle from "./advocate-title";
import linkedin from "../../public/assets/linkedin.svg";

export default function Advocates() {
  return (
    <div
      className="container px-4 py-6 md:p-24 flex h-auto flex-col justify-around gap-6"
      id="advocates"
    >
      <h1 className="font-helvetica_bold text-2xl font-extrabold text-[#330066]">
        Advocates
      </h1>
      <div className="flex flex-wrap items-center justify-between">
        {siteConfig.advocates.map((advocate, index) => {
          return (
            <Card
              key={index}
              cardClass="even:my-4"
              imageWidth={348}
              imageHeight={348}
              imageSource={advocate.imageSource}
              title={<AdvocateTitle title={advocate.name} icon={linkedin} />}
              description={advocate.position}
            />
          );
        })}
      </div>
    </div>
  );
}
