import * as React from "react";
import { Hr, Html, Heading, Img, Tailwind } from "@react-email/components";
import { siteConfig } from "@/config/site";

export function Email(props: EmailProps) {
  return (
    <Tailwind>
      <Html
        lang="en"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(to top left, #00C2FF 0%, #6633C2 60%, #330066 100%)",
        }}
      >
        <Img
          src={`${siteConfig.url}/images/bicolit-logo.png`}
          alt="Bicol IT Logo"
          width={166}
          height={166}
          style={{ margin: "0 auto" }}
        />
        <Hr />
        <Heading as="h1">{props.subject}</Heading>
        <div>
          <span>Name: {props.name}</span>
        </div>
      </Html>
    </Tailwind>
  );
}

export default Email;
