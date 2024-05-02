import { User } from '@/types/UserType';

export function useRegisterUser(): { registerUser: (userData: User) => void } {
    const registerUser = async (userData: User) => {
        try {
            console.log('Datos del usuario a enviar:', userData); 
            const response = await fetch('http://localhost:8080/api/usuario/guardar/usuario', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(userData)
            });
            if (response.ok) {
                console.log('Usuario registrado exitosamente');
            } else {
                console.error('Error al registrar usuario:', response.status);
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    return { registerUser };
}

