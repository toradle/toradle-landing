import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface ContactUsBody {
  name?: string;
  phone?: string;
  email: string;
  message?: string;
}

export const subscribe = async (email: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/save-email`, { email });
    return response.data;
  } catch (error) {
    console.error('Error subscribing:', error);
    throw error;
  }
};

export const contactus = async (body: ContactUsBody) => {
  const url = "https://huxzfglcxl4xuwvjrh3kbbb5ri0vfyer.lambda-url.ap-southeast-1.on.aws/"
  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.error('Error subscribing:', error);
    throw error;
  }
};
