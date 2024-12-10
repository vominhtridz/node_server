import React, { useState } from 'react';
import '../src/styles.css';  // Import CSS vào

import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import ErrorMessage from './components/ErrorMessage';
import { getUserRepos } from './services/githubService';

function App() {
  const [username, setUsername] = useState('');
  const [projectsCount, setProjectsCount] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setError(null);
    setProjectsCount(null);
    setRepos([]); // Clear repos on new search
    try {
      const repos = await getUserRepos(username);
      setRepos(repos);
      setProjectsCount(repos.length);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="App">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">GitHub Admin</div>
        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      <div className="App-header">
        <h1>Search GitHub User</h1>
        <SearchBar onSearch={handleSearch} />
        {error && <ErrorMessage message={error} />}
        {projectsCount !== null && (
          <RepoList 
            count={projectsCount} 
            repos={repos} 
            username={username}
          />
        )}
      </div>
    </div>
  );
}

export default App;
