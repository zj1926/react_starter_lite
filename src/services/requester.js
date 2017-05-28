import fetch from 'isomorphic-fetch';

const DEFAULTCONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
};

function jsonParse(res) {
  return res.json();
}

const requester = (method, url, body) => {
  const opts = Object.assign(DEFAULTCONFIG, {
    method,
    body: JSON.stringify(body),
  });

  return fetch(url, opts).then(jsonParse);
};

export default requester;
