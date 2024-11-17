import { useState } from "react";

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export default function App() {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("us");
  const [story, setStory] = useState("");

  const generateStory = () => {
    const xItem = randomValueFromArray([
      "Willy the Goblin",
      "Big Daddy",
      "Father Christmas",
    ]);
    const yItem = randomValueFromArray([
      "the soup kitchen",
      "Disneyland",
      "the White House",
    ]);
    const zItem = randomValueFromArray([
      "spontaneously combusted",
      "melted into a puddle on the sidewalk",
      "turned into a slug and crawled away",
    ]);

    let weight = 300; 
    let temperature = 94; 
    if (unit === "uk") {
      weight = Math.round(weight / 14) + " stone";
      temperature = Math.round((temperature - 32) * (5 / 9)) + " centigrade";
    } else {
      weight += " pounds";
      temperature += " fahrenheit";
    }

    const storyText = `It was ${temperature} outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name || "Bob"} saw the whole thing, but was not surprised — ${xItem} weighs ${weight}, and it was a hot day.`;

    setStory(storyText);
  };

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input
          type="text"
          id="customname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          id="us"
          value="us"
          checked={unit === "us"}
          onChange={() => setUnit("us")}
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          id="uk"
          value="uk"
          checked={unit === "uk"}
          onChange={() => setUnit("uk")}
        />
      </div>
      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>
      {story && <p>{story}</p>}
    </>
  );
}
