import Card from "@/components/card";
import { siteConfig } from "@/config/site";
import AdvocateTitle from "./advocate-title";
import linkedinIcon from "../../public/assets/linkedin.svg";
import SectionHeader from "./section-header";

export default function StudentCouncil() {
  return (
    <div
      id="student-council"
      className="flex flex-wrap items-center justify-between gap-6 space-x-px"
    >
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
  );
}
