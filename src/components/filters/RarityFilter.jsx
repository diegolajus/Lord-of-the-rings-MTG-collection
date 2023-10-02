import React, { useState } from 'react';

const RarityFilter = ({ cards, handleFilter }) => {
  const uniqueRarities = [...new Set(cards.map((card) => card.rarity))];
  const [selectedRarity, setSelectedRarity] = useState('');

  const rarityEquivalences = {
    'rare': <i className="ss ss-ltr ss-rare  ss-2x"></i>,
    'mythic': <i className="ss ss-ltr ss-mythic ss-2x"></i> ,
    'uncommon': <i className="ss ss-ltr ss-uncommon ss-2x"></i>,
    'common': <i className="ss ss-ltr ss-common ss-2x"></i>,
  };

  const handleRarityFilter = (rarity) => {
    if (selectedRarity === rarity) {
      setSelectedRarity('');
      handleFilter('');
    } else {
      setSelectedRarity(rarity);
      handleFilter(rarity);
    }
  };

  return (
    <div>
      <div style={{display:"flex"}}>
        <button
          onClick={() => handleRarityFilter('')}
          className={`filter-btn ${selectedRarity === '' ? 'active' : ''}`}
        >
          All
        </button>
        {uniqueRarities.map((rarity) => (
          <button
            key={rarity}
            onClick={() => handleRarityFilter(rarity)}
            className={`filter-btn ${selectedRarity === rarity ? 'active' : ''}`}
          >
            {rarityEquivalences[rarity] || rarity}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RarityFilter;