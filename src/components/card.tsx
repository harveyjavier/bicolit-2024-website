import React, { ReactNode } from "react";
import Image from "next/image";
import CardTitle from "@/components/card-title";
import CardDescription from "./card-description";

type CardProps = {
  imageSource: any;
  title: ReactNode;
  contentStyle?: string;
  description: ReactNode;
  cardClass?: string;
  imgGradient?: string;
  imageWidth?: number;
  imageHeight?: number;
};
const Card: React.FC<CardProps> = ({
  imageSource,
  title,
  contentStyle,
  description,
  cardClass,
  imgGradient,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className={`flex justify-center flex-col gap-2 bg-white ${cardClass}`}>
      <div className="w-full h-full relative">
        <Image
          src={imageSource}
          alt={`${title} card image`}
          width={imageWidth ?? 500}
          height={imageHeight ?? 500}
          className={`object-cover ${imgGradient} grayscale hover:grayscale-0 transition-all duration-500 delay-50`}
        />
        {imgGradient && <div className={`absolute ${imgGradient}`} />}
      </div>
      <div className={contentStyle}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </div>
  );
};

export default Card;
