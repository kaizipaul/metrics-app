// YourComponent.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCollection } from '../Redux/homePage/homePage';

const MyCollection = () => {
  const items = useSelector((state) => state.character);
  const dispatch = useDispatch();

  // Function to handle the dispatch and update the 'added' property to false
  const handleRemoveItem = (id) => {
    dispatch(removeFromCollection(id));
  };

  // Filter items based on the 'added' property
  const addedItems = items.filter((item) => item.added).length === 0
    ? <p>Empty List</p>
    : items.filter((item) => item.added).map((item) => (
      <li key={item.id}>
        {item.name}
        {' '}
        -
        {item.description}
        <button type="button" onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
      </li>
    ));

  return (
    <div>
      <ul>
        {addedItems}
      </ul>
    </div>
  );
};

export default MyCollection;
