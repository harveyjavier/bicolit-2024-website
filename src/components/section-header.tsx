import React from "react";

interface Props {
  id: string;
  title: string;
}

const SectionHeader: React.FC<Props> = ({ id, title }) => {
  return (
    <div
      id={id}
      className="font-helvetica_bold text-2xl font-extrabold text-[#330066]"
    >
      {title}
    </div>
  );
};

export default SectionHeader;
