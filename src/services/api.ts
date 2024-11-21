import axios from 'axios';

// Set the backend API URL
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Fetch brands from the backend
export const fetchBrands = async () => {
  try {
    const response = await API.get('/brands');
    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
};
