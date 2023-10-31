"use client";
import { Button } from "@/components/ui/button";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = () => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }}
    validate={(values) => {
      const errors: { [key: string]: string | null } = {};

      Object.keys(values).forEach((val, i) => {
        const key = val as keyof typeof values;

        if (values[key] == null) errors[key] = "Required";
      });

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid Email Address";
      }

      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      //   setSubmitting(false);
      // }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form className="flex flex-col gap-10 bg-[#0F0E0B] w-full">
        <div className="flex  max-sm:flex-col gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="text-tertiary">
              First Name
            </label>
            <Field
              className="bg-transparent border-b"
              type="firstName"
              name="firstName"
            />
            <ErrorMessage name="firstName" component="div" />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="lastName" className="text-tertiary">
              Last Name
            </label>
            <Field
              className="bg-transparent border-b"
              type="lastName"
              name="lastName"
            />
            <ErrorMessage name="lastName" component="div" />
          </div>
        </div>

        <div className="flex max-sm:flex-col gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-tertiary">
              Email
            </label>
            <Field
              className="bg-transparent border-b"
              type="email"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="phone" className="text-tertiary">
              Phone Number
            </label>
            <Field
              className="bg-transparent border-b"
              type="phone"
              name="phone"
            />
            <ErrorMessage name="phone" component="div" />
          </div>
        </div>

        {["General Inquiry"].map((subject) => (
          <label key={subject} className="flex gap-2 items-center">
            <Field type="radio" name="subject" value={subject} />
            {subject}
          </label>
        ))}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-tertiary">
            Message
          </label>
          <Field
            className="bg-transparent border-b"
            type="message"
            name="message"
          />
          <ErrorMessage name="message" component="div" />
        </div>
        <Button
          className="self-end font-bold"
          variant={"outline"}
          type="submit"
          disabled={isSubmitting}
        >
          Send Message
        </Button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
