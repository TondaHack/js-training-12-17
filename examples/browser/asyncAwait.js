
const get = async (url) => {
  const data = await window.fetch(url).then(res => res.json());
  console.log(data);
  return data;
};

get('https://api.github.com/search/users?q=tondahack');
