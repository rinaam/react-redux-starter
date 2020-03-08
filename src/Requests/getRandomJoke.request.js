import request from './request';

const url = 'https://api.chucknorris.io/jokes/random';

const getRandomJokeRequest = async () => {
  try {
    const response = await request({
      url,
      method: 'get',
    });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('get random joke error', error);
    throw error;
  }
};

export default getRandomJokeRequest;
