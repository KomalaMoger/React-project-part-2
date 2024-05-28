import React from "react";
import "./App.css";
import PaginationTest from "./Components/Pagination/PaginationTest";
import CountdownTestTimer from "./Components/Countdown-timer/CountdownTestTimer";
import ProgressBarTest from "./Components/StepProgressBar/ProgressBarTest";
import TooltipTest from "./Components/Tooltip/TooltipTest";
// import RandomQuoteGenerator from "./Components/Random-quote-generator/Quote";
import Currency from "./Components/CurrencyConvertor/CurrencyConvertor";
import FilterProducts from "./Components/FilterProducts/FilterProducts";

export default function App() {
  return (
    <>
      {/* <PaginationTest /> */}
      {/* <CountdownTestTimer /> */}
      {/* <ProgressBarTest /> */}
      {/* <RandomQuoteGenerator /> */}
      {/* <TooltipTest /> */}
      <FilterProducts />
      {/* <Currency /> */}
    </>
  );
}
