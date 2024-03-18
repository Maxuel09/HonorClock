
import { useForm, SubmitHandler } from 'react-hook-form';

interface User {
    name: string;
    email: string;
    password: string;
}

const API_URL = 'https://honorclock.up.railway.app/HC/register';

const registerUser = async (user: User) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            return new Error('Error en la solicitud de registro');
        }

        return await response.json();
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        throw error; 
    }
};

const RegisterForm = () => {
    const { register, handleSubmit } = useForm();
    

    const onSubmitRegister: SubmitHandler<User> = async (data) => {
        try {
            const response = await registerUser(data);
            console.log('Usuario registrado exitosamente:', response);

    
            
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    return (
        <div className="register">
            <form className="form" onSubmit={handleSubmit(onSubmitRegister)}>
                <label htmlFor="chk" aria-hidden="true">Register</label>
                <input className="input" type="text" placeholder="Name" {...register('name', { required: true })} />
                <input className="input" type="email" placeholder="Email" {...register('email', { required: true })} />
                <input className="input" type="password" placeholder="Password" {...register('password', { required: true })} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
