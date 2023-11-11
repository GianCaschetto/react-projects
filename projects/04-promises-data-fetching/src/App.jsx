import React from "react";
import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

function App() {
  const { fact, updateFact } = useCatFact();
  const { url } = useCatImage({ fact });

  const handleRandomCat = () => {
    updateFact();
  };

  return (
    <main>
      <h1>Random Cat</h1>
      <button onClick={handleRandomCat}>Search 🔎</button>
      <section>
        <p>{fact}</p>
        {fact && (
          <img
            src={url}
            alt="Image extracted using the two first words for some siamese cats appear cross-eyed"
          />
        )}
      </section>
    </main>
  );
}

export default App;
