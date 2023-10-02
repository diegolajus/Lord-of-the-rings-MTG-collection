import React, { useState } from 'react';

const CardFilter = ({ cards, handleFilter }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleChange = (event) => {
    setFilterValue(event.target.value);
    handleFilter(event.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="text-filter-container">
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        placeholder="Search by Card Name"
        className="filter-input"
      />
      {filterValue !== '' && filteredCards.length === 0 && <p className="no-matches">No matches!</p>}
    </div>
  );
};

export default CardFilter;
