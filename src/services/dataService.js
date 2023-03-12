import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

const dataService = {
  fetchData: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/data`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data.');
    }
  },
}

export default dataService;