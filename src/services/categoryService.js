import apiClient from './apiClient.js';

const baseUrl = 'http://localhost:8000/api/category';

const categoryService = {
  getCategories: async () => {
    try {
      const response = await apiClient.get(baseUrl);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get categories.');
    }
  },
  getCategoryById: async (id) => {
    try {
      const response = await apiClient.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get category by id.');
    }
  },
  createCategory: async (formData) => {
    try {
      const response = await apiClient.post(baseUrl, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create category.');
    }
  },
  updateCategory: async (id, formData) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update category.');
    }
  },
  archiveCategory: async (id) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, { isArchived: true });
      return response.data;
    } catch (error) {
      throw new Error('Failed to archive category.');
    }
  },
};

export default categoryService;