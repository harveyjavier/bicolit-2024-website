import Card from "@/components/card";
import { siteConfig } from "@/config/site";
import AdvocateTitle from "./advocate-title";
import linkedinIcon from "../../public/assets/linkedin.svg";
import SectionHeader from "./section-header";

export default function Advocates() {
  return (
    <div className="container px-4 py-6 md:px-24 md:pt-24 flex h-auto flex-col justify-around gap-6">
      <SectionHeader id="advocates" title="Advocates" />
      <div className="flex flex-wrap items-center lg:justify-between gap-4">
        {siteConfig.advocates.map((advocate, index) => (
          <Card
            key={index}
            cardClass="even:my-4 hover:cursor-pointer"
            imageSource={advocate.imageSource}
            imageWidth={333}
            imageHeight={333}
            title={
              <AdvocateTitle
                title={advocate.name}
                url={advocate.linkedin}
                icon={linkedinIcon}
              />
            }
            description={advocate.position}
          />
        ))}
      </div>
    </div>
  );
}
