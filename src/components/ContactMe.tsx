import { Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
// import { Message, SMTPClient } from "emailjs";
// @ts-ignore
import { useInViewport } from "react-in-viewport";
import ResponseModal from "./ResponseModal";
import { useStore } from "../utils/useStore";
import sendEmail from "../utils/sendEmail";

interface MyFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactMe: React.FC<{}> = ({ ...props }) => {
  const [modalTitle, setModalTitle] = useState(`Testing Modal Title`);
  const [modalMessage, setModalMessage] = useState(`Testing Modal Message`);
  const { showModal } = useStore();
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    message: "",
  };

  const contactMeRef = useRef(null);
  const { inViewport } = useInViewport(contactMeRef, {}, {}, props);
  const [enterAnimation, setEnterAnimation] = useState(
    "transition-opacity ease-out duration-1000 opacity-0"
  );
  useEffect(() => {
    if (inViewport) {
      setEnterAnimation(
        "transition-opacity ease-out duration-1000 opacity-100"
      );
    }
  }, [inViewport]);
  return (
    <>
      <div className="w-screen bg-primary h-screen relative overflow-x-hidden">
        <div className="container mx-auto mt-10 w-9/12">
          <h1
            className={`text-5xl font-heading text-secondary text-center ${enterAnimation} delay-1000`}
            ref={contactMeRef}
          >
            Contact Me
          </h1>

          <Formik
            initialValues={initialValues}
            onSubmit={async (
              values,
              { setErrors, setSubmitting, resetForm }
            ) => {
              if (values.message.length <= 3) {
                setSubmitting(false);
                setErrors({
                  message: "Looks like your message is not long enough 🤔",
                });
              } else {
                const response = await sendEmail(values);
                if (response.status === 200) {
                  setModalTitle("Thank you for contacting me!");
                  setModalMessage(`I'm hoping we can get in touch real soon.`);
                  resetForm();
                } else {
                  setModalTitle("Sorry, there is an error 😬");
                  setModalMessage(`Please try again`);
                }
                showModal();
                setSubmitting(false);
              }
            }}
          >
            {({ errors }) => (
              <Form className={`mt-12 ${enterAnimation} delay-1500`}>
                <div>
                  <label
                    htmlFor="name"
                    className="block font-light text-xl font-body pb-1 text-textColor"
                  >
                    Name
                  </label>
                  <Field
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="block w-full h-10 rounded-md focus:ring-4 focus:outline-none ring-pink-700 ring-opacity-75 pl-2"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block font-light text-xl font-body pb-1 text-textColor"
                  >
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="block w-full h-10 rounded-md focus:ring-4 focus:outline-none ring-pink-700 ring-opacity-75 pl-2"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="block font-light text-xl font-body pb-1 text-textColor"
                  >
                    Message
                  </label>
                  {errors.message ? (
                    <div className="bg-red-100 border border-red-400 text-red-700 font-body rounded px-3 py-4 opacity-80 mb-2">
                      {errors.message}
                    </div>
                  ) : null}
                  <Field
                    id="message"
                    name="message"
                    component="textarea"
                    rows="5"
                    placeholder="Your Message"
                    className="block w-full rounded-md focus:ring-4 focus:outline-none ring-pink-700 ring-opacity-75 pl-2"
                  />
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className="py-2 px-10 text-lg focus:ring-4 focus:outline-none ring-pink-700 flex-grow bg-secondary rounded-full hover:bg-pink-700 text-textColor font-light font-body mt-3"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ResponseModal
        title={modalTitle}
        message={modalMessage}
        // showModal={showModal}
        // hideModal={hideModal}
        // isModalShown={isModalShown}
      />
    </>
  );
};

export default ContactMe;
