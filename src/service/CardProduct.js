

export const ProductService = {
    async getProducts(){
        try {
            const response = await fetch("https://honorclock.up.railway.app/HC/Product");
            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    
};

