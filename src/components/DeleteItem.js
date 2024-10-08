// src/components/DisplayAllItems.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayAllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://data-z5eq.onrender.com/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  const deleteItem = (id) => {
    axios.delete(`https://data-z5eq.onrender.com/items/${id}`)
      .then(response => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>All Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayAllItems;
