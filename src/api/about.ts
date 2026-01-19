import apiClient from '@/lib/api-client';

export interface AboutSection {
  id: number;
  sectionType: 'hero' | 'approach' | 'values' | 'expertise' | 'qualifications' | 'diaspora' | 'cta';
  titleEn: string;
  titleRo: string;
  titleRu: string;
  subtitleEn?: string;
  subtitleRo?: string;
  subtitleRu?: string;
  contentEn?: string;
  contentRo?: string;
  contentRu?: string;
  imageUrl?: string;
  imageAltTextEn?: string;
  imageAltTextRo?: string;
  imageAltTextRu?: string;
  items?: AboutItem[];
  ctaButtons?: CtaButton[];
  metaDescriptionEn?: string;
  metaDescriptionRo?: string;
  metaDescriptionRu?: string;
  displayOrder: number;
  isActive: boolean;
  backgroundColor?: string;
}

export interface AboutItem {
  iconName: string;
  titleEn: string;
  titleRo: string;
  titleRu: string;
  descriptionEn: string;
  descriptionRo: string;
  descriptionRu: string;
  imageUrl?: string;
  orderIndex: number;
}

export interface CtaButton {
  textEn: string;
  textRo: string;
  textRu: string;
  url: string;
  variant: 'primary' | 'outline';
  icon: string;
}

export const getAboutSections = async (): Promise<AboutSection[]> => {
  const response = await apiClient.get('/about-sections');
  return response.data;
};

export const getAboutSectionByType = async (sectionType: string): Promise<AboutSection> => {
  const response = await apiClient.get(`/about-sections/type/${sectionType}`);
  return response.data;
};
