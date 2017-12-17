
function get(url) {
  return new Promise(((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', url, true);

    req.onload = function () {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }

      req.onerror = function () {
        reject(Error('Network Error'));
      };
    };
    req.send();
  }));
}

function handleCall(data) {
  console.log('Data from Github log');
  return data;
}

get('https://api.github.com/search/users?q=tondahack')
  .then(handleCall)
  .then(console.log)
  .catch(console.error);
