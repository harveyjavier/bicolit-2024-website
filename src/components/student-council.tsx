import Card from "@/components/card";
import { siteConfig } from "@/config/site";
import AdvocateTitle from "./advocate-title";
import linkedinIcon from "../../public/assets/linkedin.svg";
import SectionHeader from "./section-header";

export default function StudentCouncil() {
  return (
    <div className="container px-4 py-6 md:px-24 flex h-auto flex-col justify-around gap-6">
      <SectionHeader id="student-council" title="Student Council" />
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4">
        {siteConfig.studentCouncil.map((student, index) => (
          <Card
            cardClass="even:my-4 hover:cursor-pointer"
            imageSource={student.imageSource}
            imageWidth={333}
            key={index}
            imageHeight={333}
            title={
              <AdvocateTitle
                title={student.name}
                url={student.linkedin}
                icon={linkedinIcon}
              />
            }
            description={student.position}
          />
        ))}
      </div>
    </div>
  );
}
