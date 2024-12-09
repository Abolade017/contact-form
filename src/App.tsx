import { FormEvent, useState } from "react";
import "./App.css";
function App() {
  interface InputFields {
    firstname: string;
    lastname: string;
    email: string;
    consent: boolean;
    message: string;
    queryType: string;
  }
  const [inputFields, setInputField] = useState<InputFields>({
    firstname: "",
    lastname: "",
    email: "",
    consent: false,
    message: "",
    queryType: "",
  });
  type Errors = Partial<Record<keyof InputFields, string>>;
  const [errors, setErrors] = useState<Errors>({});
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateInput = (inputValues: InputFields) => {
    let errors: any = {};
    if (!inputValues.firstname) {
      errors.firstname = "This field is required";
    }
    if (!inputValues.lastname) {
      errors.lastname = "This field is required";
    }
    if (!inputValues.email.includes("@")) {
      errors.email = "Please enter a valid email address";
    }
    // if (
    //   !emailRegex.test(inputValues.email)
    // ) {
    //   errors.email = "This Field is required";
    // }
    if (!inputValues.queryType) {
      errors.queryType = "Please select a query type";
    }
    if (!inputValues.message) {
      errors.message = "This field is required";
    }
    if (inputValues.consent === false) {
      errors.consent = "To submit this form, please consent to being contacted";
    }
    return errors;
  };
  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setInputField((inputFields) => ({
      ...inputFields,
      [e.target.name]: (e.target as HTMLInputElement).value,
    }));
  }

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(inputFields);
    setErrors(validateInput(inputFields));
  };
  return (
    <>
      <div className="max-w-3xl mx-auto my-0 md:my-48">
        <div className="bg-Neutral-White rounded-xl">
          <form action="" onSubmit={submitForm}>
            <div className="px-6 flex flex-col space-y-6 pt-12 pb-10">
              <h1 className="text-3xl text-Neutral-Grey-darker font-karla">
                Contact Us
              </h1>
              <div className="flex md:flex-row flex-col justify-start md:justify-between  space-x-0 md:space-x-6 ">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="firstname"
                    className="text-Neutral-Grey-darker font-karla"
                  >
                    First Name{" "}
                    <sup className="text-Green-medium pl-[4px] font-karla">
                      *
                    </sup>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={inputFields.firstname}
                    onChange={handleChange}
                    className="border border-Neutral-Grey-medium rounded-md h-12 w-full mt-3 font-karla text-Neutral-Grey-darker pl-6  hover:border-Green-medium"
                    style={{
                      // @ts-ignore
                      border: errors.firstname
                        ? "1px solid hsl(0, 66%, 54%)"
                        : null,
                    }}
                  />
                  {errors.firstname && !inputFields.firstname ? (
                    <p className="text-Red pt-[4px] font-karla">
                      {errors.firstname}
                    </p>
                  ) : null}
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="lastname"
                    className="text-Neutral-Grey-darker font-karla "
                  >
                    Last Name{" "}
                    <sup className="text-Green-medium pl-[4px] font-karla">
                      *
                    </sup>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={inputFields.lastname}
                    onChange={handleChange}
                    className="border border-Neutral-Grey-medium rounded-md h-12 w-full mt-3 font-karla text-Neutral-Grey-darker pl-6 hover:border-Green-medium"
                    style={{
                      // @ts-ignore
                      border: errors.lastname
                        ? "1px solid hsl(0, 66%, 54%)"
                        : null,
                    }}
                  />
                  {errors.lastname && !inputFields.lastname ? (
                    <p className="text-Red pt-[4px] font-karla">
                      {errors.lastname}
                    </p>
                  ) : null}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className=" text-Neutral-Grey-darker font-karla"
                >
                  Email Address{" "}
                  <sup className="text-Green-medium pl-[4px]">*</sup>
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={inputFields.email}
                  onChange={handleChange}
                  className="border border-Neutral-Grey-medium rounded-md h-12 w-full mt-3 font-karla text-Neutral-Grey-darker pl-6 hover:border-Green-medium"
                  style={{
                    // @ts-ignore
                    border: errors.email ? "1px solid hsl(0, 66%, 54%)" : null,
                  }}
                />
                {errors.email && !inputFields.email ? (
                  <p className="text-Red pt-[4px] font-karla">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="querytype"
                  className="text-Neutral-Grey-darker font-karla "
                >
                  Query Type{" "}
                  <sup className="text-Green-medium pl-[4px] font-karla">*</sup>
                </label>
                <br />
                <div className="flex md:flex-row flex-col justify-start md:justify-between space-x-0 md:space-x-6 space-y-3 md:space-y-0 mt-3 ">
                  <div className="w-full md:w-1/2 relative border border-Neutral-Grey-medium rounded-md h-12 hover:border-Green-medium">
                    <input
                      type="radio"
                      name="queryType"
                      id=""
                      value="general enquiry"
                      checked={inputFields.queryType === "general enquiry"}
                      className="absolute left-6 bottom-3 h-5 w-5 appearance-none border border-Neutral-Grey-medium rounded-full text-Neutral-Grey-medium hover:border-Green-medium"
                      onChange={handleChange}
                      style={{
                        //@ts-ignore
                        border: "ipx solid hsl(0, 66%, 54%) ",
                      }}
                    />
                    <label
                      htmlFor="general enquiry"
                      className="absolute left-14 top-2.5 font-karla text-lg text-Neutral-Grey-darker"
                    >
                      General Enquiry
                    </label>
                  </div>
                  <div className=" w-full md:w-1/2 relative border border-Neutral-Grey-medium rounded-md h-12 hover:border-Green-medium">
                    <input
                      type="radio"
                      name="queryType"
                      value="support request"
                      id=""
                      checked={inputFields.queryType === "support request"}
                      className="absolute left-6 bottom-3 h-5 w-5 appearance-none border border-Neutral-Grey-medium  rounded-full  font-karla hover:border-Green-medium"
                    />
                    <label
                      htmlFor="support request"
                      className="absolute left-14 top-2.5 font-karla text-lg text-Neutral-Grey-darker"
                    >
                      Support Request
                    </label>
                  </div>
                </div>
                {errors.queryType ? (
                  <p className="pt-[4px] text-Red font-karla">
                    {errors.queryType}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="querytype"
                  className="text-Neutral-Grey-darker font-karla "
                >
                  Message{" "}
                  <sup className="text-Green-medium pl-[4px] font-karla">*</sup>
                </label>
                <br />
                <textarea
                  name="message"
                  id="message"
                  value={inputFields.message}
                  onChange={handleChange}
                  className="border border-Neutral-Grey-medium rounded-md h-56 md:h-24 w-full mt-3 font-karla text-Neutral-Grey-darker pl-6 resize-none hover:border-Green-medium"
                  style={{
                    // @ts-ignore
                    border: errors.message
                      ? "1px solid hsl(0, 66%, 54%)"
                      : null,
                  }}
                ></textarea>
                {errors.message ? (
                  <p className="text-Red pt-[4px] font-karla">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <div className="relative pb-8 md:pb-4">
                <input
                  type="checkbox"
                  name="consent"
                  id=""
                  className=""
                  checked={inputFields.consent}
                  onChange={handleChange}
                />
                <label
                  htmlFor="consent"
                  className="text-Neutral-Grey-darker font-karla left-6 absolute "
                >
                  I consent to being contacted by the team{" "}
                  <sup className="text-Green-medium pl-[4px] font-karla">*</sup>
                </label>
                {errors.consent ? (
                  <p className="text-Red pt-[4px] font-karla">
                    {errors.consent}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-Green-medium h-14 rounded-md font-karla mt-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
