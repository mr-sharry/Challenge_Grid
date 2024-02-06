import React, { useState } from 'react';
import { binary_question } from './Functions';

export default function BinaryPractice() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [binaryData, setBinaryNumber] = useState(binary_question());
  const [inputValue, setInputValue] = useState('');

  const binaryNumber = binaryData[0]
  const binaryAnswer = binaryData[1]

  function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements['denaryInput'].value;

    if (input === binaryAnswer) {
      setScore(score + 1);
      setBinaryNumber(binary_question());
      console.log("Correct")
    }
    else {
      setScore(0);
      setBinaryNumber(binary_question());      
    }
    setInputValue("");
  }

  return (
    <div>
      <h1>Binary Practice</h1>
      <p>Your score: {score}</p>
      <p style={{fontSize: 30, font: "Consolas"}}>{binaryNumber}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="denaryInput">Enter the denary value:</label>
        <input type="number" id="denaryInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
