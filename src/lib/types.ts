type EmailProps = {
  name: string;
  subject: string;
  content?: string;
};

type MembershipEmailProps = {
  firstName: FormDataEntryValue | null;
  lastName: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  mobileNumber: FormDataEntryValue | null;
};
