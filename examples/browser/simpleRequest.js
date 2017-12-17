
function get(url, callback) {
  const req = new XMLHttpRequest();
  req.open('GET', url, true);

  req.onload = function () {
    if (req.status === 200) {
      callback(req);
    } else {
      throw Error(req.statusText);
    }

    req.onerror = function () {
      throw Error(req.statusText);
    };
  };
  req.send();
}


function handleCall(req) {
  console.log('Response with status: ', req.status);
  console.log('Data: ', req.response);
  console.log('Data from Github end');
}

get('https://api.github.com/search/users?q=tondahack', handleCall);
