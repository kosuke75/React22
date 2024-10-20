import { useState } from "react";

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [customName, setCustomName] = useState('');
  const [ukus, setUkus] = useState('us');
  const [xItem, setXItem] = useState('');
  const [yItem, setYItem] = useState('');
  const [zItem, setZItem] = useState('');
  
  const handleRadioChange = (e) => {
    setUkus(e.target.value);
  };

  const randomValueFromArray = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  };

  const generateStory = () => {
    const xItems = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
    const yItems = ['the soup kitchen', 'Disneyland', 'the White House'];
    const zItems = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

    let name = customName ? customName : 'Bob';
    let temperature = ukus === 'uk' ? `${Math.round((94 - 32) * 5 / 9)}°C` : '94°F';
    let weight = ukus === 'uk' ? '21 stone' : '300 pounds';

    setXItem(randomValueFromArray(xItems));
    setYItem(randomValueFromArray(yItems));
    setZItem(randomValueFromArray(zItems));

    setShowStory(true);

    return {
      name,
      temperature,
      weight
    };
  };

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input
          type="text"
          id="customname"
          placeholder="Enter name"
          value={customName}
          onChange={(e) => setCustomName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          id="us"
          name="region"
          value="us"
          checked={ukus === 'us'}
          onChange={handleRadioChange}
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          id="uk"
          name="region"
          value="uk"
          checked={ukus === 'uk'}
          onChange={handleRadioChange}
        />
      </div>
      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {ukus === 'us' ? '94°F' : '34°C'} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}. {customName || 'Bob'} saw the whole thing, but was not surprised — {xItem} weighs {ukus === 'us' ? '300 pounds' : '21 stone'}, and it was a hot day.
        </p>
      )}
    </>
  );
}
