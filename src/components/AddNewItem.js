// src/components/AddNewItem.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import axios from 'axios';

const AddNewItem = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ name: '', price: '' }}
      validationSchema={Yup.object({
        image: Yup.string().required('Image URL is required'),
        name: Yup.string().required('Required'),
        price: Yup.number().required('Required').positive('Must be positive')
      })}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:5000/items', values)
          .then(response => {
            alert('Item added successfully');
            setSubmitting(false);
            navigate('/items');
          })
          .catch(error => {
            console.error(error);
            setSubmitting(false);
          });
      }}> 
      <div className="container ">
      <Form>
       <div className="pt-3 pb-3 ">
      <label htmlFor="image" className="form-label">Image URL</label>
      <Field  name="image" type="text"  className="form-control" placeholder="Enter Image Url..."/>
      <ErrorMessage name="url" />
       </div>
       <div className="pt-3 pb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <Field name="name"  className="form-control" type="text" placeholder="Enter Name..." />
        <ErrorMessage name="name"  />
        </div>
        <div className="pt-1 pb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <Field name="price"  className="form-control" type="text" placeholder="Enter Price..." />
        <ErrorMessage name="price" />
        </div>
        <div className="pt-2 pb-3">
        <button type="submit" className="btn btn-primary mt">Add Item</button>
        </div>
      </Form>
      </div>
    </Formik>
  );
};

export default AddNewItem;
