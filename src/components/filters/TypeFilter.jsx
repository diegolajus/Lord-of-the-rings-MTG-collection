import React, { useState } from 'react';

const TypeFilter = ({ cards, handleFilter }) => {
  const [selectedType, setSelectedType] = useState('');

  const handleChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    handleFilter(type);
  };

  const uniqueTypes = [...new Set(cards.map((card) => card.type_line))];

  return (
    <div className="type-filter-container">
      <label htmlFor="typeSelect" className="filter-label">
      </label>
      <select
        id="typeSelect"
        value={selectedType}
        onChange={handleChange}
        className="type-select"
      >
        <option value="">All</option>
        {uniqueTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
