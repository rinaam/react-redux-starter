import request from './request';
import requestHelpers from './requests.helpers';

const url = 'https://api.chucknorris.io/jokes/random';

const getRandomJokeFromCategoryRequest = async ({ category }) => {
  try {
    const response = await request({
      url: requestHelpers.formatUrlWithQs(url, { category }),
      method: 'get',
    });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('get random joke from category error', error);
    throw error;
  }
};

export default getRandomJokeFromCategoryRequest;
