'use client';

import { useState } from 'react';
import { FaQuoteLeft, FaRegCopy } from 'react-icons/fa';

const quotes = [
  "The best way to predict the future is to invent it.",
  "Life is what happens when you’re busy making other plans.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The road to success and the road to failure are almost exactly the same.",
  "Your time is limited, so don’t waste it living someone else’s life."
];

function getRandomQuote(prevIndex: number | null): { quote: string, index: number } {
  let index: number;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === prevIndex);
  return { quote: quotes[index], index };
}

export default function QuoteBox() {
  const [quote, setQuote] = useState(quotes[0]);
  const [prevIndex, setPrevIndex] = useState<number | null>(0);

  const handleNewQuote = () => {
    const { quote: newQuote, index } = getRandomQuote(prevIndex);
    setQuote(newQuote);
    setPrevIndex(index);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(quote);
    alert('Quote copied!');
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-xl text-center space-y-4">
      <FaQuoteLeft className="text-3xl text-blue-400 mx-auto" />
      <p className="text-xl font-medium">{quote}</p>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handleNewQuote}
          className="btn btn-primary"
        >
          New Quote
        </button>
        <button
          onClick={handleCopy}
          className="btn btn-outline"
        >
          <FaRegCopy /> Copy
        </button>
      </div>
    </div>
  );
}
