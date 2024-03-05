type EmailProps = {
  subject: string;
  name: string;
};

type MembershipEmailProps = {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  email: string | null | undefined;
  mobileNumber: string | null | undefined;
};

type ContactEmailProps = MembershipEmailProps & {
  message?: string | null | undefined;
};
