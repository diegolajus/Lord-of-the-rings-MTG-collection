import React from 'react';
// import LegalitiesAccordion from './LegalitiesAccordion';
import '../styles/LegalitiesAccordion.css'
const CardGrid = ({ cards, selectedCards, handleSelectedCard }) => {
  return (
    <div className="cardGrid card-image-grid-view-default">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card ${selectedCards.includes(card.name) ? 'selectedCard' : ''}`}
          id="card"
          onClick={(e) => handleSelectedCard(e, card.name)}
        >
          <div className="card-overlay">
            <p className="hidden-stat">Name : {card.name}</p>
            <p className="hidden-stat">Type : {card.type_line}</p>
            <p className="hidden-stat">Colors : {card.colors}</p>
            <p className="hidden-stat">Mana Cost : {card.mana_cost}</p>
            <p className="hidden-stat">Rarity : {card.rarity}</p>
            <p className="hidden-stat">Power: {card.power}</p>
            <p className="hidden-stat">Border Color : {card.border_color}</p>
            <p className="hidden-stat">Artist : {card.artist}</p>
            {/* <LegalitiesAccordion legalities={card.legalities} /> */}

          </div>
          <img className="card-image" src={card.image_uris.large} alt={card.name} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
