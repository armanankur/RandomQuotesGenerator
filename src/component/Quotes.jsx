import React, { useState } from "react";
import styled from "./Quotes.module.css";
const quotes = [
  "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination. - Sushant Singh Rajput",
  "Self-belief and hard work will always earn you success. - Virat Kohli",
  "If you spend time with your loved ones, you get the energy to do your job better. - Sushant Singh Rajput",
  "Success is not a good teacher, failure makes you humble. - Shah Rukh Khan",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

const Quotes = () => {
  const [quote, setQuote] = useState("");

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className={styled.container}>
      <h1>Random Quotes</h1>
      <p>{quote}</p>
      <button onClick={generateRandomQuote}> Click Me</button>
    </div>
  );
};

export default Quotes;
