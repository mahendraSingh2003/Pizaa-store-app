// src/components/Contact.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        alert('Message sent successfully');
        setSubmitting(false);
      }}
    >
       <div className="container ">
      <Form>
      <div className="mb-3 ">
        <label htmlFor="name" className="form-label" >Name</label>
        <Field name="name" type="text" className="form-control" />
        <ErrorMessage name="name" className="text-danger" />
     </div>
     <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <Field name="email" type="email" className="form-control" />
        <ErrorMessage name="email" className="text-danger" />
      </div>
        <div className="mb-3">
        <label htmlFor="message"  className="form-label">Message</label>
        <Field name="message" as="textarea" className="form-control" />
        <ErrorMessage name="message" className="text-danger" />
    </div>
    <div className="mb-3">
        <button className="btn btn-primary " type="submit">Send Message</button>
        </div>
      </Form>
      </div>
    </Formik>
  );
};

export default Contact;
