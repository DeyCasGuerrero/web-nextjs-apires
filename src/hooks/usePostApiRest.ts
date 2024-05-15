import { User } from '@/types/UserType';
import { useState } from 'react';
import bcrypter from 'bcryptjs'

export function useRegisterUser(): { registerUser: (userData: User) => void } {

    const registerUser = async (userData: User) => {
        try {
            
            console.log('Datos del usuario a enviar:', userData);
            const response = await fetch( `${process.env.NEXT_PUBLIC_APIRES_URL}/api/usuario/guardar/usuario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            if (response.ok) {
                console.log('Usuario registrado exitosamente');
            } else {
                console.error('Error al registrar usuario por correo o contraseña:', response.status);
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    return { registerUser };
}

export function useSignIn() {
    const [errorSignIn, setErrorSignIn] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null); // Nuevo estado para almacenar el usuario autenticado

    const signUser = async (credentials: { email: string, password: string }) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_APIRES_URL}/api/usuario/verificar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const usuarioExistente = await response.json(); // Obtener el usuario existente desde la respuesta
                setErrorSignIn('');
                setIsSignedIn(true);
                setAuthenticatedUser(usuarioExistente); // Almacenar el usuario autenticado
            } else {
                setErrorSignIn('Correo electrónico o contraseña incorrectos');
                setIsSignedIn(false);
                console.error('Error al autenticar al usuario:', response.status);
            }
        } catch (error) {
            setErrorSignIn('Error al conectar con el servidor');
            setIsSignedIn(false);
            console.error('Error al conectar con el servidor:', error);
        }
    };

    return {
        errorSignIn,
        isSignedIn,
        authenticatedUser, // Devolver el usuario autenticado
        signUser
    };
}

