import React, { useState } from 'react';


import greenIcon from '../../assets/icons/green.png';
import blueIcon from '../../assets/icons/blue.png';
import redIcon from '../../assets/icons/red.png';
import whiteIcon from '../../assets/icons/white.png';
import blackIcon from '../../assets/icons/black.png';

const imageGreenIcon = <img className='filter-icon' src={greenIcon} alt="green" />
const imageBlueIcon = <img className='filter-icon' src={blueIcon} alt="green" />
const imageRedIcon = <img className='filter-icon' src={redIcon} alt="green" />
const imageWhiteIcon = <img className='filter-icon' src={whiteIcon} alt="green" />
const imageBlackIcon = <img className='filter-icon' src={blackIcon} alt="green" />

const ColorFilter = ({ cards, handleFilter }) => {
  const colorEquivalences = {
    W: imageWhiteIcon,
    B: imageBlackIcon,
    R: imageRedIcon,
    U: imageBlueIcon,
    G: imageGreenIcon,
  };
  

  const uniqueColors = [...new Set(cards.flatMap((card) => card.colors))];
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorFilter = (color) => {
    if (selectedColor === color) {
      setSelectedColor('');
      handleFilter('');
    } else {
      setSelectedColor(color);
      handleFilter(color);
    }
  };

  return (
    <div>
      {/* <label>Filter by Color:</label> */}
      <div style={{display:"flex"}}>
        <button
          onClick={() => handleColorFilter('')}
          className={`filter-btn ${selectedColor === '' ? 'active' : ''}`}
        >
          All
        </button>
        {uniqueColors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorFilter(color)}
            className={`filter-btn ${selectedColor === color ? 'active' : ''}`}
          >
            {colorEquivalences[color] || color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;