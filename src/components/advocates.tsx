import Card from "@/components/card";
import { siteConfig } from "@/config/site";
import AdvocateTitle from "./advocate-title";
import { LinkedInLogo } from "@/assets/logo";

export default function Advocates() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 space-x-px">
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
              icon={LinkedInLogo}
            />
          }
          description={advocate.position}
        />
      ))}
    </div>
  );
}
