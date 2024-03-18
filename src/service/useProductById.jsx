import React from 'react'

export const useProductById = () => {
    const [error, setError] = useState(null)
    const [productById, setProductById] = useState({})
    
    const getProductsById = useCallback( async(id) =>{
      if(id === undefined || id === null || id === ""){
        return;
      }
        try {
      
          setError(null)
          const newProduct = await productsList('https://honorclock.up.railway.app/HC/Product/'+ id)
          setProductById(newProduct)
        } catch (e) {
          setError(e.errorMessage)
        } finally {
          setLoading(false)
        }    
      },[])
  
  
    return {  productById, getProductsById, error }
}

