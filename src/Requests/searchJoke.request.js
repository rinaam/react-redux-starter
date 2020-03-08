import request from './request';
import requestHelpers from './requests.helpers';

const url = 'https://api.chucknorris.io/jokes/search';

const searchJokeRequest = async (query) => {
  try {
    const response = await request({
      url: requestHelpers.formatUrlWithQs(url, { query }),
      method: 'get',
    });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('get shearched joke error', error);
    throw error;
  }
};

export default searchJokeRequest;
