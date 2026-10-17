import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const api = {
  async getCourses() {
    try {
      const response = await axios.get(`${API_BASE_URL}/courses/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
  },

  async getModules(courseId: string) {
    try {
      const response = await axios.get(`${API_BASE_URL}/modules/?course=${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching modules:', error);
      return [];
    }
  },

  async getLessons(moduleId: string) {
    try {
      const response = await axios.get(`${API_BASE_URL}/lessons/?module=${moduleId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching lessons:', error);
      return [];
    }
  }
};
