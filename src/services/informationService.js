import apiClient from './apiClient.js';

const baseUrl = 'http://localhost:8000/api/get_visible_informations';

const informationService = {
  getInformations: async () => {
    try {
      const response = await apiClient.get(baseUrl);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get informations.');
    }
  },  
  getInformationById: async (id) => {
    try {
      const response = await apiClient.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get information by id.');
    }
  },  
  createInformation: async (formData) => {
    try {
      const response = await apiClient.post(baseUrl, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create information.');
    }
  },  
  updateInformation: async (id, formData) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update information.');
    }
  },  
  archiveInformation: async (id) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, { isArchived: true });
      return response.data;
    } catch (error) {
      throw new Error('Failed to archive information.');
    }
  },
  validateInformation: async (id) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, { visibility: true });
      return response.data;
    } catch (error) {
      throw new Error('Failed to validate information.');
    }
  },
};

export default informationService;