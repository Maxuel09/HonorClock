const API_BASE_URL = 'https://honorclock.up.railway.app/HC/register'; // Reemplaza con la URL base de tu API

interface RegisterData {
    username: string;
    email: string;
    password: string;
}

export const registerUser = async (userData: RegisterData): Promise<void> => {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error al registrar al usuario');
        }

        const responseData = await response.json();
        console.log('Respuesta del registro:', responseData);
        
    } catch (error) {
        console.error('Error en el registro:', error);
        
    }
};
