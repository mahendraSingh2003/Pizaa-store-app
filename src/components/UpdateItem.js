// src/components/UpdateItem.js
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5000/items/${id}`)
      .then(response => setItem(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return item ? (
    <Formik
      initialValues={{image:item.image,name: item.name, price: item.price }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        price: Yup.number().required('Required').positive('Must be positive')
      })}
      onSubmit={(values, { setSubmitting }) => {
        axios.put(`http://localhost:5000/items/${id}`, values)
          .then(response => {
            alert('Item updated successfully');
            setSubmitting(false);
            navigate('/items');
          })
          .catch(error => {
            console.error(error);
            setSubmitting(false);
          });
      }}
    >
       <div className="container ">
      <Form>
      <div className="mb-3 ">
      <label htmlFor="image" className="form-label">Image URL</label>
      <Field id="image" name="image" type="text"  className="form-control" />
      </div>
      <div className="mb-3 ">
        <label htmlFor="name" className="form-label">Name</label>
        <Field name="name" type="text"  className="form-control" />
        <ErrorMessage name="name" />
        </div>
        <div className="mb-3 ">
        <label htmlFor="price" className="form-label">Price</label>
        <Field name="price" type="text"  className="form-control" />
        <ErrorMessage name="price" />
        </div> 
        <button type='cancel' className="btn btn-secondary m-3">Cancel</button>
        <button type="submit" className="btn btn-primary">Update Item</button>
      </Form>
      </div>
    </Formik>
  ) : <div>Loading...</div>;
};

export default UpdateItem;
