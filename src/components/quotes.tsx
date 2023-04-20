import { useState, useReducer, PropsWithChildren } from 'react';

import { Quote } from './application';

type QuotesProps = {
  setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>;
};

const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  console.log('response', response);
  return response.json();
};

const reducer = (_: number, newVal: number): number => {
  return newVal;
};

const Quotes = ({
  children,
  setQuotes,
}: PropsWithChildren<QuotesProps>): JSX.Element => {
  const [count, setCount] = useReducer(reducer, 0);

  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchQuotes(count).then(setQuotes);
        }}
      >
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="0"
            max="25"
            value={count}
            onChange={(event) => setCount(Number(event.target.value))}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;
