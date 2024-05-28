// https://api.quotable.io/quotes/random-----random quote api
import React, { useState, useEffect } from "react";
import "./Quote.css";
export default function RandomQuoteGenerator() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);
  async function fetchQuote() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://api.quotable.io/quotes/random", {
        method: "GET",
      });
      const result = await apiResponse.json();
      console.log(result);
      if (result && result.length > 0) {
        setLoading(false);
        setQuote(result[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);
  const handleRefresh = () => {
    fetchQuote();
  };
  if (loading) {
    return <h2>loading qoute! please wait</h2>;
  }
  return (
    <div className="random-quote-generator">
      <h2>Random Quote Generator</h2>
      <div className="quote-wrapper">
        <p>{quote?.author}</p>
        <p>{quote?.content}</p>
      </div>
      <div className="refresh-btn-div">
        <button className="refresh-btn" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    </div>
  );
}
