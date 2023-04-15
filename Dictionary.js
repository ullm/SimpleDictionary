import React, { useState } from 'react';
import axios from 'axios';

function Dictionary() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const firstDefinition = response.data[0].meanings[0].definitions[0].definition;
      setDefinition(firstDefinition);
    } catch (error) {
      console.error(error);
      setDefinition('Definition not found');
    }
  };

  return (
    <div>
      <h1>English-Indonesian Dictionary</h1>
      <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <p>{definition}</p>
    </div>
  );
}

export default Dictionary;
