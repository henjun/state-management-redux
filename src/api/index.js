


export const api = async () => {
  console.log('call');
  const response = await fetch("https://api.github.com/users/JaeYeopHan/repos");
  return response.json();
};
