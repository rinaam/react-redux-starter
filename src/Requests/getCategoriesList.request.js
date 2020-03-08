import request from './request';

const url = 'https://api.chucknorris.io/jokes/categories';

const getCategoriesListRequest = async () => {
  try {
    const response = await request({
      url,
      method: 'get',
    });
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('get categories list error', error);
    throw error;
  }
};

export default getCategoriesListRequest;
