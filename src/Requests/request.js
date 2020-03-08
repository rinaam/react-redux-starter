import 'universal-fetch';

const request = ({ method, url, qs }) => new Promise((resolve, reject) => {
  fetch(url, { method, qs })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export default request;
