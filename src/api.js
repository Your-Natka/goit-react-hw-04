import axios from 'axios';

export const fetchArticles = async (query, page) => {
  const response = await axios.get(`http://api.unsplash.com/photos/?`, {
    params: { query, page, hitsPerPage: 10 },
  });

  return response.data.hits;
};
