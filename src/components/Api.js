// api.js

const API_URL = '../db.json';

const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error so it can be handled by the calling component
  }
};

export default fetchData;
