import Input from "@/components/input";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";
import Plunk from "@plunk/node";
import { render } from "@react-email/render";
import { Email } from "@/components/email";

export default function Membership() {
  const submitEmail = async (formData: FormData) => {
    "use server";
    console.log("submitting email");

    const rawFormData: MembershipEmailProps = {
      firstName: formData.get("first_name")?.toString(),
      lastName: formData.get("last_name")?.toString(),
      email: formData.get("email")?.toString(),
      mobileNumber: formData.get("mobile_number")?.toString(),
    };

    const key = process.env.PLUNK_API_KEY;
    if (!key) {
      throw new Error("Plunk API key is not set");
    }

    const plunk = new Plunk(key);

    await plunk.emails.send({
      to: siteConfig.contacts.info[2].value,
      subject: "Membership request",
      body: render(
        <Email
          firstName={rawFormData.firstName}
          lastName={rawFormData.lastName}
          email={rawFormData.email}
          mobileNumber={rawFormData.mobileNumber}
        />
      ),
    });
    formData.delete("first_name");
    formData.delete("last_name");
    formData.delete("email");
    formData.delete("mobile_number");
  };

  return (
    <section
      className="p-2 flex items-center justify-center px-4 py-6 md:px-24 md:py-20 flex-col h-full md:h-auto bg-[#E8E2EE] text-black"
      id="membership"
    >
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center text-[#330066] mb-10">
          Bicol IT 2024 Membership Plan
        </h1>
        <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6 justify-center">
          <div className="flex-1 max-w-sm mx-auto bg-[#00CCFF] rounded-lg shadow-md p-6 w-full">
            <h2 className="text-2xl font-semibold text-[#330066] text-center mb-4">
              Basic
            </h2>
            <p className="text-lg font-bold text-[#330066] text-center mb-4">
              Free
            </p>
            <ul className="text-[#330066] list-disc pl-5 mb-4">
              <li>Recognized as part of the official Bicol IT community</li>
              <li>Bicol IT user id/badge</li>
              <li>Online group access and privilege</li>
            </ul>
          </div>
          <div className="flex-1 max-w-sm mx-auto bg-[#6633CC] text-white rounded-lg shadow-md p-6 w-full">
            <h2 className="text-2xl font-semibold text-white text-center bg-[#6633CC] mb-4">
              Growth
            </h2>
            <p className="text-lg line-through opacity-50 text-white text-center mb-1">
              ₱399.00
            </p>
            <p className="text-2xl font-bold text-white text-center mb-4">
              ₱249.00
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>All Basic access</li>
              <li>Discounts on paid events</li>
              <li>Bicol IT identification card</li>
            </ul>
          </div>
          <div className="flex-1 max-w-sm mx-auto bg-[#330066] text-white rounded-lg shadow-md p-6 w-full">
            <h2 className="text-2xl font-semibold text-white text-center mb-4">
              Pro
            </h2>
            <p className="text-lg line-through opacity-50 text-white text-center mb-1">
              ₱799.00
            </p>
            <p className="text-2xl font-bold text-white text-center mb-4">
              ₱499.00
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>All Growth access</li>
              <li>Vouchers to access paid events</li>
              <li>Exclusive access to paid events and merch</li>
              <li>Bicol IT Pro group membership</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TODO: Finish email integration */}
      {/* <div className="flex items-center justify-center flex-col ">
        <div className="flex items-center justify-center flex-col mb-10 gap-4">
          <span className="text-3xl text-[#330066] font-helvetica_bold font-bold">
            Join us now
          </span>
          <p className="text-black text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <form
          action={submitEmail}
          className="grid place-content-center place-items-center grid-cols-2 grid-rows-4 gap-4 w-full md:px-16 p-2"
        >
          {siteConfig.formDetails.map((formDetail, index) => {
            return (
              <Input
                name={formDetail.name}
                key={index}
                className={`w-full text-black ${
                  index <= 1
                    ? "basis-1/2"
                    : "col-span-2 invalid:border-red-900 invalid:text-red-900 focus:invalid:border-red-900 focus:invalid:text-red-900"
                }`}
                required={true}
                pattern={
                  formDetail.type === "tel"
                    ? "[0-9]{11}"
                    : formDetail.type === "email"
                    ? "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
                    : "^.*$"
                }
                placeholder={formDetail.placeholder}
                type={formDetail.type}
              />
            );
          })}
          <button
            type="submit"
            className="col-span-2 w-1/2 pt-2 pb-1 rounded-md font-helvetica_bold font-bold bg-[#6633CC] hover:bg-[#330066] focus:bg-[#330066] text-white"
          >
            Submit
          </button>
        </form>
      </div> */}
      <a
        href={siteConfig.contacts.membership}
        target="_blank"
        className="pt-4 pb-2 px-4 rounded-md font-helvetica_bold font-bold bg-[#6633CC] hover:bg-[#330066] focus:bg-[#330066] text-white text-center "
      >
        Join Us Now
      </a>
    </section>
  );
}
