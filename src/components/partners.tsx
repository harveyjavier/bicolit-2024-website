import { siteConfig } from "@/config/site";
import Image from "next/image";
import Input from "@/components/input";
import Plunk from "@plunk/node";
import { render } from "@react-email/render";
import { Email } from "@/components/email";

const formDetails = [
  ...siteConfig.formDetails,
  {
    placeholder: "Message",
    type: "message",
    name: "message",
  },
];

export default function Partners() {
  const submitEmail = async (formData: FormData) => {
    "use server";

    const rawFormData: ContactEmailProps = {
      firstName: formData.get("first_name")?.toString(),
      lastName: formData.get("last_name")?.toString(),
      email: formData.get("email")?.toString(),
      mobileNumber: formData.get("mobile_number")?.toString(),
      message: formData.get("message")?.toString(),
    };

    const key = process.env.PLUNK_API_KEY;
    if (!key) {
      throw new Error("Plunk API key is not set");
    }

    const fullName = `${rawFormData.firstName} ${rawFormData.lastName}`;
    const plunk = new Plunk(key);

    plunk.emails.send({
      to: "pitzzahh@gmail.com",
      subject: "Membership request",
      body: render(
        <Email
          name={fullName}
          subject="Membership request"
          firstName={rawFormData.firstName}
          lastName={rawFormData.lastName}
          email={rawFormData.email}
          mobileNumber={rawFormData.mobileNumber}
          message={rawFormData.message}
        />
      ),
    });
    console.log(rawFormData);

    // TODO: send email
    console.log(rawFormData);
  };
  return (
    <section
      className="container flex items-center justify-center px-4 py-6 md:px-24 md:py-20 flex-col gap-14 h-svg md:h-[45rem] bg-[#330066] text-white"
      id="partners"
    >
      <Image
        src={siteConfig.logo}
        alt="Bicol IT Logo"
        height={166}
        width={166}
        priority
      />
      <div className="flex items-start justify-start flex-col md:flex-row gap-6 w-full">
        <div className="flex flex-col items-start justify-center gap-6 ">
          <span className="font-helvetica_bold text-xl font-extrabold text-white">
            Contact Us
          </span>
          <div className="flex items-start justify-between flex-col gap-10">
            <div className="space-y-6">
              {siteConfig.contacts.info.map((contact, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-start justify-between w-full h-full text-sm"
                  >
                    <span>{contact.key}:</span>
                    <span className="text-right">{contact.value}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center md:items-start md:justify-start gap-6 w-full">
              {siteConfig.contacts.links.map((link, index) => {
                return (
                  <a key={index} href={link.url} target="_blank">
                    <Image
                      className="hover:fill-[#00CCFF]"
                      src={link.logo}
                      alt={`${link.name} icon`}
                      width={30}
                      height={30}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-6 w-full md:w-[50rem] grow">
          <span className="font-helvetica_bold text-xl font-extrabold text-white">
            Get in touch
          </span>
          <form
            action={submitEmail}
            className="grid grid-cols-2 grid-rows-3 gap-4 w-full place-items-center"
          >
            {formDetails.map((formDetail, index) => {
              return (
                <Input
                  name={formDetail.name}
                  key={index}
                  className={`w-full text-black ${
                    index <= 1
                      ? "basis-1/2"
                      : "col-span-2 invalid:border-red-900 invalid:text-red-900 focus:invalid:border-red-900 focus:invalid:text-red-900"
                  }`}
                  required={index > 1 && index < formDetails.length}
                  pattern={
                    formDetail.type === "tel"
                      ? "[0-9]{11}"
                      : formDetail.type === "email"
                      ? "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
                      : "^.*$"
                  }
                  large={formDetail.type === "message"}
                  placeholder={formDetail.placeholder}
                  type={formDetail.type}
                />
              );
            })}
            <button
              type="submit"
              className="col-span-2 w-1/2 px-4 py-2 mt-4 rounded-md font-helvetica_bold font-bold bg-[#6633CC] hover:bg-[#220044] focus:bg-[#220044] text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
