import apiClient from '@/lib/api-client';

export const subscribeEmail = async (email: string) => {
  const response = await apiClient.post('/forms/email-notification', { email });
  return response.data;
};

export const submitContactForm = async (data: {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const response = await apiClient.post('/forms/contact', data);
  return response.data;
};
