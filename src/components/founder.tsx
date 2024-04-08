import Card from "@/components/card";
import { siteConfig } from "@/config/site";
import AdvocateTitle from "./advocate-title";
import linkedinIcon from "../../public/assets/linkedin.svg";
import SectionHeader from "./section-header";

export default function Founder() {
  return (
    <div className="container px-4 py-6 md:px-24 flex h-auto flex-col justify-around gap-6">
      <SectionHeader id="founder" title="Founders" />
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4">
        {siteConfig.founders.map((founder, index) => (
          <Card
            cardClass="even:my-4 hover:cursor-pointer"
            imageSource={founder.imageSource}
            imageWidth={333}
            key={index}
            imageHeight={333}
            title={
              <AdvocateTitle
                title={founder.name}
                url={founder.linkedin}
                icon={linkedinIcon}
              />
            }
            description={founder.position}
          />
        ))}
      </div>
    </div>
  );
}
