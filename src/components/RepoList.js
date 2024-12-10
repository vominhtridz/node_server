import React, { useState } from 'react';

function RepoList({ count, repos, username }) {
  const [showRepos, setShowRepos] = useState(false); // Control showing repos
  const [selectedRepo, setSelectedRepo] = useState(null); // Store the selected repo details

  const toggleRepos = () => setShowRepos(!showRepos); // Toggle visibility

  const handleRepoClick = async (repoName) => {
    const selected = repos.find((repo) => repo.name === repoName);
    setSelectedRepo(selected);
  };

  return (
    <div className="repo-list-container">
      <p>
        {username} has {count} public repositories.{' '}
        <button onClick={toggleRepos}>
          {showRepos ? 'Hide Repositories' : 'Show Repositories'}
        </button>
      </p>

      {showRepos && (
        <ul className="repo-list">
          {repos.map((repo) => (
            <li key={repo.id} onClick={() => handleRepoClick(repo.name)} className="repo-item">
              {repo.name}
            </li>
          ))}
        </ul>
      )}

      {selectedRepo && (
        <div className="repo-details">
          <h2>Details for {selectedRepo.name}</h2>
          <p><strong>Description:</strong> {selectedRepo.description || 'No description available'}</p>
          <p><strong>Stars:</strong> {selectedRepo.stargazers_count}</p>
          <p><strong>Forks:</strong> {selectedRepo.forks_count}</p>
          <a href={selectedRepo.html_url} target="_blank" rel="noopener noreferrer">
            <button>Go to Repo</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default RepoList;
