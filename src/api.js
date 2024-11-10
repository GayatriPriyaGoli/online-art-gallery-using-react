// src/api.js (create this file if you don't have it already)

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
