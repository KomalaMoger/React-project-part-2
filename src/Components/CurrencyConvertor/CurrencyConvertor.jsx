// https://open.er-api.com/v6/latest/inr-----currency convertor
import "./Currency.css";
import React, { useEffect, useState } from "react";
export default function CurrencyConvertor() {
  const [amount, setAmount] = useState(1);
  const [fromcurrency, setFromcurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [toCurrency, setToCurrenecy] = useState("INR");
  async function fetchExchangeRate() {
    const apiResponse = await fetch(
      `https://open.er-api.com/v6/latest/${fromcurrency}`,
      { method: "GET" }
    );
    const result = await apiResponse.json();
    const calculatedRate = result?.rates[toCurrency];
    setExchangeRate(calculatedRate);
    setConvertedAmount((amount * calculatedRate).toFixed(2));
  }
  useEffect(() => {
    fetchExchangeRate();
  }, [fromcurrency, toCurrency, amount]);
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleFromCurrencyChange = (e) => {
    setFromcurrency(e.target.value);
  };
  const handleToCurrencyChange = (e) => {
    setToCurrenecy(e.target.value);
  };
  return (
    <div className="currency-convertor">
      <span>Currency-Convertor</span>
      <div className="input-container">
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => handleAmountChange(e)}
        />
        <select
          value={fromcurrency}
          onChange={(e) => handleFromCurrencyChange(e)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <p className="to">To</p>

      <div className="input-container">
        <input type="text" value={convertedAmount} readOnly />
        <select value={toCurrency} onChange={(e) => handleToCurrencyChange(e)}>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </select>
      </div>
      <p className="exchange-rate">
        Exchange Rate :1 {fromcurrency}={exchangeRate}
        {toCurrency}
      </p>
    </div>
  );
}
