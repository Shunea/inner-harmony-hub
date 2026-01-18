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

  // Process featuresRo - backend returns array with JSON string inside
  return response.data.map((service: any) => {
    let parsedFeatures: string[] = [];

    try {
      // featuresRo is an array containing a JSON string
      if (service.featuresRo && Array.isArray(service.featuresRo) && service.featuresRo.length > 0) {
        // Parse the JSON string inside the array
        parsedFeatures = JSON.parse(service.featuresRo[0]);
      }
    } catch (e) {
      console.error('Error parsing featuresRo:', e);
      parsedFeatures = [];
    }

    return {
      ...service,
      featuresRo: parsedFeatures
    };
  });
};

export const getServiceById = async (id: number): Promise<ServiceNew> => {
  const response = await apiClient.get(`/services/${id}`);
  const service = response.data;

  let parsedFeatures: string[] = [];

  try {
    // featuresRo is an array containing a JSON string
    if (service.featuresRo && Array.isArray(service.featuresRo) && service.featuresRo.length > 0) {
      // Parse the JSON string inside the array
      parsedFeatures = JSON.parse(service.featuresRo[0]);
    }
  } catch (e) {
    console.error('Error parsing featuresRo:', e);
    parsedFeatures = [];
  }

  return {
    ...service,
    featuresRo: parsedFeatures
  };
};
