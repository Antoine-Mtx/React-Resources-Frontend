import apiClient from './apiClient.js';

const baseUrl = 'http://localhost:8000/api/get_visible_tutorials';

const tutorialService = {
  getTutorials: async () => {
    try {
      const response = await apiClient.get(baseUrl);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get tutorials.');
    }
  },  
  getTutorialById: async (id) => {
    try {
      const response = await apiClient.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get tutorial by id.');
    }
  },  
  createTutorial: async (formData) => {
    try {
      const response = await apiClient.post(baseUrl, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create tutorial.');
    }
  },  
  updateTutorial: async (id, formData) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update tutorial.');
    }
  },  
  archiveTutorial: async (id) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, { isArchived: true });
      return response.data;
    } catch (error) {
      throw new Error('Failed to archive tutorial.');
    }
  },
  validateTutorial: async (id) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, { visibility: true });
      return response.data;
    } catch (error) {
      throw new Error('Failed to validate tutorial.');
    }
  },
};

export default tutorialService;