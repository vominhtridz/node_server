const API_URL = 'https://api.github.com/users';

export async function getUserRepos(username) {
  const response = await fetch(`${API_URL}/${username}/repos`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  const data = await response.json();
  return data;
}
