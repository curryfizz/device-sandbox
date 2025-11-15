const API_BASE_URL = 'http://localhost:8000/api';

export const presetAPI = {
  // Get all presets
  getAllPresets: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/presets`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching presets:', error);
      throw error;
    }
  },

  // Save a new preset
  save: async (presetData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/presets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(presetData),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error saving preset:', error);
      throw error;
    }
  },

  // Load a specific preset
  load: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/presets/${id}/load`, {
        method: 'POST',
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
      console.error('Error loading preset:', error);
      throw error;
    }
  },
};