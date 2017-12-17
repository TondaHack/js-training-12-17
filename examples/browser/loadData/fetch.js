function handleCall(data) {
  console.log('Data from Github log');
  return data;
}

window.fetch('https://api.github.com/search/users?q=tondahack')
  .then(res => res.json())
  .then(handleCall)
  .then(console.log);
