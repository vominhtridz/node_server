import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = () => {
    if (input.trim() !== '') {
      onSearch(input);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;
