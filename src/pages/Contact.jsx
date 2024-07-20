import Breadcrumb from "../components/Breadcrumb";
import Helmet from "../components/Helmet";
import { MdOutlineStorefront } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

const contactData = [
  {
    icon: <MdOutlineStorefront size={23} />,
    title: "Address",
    content: "NYC, United Sates",
  },
  {
    icon: <LuPhoneCall size={23} />,
    title: "Phone",
    content: "+123456789",
  },
  {
    icon: <MdOutlineEmail size={23} />,
    title: "Email",
    content: "email@example.com",
  },
];

const Contact = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Helmet title="Contact">
      <Breadcrumb />
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-4 justify-center md:flex-row lg:flex-row md:flex-wrap md:justify-between">
          {contactData.map((info, index) => (
            <div
              key={index}
              className="bg-neutral-200 w-full lg:w-[313px] mx-auto py-4 flex flex-col items-center justify-center"
            >
              <span>{info.icon}</span>
              <p className="uppercase text-neutral-500 font-semibold">
                {info.title}
              </p>
              <p>{info.content}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse gap-7 lg:flex-row my-14">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-3">
                <label className="pb-2 uppercase text-neutral-500 font-semibold">Full name</label>
                <input
                  className="border-2 px-3 py-1 rounded-lg"
                  type="text"
                  name="fullName"
                  placeholder="Your Name"
                  onChange={handleChange}
                  value={inputs.fullName}
                  required
                />
              </div>
              <div className="flex flex-col mb-3">
                <label className="pb-2 uppercase text-neutral-500 font-semibold">Email Address</label>
                <input
                  className="border-2 px-3 py-1 rounded-lg"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  value={inputs.email}
                />
              </div>
              <div className="flex flex-col mb-3">
                <label className="pb-2 uppercase text-neutral-500 font-semibold">Message</label>
                <textarea
                  className="border-2 px-3 py-1 rounded-lg"
                  type="text"
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  onChange={handleChange}
                  value={inputs.message}
                />
              </div>
              <button
                type="submit"
                className="bg-[#ff4648] px-7 py-2 rounded-lg mt-3 text-white font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622732494!2d-74.30932777004287!3d40.697019286161634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sde!4v1720531821781!5m2!1sen!2sde"
              width="100%"
              height={404}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Contact;
