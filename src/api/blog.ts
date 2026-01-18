import apiClient from '@/lib/api-client';

export interface BlogPost {
  id: number;
  titleRo: string;
  blogIntroRo: string;
  titleImagePath: string;
  titleImageAltTextRo: string;
  firstSubheadingTitleRo: string;
  firstSubheadingTextRo: string;
  secondSubheadingTitleRo?: string;
  secondSubheadingTextRo?: string;
  thirdSubheadingTitleRo?: string;
  thirdSubheadingTextRo?: string;
  conclusionRo: string;
  metaDescriptionRo: string;
  metaKeywordsRo: string;
  publishingDate: string;
  author: string;
  category: string;
  label: string;
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await apiClient.get('/blog-posts');
  return response.data;
};

export const getBlogPostById = async (id: number): Promise<BlogPost> => {
  const response = await apiClient.get(`/blog-posts/${id}`);
  return response.data;
};
