const formatUrlWithQs = (url, qs = {}) => {
  let formattedQs = '';
  if (Object.keys(qs).length > 0) {
    formattedQs = `?${Object.keys(qs)
      .map((key) => `${key}=${qs[key]}`)
      .join('&')}`;
  }
  return `${url}${formattedQs}`;
};

export default {
  formatUrlWithQs,
};
