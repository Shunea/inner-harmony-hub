import apiClient from '@/lib/api-client';

export interface ServiceNew {
  id: number;
  titleRo: string;
  descRo: string;
  price: string;
  featuresRo: string[]; // JSON array
  heroImage: string;
  imageUrl: string;
  firstIconPath?: string;
  secondIconPath?: string;
  detailsRo: string;
  metaDescriptionRo: string;
  metaKeywordsRo: string;
  orderIndex: number;
}

export const getServices = async (): Promise<ServiceNew[]> => {
  const response = await apiClient.get('/services');
  return response.data;
};

export const getServiceById = async (id: number): Promise<ServiceNew> => {
  const response = await apiClient.get(`/services/${id}`);
  return response.data;
};
