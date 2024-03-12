export const UserList = async (url: string) =>{
    if(url === '') return null
  
    try {
      const response = await fetch(url)
      const products = await response.json()
  
      return products
    } catch (error: any) {
      throw new Error('Error carga usuarios: ' + error.message)
    }
  
  }