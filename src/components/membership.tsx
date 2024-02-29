import Input from "@/components/input";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";

export default function Membership() {
  const submitEmail = async (formData: FormData) => {
    "use server";

    const rawFormData = {
      firstName: formData.get("first_name"),
      lastName: formData.get("last_name"),
      email: formData.get("email"),
      mobileNumber: formData.get("mobile_number"),
    };
    console.log(rawFormData);
  };

  return (
    <section
      className="container flex items-center justify-center px-4 py-6 md:px-24 md:py-20 flex-col h-svh md:h-[40rem] bg-white"
      id="membership"
    >
      <div className="flex items-center justify-center flex-col ">
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
                required={index > 1}
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
            className="col-span-2 w-1/2 px-4 py-2 rounded-md font-helvetica_bold font-bold bg-[#6633CC] hover:bg-[#330066] focus:bg-[#330066] text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
