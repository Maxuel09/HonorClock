/* eslint-disable no-unused-vars */
import { useCallback,  useState } from 'react'
import { productsList } from '../service/productList'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [productById, setProductById] = useState([])

  const getProducts = useCallback( async() =>{
    try {
      setLoading(true)
      setError(null)
      const newProducts = await productsList('http://localhost:3001/Products')
      setProducts(newProducts)
    } catch (e:any) {
      setError(e.errorMessage)
    } finally {
      setLoading(false)
    }
  },[])

  const getProductsById = useCallback( async(id:string) =>{
    if(id === undefined || id === null || id === ""){
      return;
    }
      try {
        setLoading(true)
        setError(null)
        const newProduct = await productsList('https://fakeapi-dusky.vercel.app/product/'+ id)
        setProductById(newProduct)
      } catch (e:any) {
        setError(e.errorMessage)
      } finally {
        setLoading(false)
      }    
    },[])

  return { products, productById, loading, getProducts, getProductsById, error }

}