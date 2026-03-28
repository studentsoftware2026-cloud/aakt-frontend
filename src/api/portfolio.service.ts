import apiClient from './apiClient';

export interface PortfolioItem {
    _id: string;
    itemType: 'department' | 'operation' | 'project' | 'process' | 'block';
    parentId?: string | null;
    category: 'saas' | 'ecommerce';
    name: string;
    description?: string;
    order: number;
}

export const portfolioService = {
    getItems: async (category: string, itemType: string, parentId?: string | null): Promise<PortfolioItem[]> => {
        const params = parentId !== undefined ? { parentId } : {};
        const response = await apiClient.get(`/portfolio/${category}/${itemType}`, { params });
        return response.data;
    },

    createItem: async (category: string, data: Partial<PortfolioItem>): Promise<PortfolioItem> => {
        const response = await apiClient.post(`/portfolio/${category}`, data);
        return response.data;
    },

    updateItem: async (id: string, data: Partial<PortfolioItem>): Promise<PortfolioItem> => {
        const response = await apiClient.put(`/portfolio/${id}`, data);
        return response.data;
    },

    deleteItem: async (id: string): Promise<void> => {
        await apiClient.delete(`/portfolio/${id}`);
    },

    reorderItems: async (items: { id: string, order: number }[]): Promise<void> => {
        await apiClient.patch(`/portfolio/reorder`, { items });
    }
};
