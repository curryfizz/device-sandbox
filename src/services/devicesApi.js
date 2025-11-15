const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `http://localhost:8000/api`;

export const deviceAPI = {
  // Fetch all devices
  getAllDevices: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/devices`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching devices:', error);
      throw error;
    }
  },
};
