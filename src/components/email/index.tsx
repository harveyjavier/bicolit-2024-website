import * as React from "react";
import { Html, Img, Heading, Text, Tailwind } from "@react-email/components";
import { siteConfig } from "@/config/site";

type MembershipEmailProps = {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  email: string | null | undefined;
  mobileNumber: string | null | undefined;
};

type ContactEmailProps = MembershipEmailProps & {
  message?: string | null | undefined;
};

export function Email(props: MembershipEmailProps | ContactEmailProps) {
  const isMembershipEmail =
    "firstName" in props &&
    "lastName" in props &&
    "email" in props &&
    "mobileNumber" in props;

  return (
    <Tailwind>
      <Html lang="en">
        <div
          className="flex items-center justify-center flex-col"
          style={{
            fontFamily: "Arial, sans-serif",
            background: "linear-gradient(to bottom right, #00C2FF, #6633C2)",
          }}
        >
          <Img
            src={`${siteConfig.url}/images/bicolit-logo.png`}
            alt="Bicol IT Logo"
            width={166}
            height={166}
          />
          <Heading
            as="h1"
            style={{ color: "#ffffff", fontSize: "24px", margin: "10px 0" }}
          >
            Welcome to Bicol IT!
          </Heading>
          {isMembershipEmail ? (
            <MembershipContent {...(props as MembershipEmailProps)} />
          ) : (
            <ContactContent {...(props as ContactEmailProps)} />
          )}
        </div>
      </Html>
    </Tailwind>
  );
}

function MembershipContent(props: MembershipEmailProps) {
  return (
    <>
      <Text style={{ color: "#ffffff", fontSize: "16px", margin: "10px 0" }}>
        Hi {props.firstName} {props.lastName},
      </Text>
      <Text style={{ color: "#ffffff", fontSize: "16px", margin: "10px 0" }}>
        Thank you for your interest in joining Bicol IT! We are excited to
        welcome you as a member.
      </Text>
      <Text style={{ color: "#ffffff", fontSize: "16px", margin: "10px 0" }}>
        Our team will review your application shortly and get back to you with
        further details.
      </Text>
      <Text style={{ color: "#ffffff", fontSize: "16px", margin: "10px 0" }}>
        If you have any questions in the meantime, feel free to reach out to us
        at {props.email} or {props.mobileNumber}.
      </Text>
    </>
  );
}

function ContactContent(props: ContactEmailProps) {
  return (
    <>
      <Text style={{ color: "#ffffff", fontSize: "16px", margin: "10px 0" }}>
        Hi there,
      </Text>
      <Text style={{ color: "#ffffff", fontSize: "16px", margin: "10px 0" }}>
        Thank you for reaching out to Bicol IT! We are thrilled to hear from
        you.
      </Text>
      <Text style={{ color: "#ffffff", fontSize: "16px", margin: "10px 0" }}>
        How can we assist you? Please let us know what you need, and we'll be
        happy to help.
      </Text>
      {props.message && (
        <Text style={{ color: "#ffffff", fontSize: "16px", margin: "10px 0" }}>
          Message: {props.message}
        </Text>
      )}
      <Text style={{ color: "#ffffff", fontSize: "16px", margin: "10px 0" }}>
        You can also contact us directly at {props.email} or{" "}
        {props.mobileNumber}.
      </Text>
    </>
  );
}

export default Email;
