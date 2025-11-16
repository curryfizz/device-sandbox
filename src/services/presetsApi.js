// Base URL from environment or fallback to localhost
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `http://localhost:8000/api`;

export const presetAPI = {
  // Fetch all presets from backend
  getAllPresets: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/presets`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json(); // return parsed JSON data
    } catch (error) {
      console.error('Error fetching presets:', error); // log errors
      throw error; // propagate error for caller
    }
  },

  // Save a new preset
  savePreset: async (presetData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/presets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // sending JSON body
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(presetData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json(); // return saved preset
    } catch (error) {
      console.error('Error saving preset:', error);
      throw error;
    }
  },

  // Load a specific preset by ID
  getPreset: async (id) => {
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

      return await response.json(); // return loaded preset
    } catch (error) {
      console.error('Error loading preset:', error);
      throw error;
    }
  },
};
