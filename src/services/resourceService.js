import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/resource';

const resourceService = {
  getResources: async () => {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get resources.');
    }
  },  
  getResourceById: async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get resource by id.');
    }
  },  
  createResource: async (formData) => {
    try {
      const response = await axios.post(baseUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to create resource.');
    }
  },  
  updateResource: async (id, formData) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to update resource.');
    }
  },  
  archiveResource: async (id) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, { isArchived: true }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to archive resource.');
    }
  },
  validateResource: async (id) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, { visibility: true }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to validate resource.');
    }
  },
};

export default resourceService;