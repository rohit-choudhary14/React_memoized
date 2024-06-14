// src/components/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredItems } from './store/selectors';

function App() {
  const filteredItems = useSelector(getFilteredItems);

  return (
    <div>
      <h1>Filtered Items</h1>
      <ul>
        {filteredItems.map(item => (
          <h3 key={item.id}>{item.name}</h3>
        ))}
      </ul>
    </div>
  );
}

export default App;
