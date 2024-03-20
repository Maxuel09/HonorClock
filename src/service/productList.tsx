export const productsList = async (url: string): Promise<any> => {
    if (url === '') return null;
  
    try {
      const response = await fetch(url);
      const products = await response.json();
      return products;
    } catch (error: any) {
      throw new Error('Error carga Productos: ' + error.message);
    }
  };
  