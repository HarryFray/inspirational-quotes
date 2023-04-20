import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

const Application = (): JSX.Element => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  if (!quotes) return <Loading />;
  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes setQuotes={setQuotes}>
        {quotes.map((quote) => (
          <InspirationalQuote
            key={quote.id}
            content={quote.content}
            source={quote.source}
          />
        ))}
      </Quotes>
    </main>
  );
};

export default Application;
