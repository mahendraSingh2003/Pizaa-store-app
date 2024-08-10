// src/components/DisplayAllItems.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const DisplayAllItems = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchitems();
  }, []);

  const  fetchitems=()=>{
    axios.get('http://localhost:5000/items')
    .then(response => setItems(response.data))
    .catch(error => console.error(error));
  }

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:5000/items/${id}`)
    .then(Response=>{
      fetchitems();
    })
    .catch(error=>{
      console.error('there was an error deleting item ',error)
    })
    }

  return (
    <div className="container mt-4">
      <h1>All Pizza</h1>
      <div className="row">
        {items.map(item => (
      // <li key={item.id}>{item.name} - {item.price}$</li>  
      <div className="col-md-4" key={item.id}>
        <div className="card mb-4">
          <img src={item.image} height={300} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">price: &#8377;{item.price}</p>
            <button className="btn btn-danger me-2" onClick={()=>{handleDelete(item.id)}}>DELETE</button>
            <button className="btn btn-warning " onClick={() => navigate(`/UpdateItem/${item.id}`)}>UPDATE</button>
            </div>
        </div>
        </div>
        ))}
    </div>
    </div>
  );
};

export default DisplayAllItems;
