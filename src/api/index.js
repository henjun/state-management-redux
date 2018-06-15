export const api = async () => {
  const response = await fetch("https://api.github.com/users/JaeYeopHan/repos");
  return response.json();
};
