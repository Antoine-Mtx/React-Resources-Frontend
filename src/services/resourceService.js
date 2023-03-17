import apiClient from './apiClient.js';

const baseUrl = 'http://localhost:8000/api/resource';

const resourceService = {
  getResources: async () => {
    try {
      const response = await apiClient.get(baseUrl);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get resources.');
    }
  },  
  getResourceById: async (id) => {
    try {
      const response = await apiClient.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get resource by id.');
    }
  },  
  createResource: async (formData) => {
    try {
      const response = await apiClient.post(baseUrl, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create resource.');
    }
  },  
  updateResource: async (id, formData) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update resource.');
    }
  },  
  archiveResource: async (id) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, { isArchived: true });
      return response.data;
    } catch (error) {
      throw new Error('Failed to archive resource.');
    }
  },
  validateResource: async (id) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, { visibility: true });
      return response.data;
    } catch (error) {
      throw new Error('Failed to validate resource.');
    }
  },
};

export default resourceService;