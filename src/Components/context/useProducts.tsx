/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react';
import { productsList } from '../../service/productList';

interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  stock: number;
  description: string;
}

interface Error {
  errorMessage: string;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [productById, setProductById] = useState<Product | null>(null);

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const newProducts: Product[] = await productsList('https://honorclock.up.railway.app/HC/Product');
      setProducts(newProducts);
    } catch (e: any) {
      setError({ errorMessage: e.errorMessage });
    } finally {
      setLoading(false);
    }
  }, []);

  const getProductsById = useCallback(async (id: string) => {
    if (!id) {
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const newProduct: Product = await productsList('https://honorclock.up.railway.app/HC/Product/' + id);
      setProductById(newProduct);
    } catch (e: any) {
      setError({ errorMessage: e.errorMessage });
    } finally {
      setLoading(false);
    }
  }, []);

  return { products, productById, loading, getProducts, getProductsById, error };
}
