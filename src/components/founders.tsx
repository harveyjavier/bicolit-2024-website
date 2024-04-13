import Card from "@/components/card";
import { siteConfig } from "@/config/site";
import AdvocateTitle from "./advocate-title";
import linkedinIcon from "../../public/assets/linkedin.svg";
import SectionHeader from "./section-header";

export default function Founders() {
  return (
    <div
      id="founders"
      className="flex flex-wrap items-center justify-between gap-6 space-x-px"
    >
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
  );
}
