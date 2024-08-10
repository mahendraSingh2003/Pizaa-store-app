## Project Documentation: Pizza Store React Application

### Table of Contents
1. [Setup Project Environment](#setup-project-environment)
2. [Install Required Packages](#install-required-packages)
3. [Create JSON Server](#create-json-server)
4. [Create React Components](#create-react-components)
5. [Implement Navigation and Routing](#implement-navigation-and-routing)
6. [Ensure Responsiveness](#ensure-responsiveness)
7. [Use React Hooks](#use-react-hooks)
8. [Documentation](#documentation)

### Setup Project Environment

1. **Install Node.js and npm (Node Package Manager)**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).
   - Verify the installation by running the following commands in your terminal:
     ```bash
     node -v
     npm -v
     ```

2. **Create a new directory for your project and initialize a new React project**
   - Open your terminal and run:
     ```bash
     npx create-react-app pizza-store
     cd pizza-store
     ```

### Install Required Packages

1. **Install the following npm packages:**
   - `react-router-dom` for routing:
     ```bash
     npm install react-router-dom
     ```
   - `bootstrap` for responsiveness:
     ```bash
     npm install bootstrap
     ```
   - `formik` and `yup` for form handling and validation:
     ```bash
     npm install formik yup
     ```
   - `axios` for HTTP requests:
     ```bash
     npm install axios
     ```

### Create JSON Server

1. **Set up a JSON server to act as a backend for storing pizza store items**
   - Install JSON Server globally:
     ```bash
     npm install -g json-server
     ```
   - Create a `db.json` file in the root directory of your project with initial data:
     ```json
     {
       "items": [
         { "id": 1, "name": "Margherita", "price": 10, "description": "Classic cheese and tomato pizza" },
         { "id": 2, "name": "Pepperoni", "price": 12, "description": "Pepperoni pizza with extra cheese" }
       ]
     }
     ```
   - Start the JSON server:
     ```bash
     json-server --watch db.json --port 5000
     ```

### Create React Components

1. **Implement the following components:**

   - **Home**: A landing page with a welcome message.
     ```jsx
     // src/components/Home.js
     import React from 'react';

     const Home = () => (
       <div className="container">
         <h1>Welcome to the Pizza Store</h1>
       </div>
     );

     export default Home;
     ```

   - **About**: A page with information about the pizza store.
     ```jsx
     // src/components/About.js
     import React from 'react';

     const About = () => (
       <div className="container">
         <h1>About Us</h1>
         <p>We offer the best pizzas in town!</p>
       </div>
     );

     export default About;
     ```

   - **DisplayAllItems**: A page to display all items in the pizza store.
     ```jsx
     // src/components/DisplayAllItems.js
     import React, { useEffect, useState } from 'react';
     import axios from 'axios';

     const DisplayAllItems = () => {
       const [items, setItems] = useState([]);

       useEffect(() => {
         axios.get('http://localhost:5000/items')
           .then(response => setItems(response.data))
           .catch(error => console.error('Error fetching items:', error));
       }, []);

       return (
         <div className="container">
           <h1>All Items</h1>
           <ul>
             {items.map(item => (
               <li key={item.id}>{item.name} - ${item.price}</li>
             ))}
           </ul>
         </div>
       );
     };

     export default DisplayAllItems;
     ```

   - **AddNewItem**: A form to add a new item using Formik and Yup.
     ```jsx
     // src/components/AddNewItem.js
     import React from 'react';
     import { Formik, Form, Field, ErrorMessage } from 'formik';
     import * as Yup from 'yup';
     import axios from 'axios';

     const AddNewItem = () => {
       const initialValues = { name: '', price: '', description: '' };
       const validationSchema = Yup.object({
         name: Yup.string().required('Required'),
         price: Yup.number().required('Required').positive('Must be a positive number'),
         description: Yup.string().required('Required'),
       });

       const onSubmit = (values, { resetForm }) => {
         axios.post('http://localhost:5000/items', values)
           .then(response => {
             console.log('Item added:', response.data);
             resetForm();
           })
           .catch(error => console.error('Error adding item:', error));
       };

       return (
         <div className="container">
           <h1>Add New Item</h1>
           <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
             <Form>
               <div className="form-group">
                 <label htmlFor="name">Name</label>
                 <Field name="name" type="text" className="form-control" />
                 <ErrorMessage name="name" component="div" className="text-danger" />
               </div>
               <div className="form-group">
                 <label htmlFor="price">Price</label>
                 <Field name="price" type="number" className="form-control" />
                 <ErrorMessage name="price" component="div" className="text-danger" />
               </div>
               <div className="form-group">
                 <label htmlFor="description">Description</label>
                 <Field name="description" as="textarea" className="form-control" />
                 <ErrorMessage name="description" component="div" className="text-danger" />
               </div>
               <button type="submit" className="btn btn-primary">Add Item</button>
             </Form>
           </Formik>
         </div>
       );
     };

     export default AddNewItem;
     ```

   - **UpdateItem**: A form to update an existing item using Formik and Yup.
     ```jsx
     // src/components/UpdateItem.js
     import React, { useState, useEffect } from 'react';
     import { useParams } from 'react-router-dom';
     import { Formik, Form, Field, ErrorMessage } from 'formik';
     import * as Yup from 'yup';
     import axios from 'axios';

     const UpdateItem = () => {
       const { id } = useParams();
       const [item, setItem] = useState(null);

       useEffect(() => {
         axios.get(`http://localhost:5000/items/${id}`)
           .then(response => setItem(response.data))
           .catch(error => console.error('Error fetching item:', error));
       }, [id]);

       const validationSchema = Yup.object({
         name: Yup.string().required('Required'),
         price: Yup.number().required('Required').positive('Must be a positive number'),
         description: Yup.string().required('Required'),
       });

       const onSubmit = (values) => {
         axios.put(`http://localhost:5000/items/${id}`, values)
           .then(response => {
             console.log('Item updated:', response.data);
           })
           .catch(error => console.error('Error updating item:', error));
       };

       if (!item) return <div>Loading...</div>;

       return (
         <div className="container">
           <h1>Update Item</h1>
           <Formik initialValues={item} validationSchema={validationSchema} onSubmit={onSubmit}>
             <Form>
               <div className="form-group">
                 <label htmlFor="name">Name</label>
                 <Field name="name" type="text" className="form-control" />
                 <ErrorMessage name="name" component="div" className="text-danger" />
               </div>
               <div className="form-group">
                 <label htmlFor="price">Price</label>
                 <Field name="price" type="number" className="form-control" />
                 <ErrorMessage name="price" component="div" className="text-danger" />
               </div>
               <div className="form-group">
                 <label htmlFor="description">Description</label>
                 <Field name="description" as="textarea" className="form-control" />
                 <ErrorMessage name="description" component="div" className="text-danger" />
               </div>
               <button type="submit" className="btn btn-primary">Update Item</button>
             </Form>
           </Formik>
         </div>
       );
     };

     export default UpdateItem;
     ```

   - **DeleteItem**: A functionality to delete an item.
     ```jsx
     // src/components/DeleteItem.js
     import React from 'react';
     import axios from 'axios';

     const DeleteItem = ({ id, onDelete }) => {
       const handleDelete = () => {
         axios.delete(`http://localhost:5000/items/${id}`)
           .then(() => {
             console.log('Item deleted');
             onDelete(id);
           })
           .catch(error => console.error

('Error deleting item:', error));
       };

       return (
         <button onClick={handleDelete} className="btn btn-danger">Delete</button>
       );
     };

     export default DeleteItem;
     ```

   - **Contact**: A page with contact information and a contact form.
     ```jsx
     // src/components/Contact.js
     import React from 'react';
     import { Formik, Form, Field, ErrorMessage } from 'formik';
     import * as Yup from 'yup';

     const Contact = () => {
       const initialValues = { name: '', email: '', message: '' };
       const validationSchema = Yup.object({
         name: Yup.string().required('Required'),
         email: Yup.string().email('Invalid email format').required('Required'),
         message: Yup.string().required('Required'),
       });

       const onSubmit = (values, { resetForm }) => {
         console.log('Contact form submitted:', values);
         resetForm();
       };

       return (
         <div className="container">
           <h1>Contact Us</h1>
           <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
             <Form>
               <div className="form-group">
                 <label htmlFor="name">Name</label>
                 <Field name="name" type="text" className="form-control" />
                 <ErrorMessage name="name" component="div" className="text-danger" />
               </div>
               <div className="form-group">
                 <label htmlFor="email">Email</label>
                 <Field name="email" type="email" className="form-control" />
                 <ErrorMessage name="email" component="div" className="text-danger" />
               </div>
               <div className="form-group">
                 <label htmlFor="message">Message</label>
                 <Field name="message" as="textarea" className="form-control" />
                 <ErrorMessage name="message" component="div" className="text-danger" />
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
             </Form>
           </Formik>
         </div>
       );
     };

     export default Contact;
     ```

### Implement Navigation and Routing

1. **Set up routing for the application using `react-router-dom`**
   ```jsx
   // src/App.js
   import React from 'react';
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
   import Home from './components/Home';
   import About from './components/About';
   import DisplayAllItems from './components/DisplayAllItems';
   import AddNewItem from './components/AddNewItem';
   import UpdateItem from './components/UpdateItem';
   import Contact from './components/Contact';
   import Navbar from './components/Navbar';

   const App = () => {
     return (
       <Router>
         <Navbar />
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/about" component={About} />
           <Route path="/items" component={DisplayAllItems} />
           <Route path="/add" component={AddNewItem} />
           <Route path="/update/:id" component={UpdateItem} />
           <Route path="/contact" component={Contact} />
         </Switch>
       </Router>
     );
   };

   export default App;
   ```

2. **Ensure proper navigation between pages with a navbar**
   ```jsx
   // src/components/Navbar.js
   import React from 'react';
   import { Link } from 'react-router-dom';

   const Navbar = () => (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container">
         <Link className="navbar-brand" to="/">Pizza Store</Link>
         <div className="collapse navbar-collapse">
           <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <Link className="nav-link" to="/">Home</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/about">About</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/items">Items</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/add">Add New Item</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/contact">Contact</Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>
   );

   export default Navbar;
   ```

### Ensure Responsiveness

1. **Use Bootstrap to make the application responsive**
   - Ensure you import Bootstrap CSS in your `index.js` file:
     ```jsx
     // src/index.js
     import 'bootstrap/dist/css/bootstrap.min.css';
     import React from 'react';
     import ReactDOM from 'react-dom';
     import App from './App';
     import './index.css';

     ReactDOM.render(<App />, document.getElementById('root'));
     ```

2. **Ensure that all pages and components look good on different screen sizes**
   - Utilize Bootstrap classes to create a responsive layout throughout your components.

### Use React Hooks

1. **Utilize `useState` and `useEffect` hooks for managing state and side effects**
   - Ensure proper state management and data fetching from the JSON server using `axios`.

### Documentation

1. **Setup Instructions**
   - Follow the steps in the "Setup Project Environment" and "Install Required Packages" sections to set up the project environment.
   - Set up the JSON server as described in the "Create JSON Server" section.

2. **Component Descriptions**
   - `Home`: Displays a welcome message on the landing page.
   - `About`: Provides information about the pizza store.
   - `DisplayAllItems`: Fetches and displays all pizza items from the JSON server.
   - `AddNewItem`: A form for adding new pizza items, using Formik for form handling and Yup for validation.
   - `UpdateItem`: A form for updating existing pizza items, using Formik for form handling and Yup for validation.
   - `DeleteItem`: Provides a button to delete an item, using Axios to send a delete request to the JSON server.
   - `Contact`: Contains a contact form with validation using Formik and Yup.

3. **How to Use the Application**
   - Start the JSON server using `json-server --watch db.json --port 5000`.
   - Run the React application using `npm start`.
   - Navigate through the application using the navbar to access different pages such as Home, About, Items, Add New Item, Update Item, and Contact.
   - Use the "Add New Item" page to add new pizza items.
   - Use the "Items" page to view all items, update an item by navigating to the update form, and delete an item using the delete button.

This completes the documentation for setting up and using the Pizza Store React Application !!!.