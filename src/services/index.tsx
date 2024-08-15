import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const subscribe = async (email: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/save-email`, { email });
    return response.data;
  } catch (error) {
    console.error('Error subscribing:', error);
    throw error;
  }
};
