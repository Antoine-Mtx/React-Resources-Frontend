import apiClient from './apiClient.js';

const baseUrl = 'http://localhost:8000/api/get_visible_events';

const eventService = {
  getEvents: async () => {
    try {
      const response = await apiClient.get(baseUrl);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get events.');
    }
  },  
  getEventById: async (id) => {
    try {
      const response = await apiClient.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get event by id.');
    }
  },  
  createEvent: async (formData) => {
    try {
      const response = await apiClient.post(baseUrl, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create event.');
    }
  },  
  updateEvent: async (id, formData) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, formData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update event.');
    }
  },  
  archiveEvent: async (id) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, { isArchived: true });
      return response.data;
    } catch (error) {
      throw new Error('Failed to archive event.');
    }
  },
  validateEvent: async (id) => {
    try {
      const response = await apiClient.put(`${baseUrl}/${id}`, { visibility: true });
      return response.data;
    } catch (error) {
      throw new Error('Failed to validate event.');
    }
  },
};

export default eventService;