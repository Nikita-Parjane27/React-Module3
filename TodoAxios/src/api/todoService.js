import axiosInstance from './axiosInstance';

const todoService = {
  // Fetch all todos
  getTodos: async () => {
    try {
      const response = await axiosInstance.get('/todos');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch todos');
    }
  },

  // Fetch a specific todo by ID
  getTodoById: async (id) => {
    try {
      const response = await axiosInstance.get(`/todos/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch todo with ID: ${id}`);
    }
  }
};

export default todoService;