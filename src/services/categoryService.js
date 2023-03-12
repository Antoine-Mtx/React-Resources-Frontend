import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/category';

const categoryService = {
  getCategories: async () => {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get categories.');
    }
  },
  getCategoryById: async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get category by id.');
    }
  },
  createCategory: async (formData) => {
    try {
      const response = await axios.post(baseUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to create category.');
    }
  },
  updateCategory: async (id, formData) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to update category.');
    }
  },
  archiveCategory: async (id) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, { isArchived: true }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to archive category.');
    }
  },
};

export default categoryService;