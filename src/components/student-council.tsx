import Card from "@/components/card";
import { siteConfig } from "@/config/site";
import AdvocateTitle from "./advocate-title";
import linkedinIcon from "../../public/assets/linkedin.svg";
import SectionHeader from "./section-header";
import Image from "next/image";

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
          description={
            <>
              <div className="flex justify-between items-center">
                <span>{student.school}</span>
                <a
                  href={student.schoolSite}
                  className="relative h-full w-auto"
                  target="_blank"
                >
                  <Image
                    src={student.schoolLogo}
                    alt={`${student.school} icon`}
                    width={22}
                    height={22}
                  />
                </a>
              </div>
              <span>{student.position}</span>
            </>
          }
        />
      ))}
    </div>
  );
}
