import axios from 'axios';

export const fetch = async (query, page) => {
  const accessKey = 'EP6xGKyS54rZDz4us-SIpaV9VJyUgJsapxCpS6v8gf4';
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${accessKey}`,
    {
      params: {
        query,
        page,
        per_page: 26,
      },
    }
  );
  return response.data;
};
