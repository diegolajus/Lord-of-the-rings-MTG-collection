import React, { useEffect, useState } from 'react';

import CardGrid from './components/CardGrid';
import TextFilter from './components/filters/TextFilter';
import RarityFilter from './components/filters/RarityFilter';
import TypeFilter from './components/filters/TypeFilter';
import ColorFilter from './components/filters/ColorFilter';
import CollectionPercent from './components/CollectionPercent';

import './styles/Filters.css'
import './styles/Percents.css'
import './styles/LogInOut.css'
import './styles/CardGrid.css'
import './styles/mediaquery.css'


const CardList = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [combinedFilter, setCombinedFilter] = useState({
    color: '',
    name: '',
    rarity: '',
    type: '',
  });

  const fetchCards = async () => {
    try {
      const set = 'lotr'; // Set code for the Lord of the Rings set
      let allCards = [];

      let page = 1;
      let hasMorePages = true;

      while (hasMorePages) {
        const response = await fetch(
          `https://api.scryfall.com/cards/search?q=set:${set}&page=${page}`
        );
        const data = await response.json();

        allCards = [...allCards, ...data.data];

        if (!data.has_more) {
          hasMorePages = false;
        } else {
          page++;
        }
      }

      setCards(allCards);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleSelectedCard = (e, cardName) => {
    const updatedSelectedCards = selectedCards.includes(cardName)
      ? selectedCards.filter((name) => name !== cardName)
      : [...selectedCards, cardName];

    if (selectedCards.includes(cardName)) {
      console.log("slectedCards.includes(cardName)");
    }
    setSelectedCards(updatedSelectedCards);
    // Save selected cards to local storage
    localStorage.setItem('selectedCards', JSON.stringify(updatedSelectedCards));
  };

  const handleColorFilter = (selectedColor) => {
    setCombinedFilter({ ...combinedFilter, color: selectedColor });
  };

  const handleNameFilter = (filterValue) => {
    setCombinedFilter({ ...combinedFilter, name: filterValue });
  };

  const handleRarityFilter = (selectedRarity) => {
    setCombinedFilter({ ...combinedFilter, rarity: selectedRarity });
  };

  const handleTypeFilter = (selectedType) => {
    setCombinedFilter({ ...combinedFilter, type: selectedType });
  };


  useEffect(() => {

    // Retrieve selected cards from local storage
    const storedSelectedCards = JSON.parse(localStorage.getItem('selectedCards'));
    if (storedSelectedCards) {
      setSelectedCards(storedSelectedCards);
    }

    fetchCards();


    const { color, name, rarity, type } = combinedFilter;
    let filtered = cards;

    if (color) {
      filtered = filtered.filter((card) => card.colors.includes(color));
    }
    if (name) {
      filtered = filtered.filter((card) =>
        card.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (rarity) {
      filtered = filtered.filter((card) => card.rarity === rarity);
    }
    if (type) {
      filtered = filtered.filter((card) => card.type_line === type);
    }

    setFilteredCards(filtered);
  }, [cards, combinedFilter]);


  return (
    <div className='App-container'>


      <div className="stats-container">
        {/* <CardStatistics cards={cards} /> */}
        <CollectionPercent
          selectedCards={selectedCards}
          totalCards={cards.length}
          allCards={cards}
        />
      </div>




      <div className="App error-con">

        <div className="commands-container">

        </div>

        <div className="filter-container">
          <div className="filter">
            <TextFilter cards={cards} handleFilter={handleNameFilter} />
          </div>
          <div className="filter">
            <RarityFilter cards={cards} handleFilter={handleRarityFilter} />
          </div>
          <div className="filter">
            <ColorFilter cards={cards} handleFilter={handleColorFilter} />
          </div>
          <div className="filter">
            <TypeFilter cards={cards} handleFilter={handleTypeFilter} />
          </div>
        </div>


        <CardGrid
          cards={filteredCards.length > 0 ? filteredCards : cards}
          selectedCards={selectedCards}
          handleSelectedCard={handleSelectedCard}
        />
      </div>

    </div>
  );
};

export default CardList;