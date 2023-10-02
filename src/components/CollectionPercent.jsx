import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import greenIcon from '../assets/icons/green.png';
import whiteIcon from '../assets/icons/white.png';
import redIcon from '../assets/icons/red.png';
import blueIcon from '../assets/icons/blue.png';
import blackIcon from '../assets/icons/black.png';

const CardSelectionPercentage = ({ selectedCards, totalCards, allCards }) => {

  // const [blackSelectedCards, setBlackSelectedCards] = useState(null);

  const calculatePercentage = () => {
    const selectedCount = selectedCards.length;
    const percentage = (selectedCount / totalCards) * 100;
    return Math.round(percentage);
  };

  const calculateGreenPercentage = () => {
    const greenCards = selectedCards.filter((cardName) => {
      const card = allCards.find((card) => card.name === cardName);
  
      // Ensure card is defined and has colors property
      if (card && card.colors) {
        return card.colors.includes('G');
      }
  
      return false;
    });
  
    const greenPercentage = (greenCards.length / 60) * 100;
    return Math.round(greenPercentage);
  };
  
  
  const calculateBluePercentage = () => {
    const blueCards = selectedCards.filter((cardName) => {
      const card = allCards.find((card) => card.name === cardName);
  
      // Ensure card is defined and has colors property
      if (card && card.colors) {
        return card.colors.includes('U');
      }
  
      return false;
    });
  
    const bluePercentage = (blueCards.length / 59) * 100;
    return Math.round(bluePercentage);
  };
  
  const calculateWhitePercentage = () => {
    const whiteCards = selectedCards.filter((cardName) => {
      const card = allCards.find((card) => card.name === cardName);
  
      // Ensure card is defined and has colors property
      if (card && card.colors) {
        return card.colors.includes('W');
      }
  
      return false;
    });
  
    const whitePercentage = (whiteCards.length / 63) * 100;
    return Math.round(whitePercentage);
  };
  
  const calculateBlackPercentage = () => {
    const blackCards = selectedCards.filter((cardName) => {
      const card = allCards.find((card) => card.name === cardName);
  
      // Ensure card is defined and has colors property
      if (card && card.colors) {
        return card.colors.includes('B');
      }
  
      return false;
    });
  
    const blackPercentage = (blackCards.length / 62) * 100;
    return Math.round(blackPercentage);
  };
  
  const calculateRedPercentage = () => {
    const redCards = selectedCards.filter((cardName) => {
      const card = allCards.find((card) => card.name === cardName);
  
      if (card && card.colors) {
        return card.colors.includes('R');
      }
  
      return false;
    });
  
    const redPercentage = (redCards.length / 62) * 100;
    return Math.round(redPercentage);
  };
  

  const percentage = calculatePercentage();

  const greenPercentage = calculateGreenPercentage();
  const bluePercentage = calculateBluePercentage();
  const whitePercentage = calculateWhitePercentage();
  const blackPercentage = calculateBlackPercentage();
  const redPercentage = calculateRedPercentage();

  return (
    <div className="percentages-container">
      <div className="your-collection-percentage-container">
        {/* <h3>All Cards</h3> */}
        <div style={{ width: '125px', height: '125px', }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={10}
            styles={{
              text: {
                fontSize: '20px',
                fontWeight: 'bold',
                fill: 'white',
              },
              trail: {
                stroke: '#f2f2f2',
              },
              path: {
                stroke: '#e0a13a',
              },
            }}
          />
        </div>
      </div>

      <div className="color-percentage-container">
        <img className='filter-icon' style={{ margin: '8px' }} src={greenIcon} alt={"green"} />
        <div style={{ width: '75px', height: '75px' }}>
          <CircularProgressbar
            value={greenPercentage}
            text={`${greenPercentage}%`}
            strokeWidth={10}
            styles={{
              text: {
                fontSize: '20px',
                fontWeight: 'bold',
                fill: 'white',
              },
              trail: {
                stroke: '#f2f2f2',
              },
              path: {
                stroke: '#9bd3ae',
              },
            }}
          />
        </div>
      </div>

      <div className="color-percentage-container">
        <img className='filter-icon' style={{ margin: '8px' }} src={blueIcon} alt={"blue"} />
        <div style={{ width: '75px', height: '75px' }}>
          <CircularProgressbar
            value={bluePercentage}
            text={`${bluePercentage}%`}
            strokeWidth={10}
            styles={{
              text: {
                fontSize: '20px',
                fontWeight: 'bold',
                fill: 'white',
              },
              trail: {
                stroke: '#f2f2f2',
              },
              path: {
                stroke: '#aae0fa',
              },
            }}
          />
        </div>
      </div>


      <div className="color-percentage-container">
        <img className='filter-icon' style={{ margin: '8px' }} src={whiteIcon} alt={"white"} />
        <div style={{ width: '75px', height: '75px' }}>
          <CircularProgressbar
            value={whitePercentage}
            text={`${whitePercentage}%`}
            strokeWidth={10}
            styles={{
              text: {
                fontSize: '20px',
                fontWeight: 'bold',
                fill: 'white',
              },
              trail: {
                stroke: '#f2f2f2',
              },
              path: {
                stroke: '#fffbd5',
              },
            }}
          />
        </div>
      </div>


      <div className="color-percentage-container">
        <img className='filter-icon' style={{ margin: '8px' }} src={blackIcon} alt={"black"} />
        <div style={{ width: '75px', height: '75px' }}>
          <CircularProgressbar
            value={blackPercentage}
            text={`${blackPercentage}%`}
            strokeWidth={10}
            styles={{
              text: {
                fontSize: '20px',
                fontWeight: 'bold',
                fill: 'white',
              },
              trail: {
                stroke: '#f2f2f2',
              },
              path: {
                stroke: '#cbc2bf',
              },
            }}
          />
        </div>
      </div>


      <div className="color-percentage-container">
        <img className='filter-icon' style={{ margin: '8px' }} src={redIcon} alt={"red"} />
        <div style={{ width: '75px', height: '75px' }}>
          <CircularProgressbar
            value={redPercentage}
            text={`${redPercentage}%`}
            strokeWidth={10}
            styles={{
              text: {
                fontSize: '20px',
                fontWeight: 'bold',
                fill: 'white',
              },
              trail: {
                stroke: '#f2f2f2',
              },
              path: {
                stroke: '#f9aa8f',
              },
            }}
          />
        </div>
      </div>


    </div>
  );
};

export default CardSelectionPercentage;
