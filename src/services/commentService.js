import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/comment';

const commentService = {
  getComments: async () => {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get comments.');
    }
  },
  getCommentById: async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to get comment by id.');
    }
  },
  createComment: async (formData) => {
    try {
      const response = await axios.post(baseUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to create comment.');
    }
  },
  updateComment: async (id, formData) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to update comment.');
    }
  },
  archiveComment: async (id) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, { isArchived: true }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to archive comment.');
    }
  },
};

export default commentService;