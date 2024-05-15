"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useRegisterUser } from "@/hooks/usePostApiRest";
import { User } from "@/types/UserType";

function Register() {
    const router = useRouter();
    const { session } = useAuth();

    if (session) {
        router.back();
    }

    const [userData, setUserData] = useState<User>({
        nombre: '',
        email: '',
        password: '',
    });

    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (!userData.nombre || !userData.email || !userData.password || !repeatPassword) {
            alert('Por favor, complete todos los campos del formulario.');
            return;
        }

        if (userData.password !== repeatPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            await registerUser(userData);
            router.push('/form');
        } catch (error) {
            console.error('Error al registrar al usuario:', error);
            alert('Hubo un error al registrar al usuario. Por favor, inténtalo de nuevo más tarde.');
        }
    };


    const { registerUser } = useRegisterUser();

    return (
        
        <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-base text-gray-600">Already have an account? Sign In</p>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label className="text-base font-medium text-gray-900">User Name</label>
                        <div className="mt-2">
                            <input
                                placeholder="Full Name"
                                type="text"
                                className="text-gray-900 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                name="nombre"
                                value={userData.nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="text-black">
                        <label className="text-base font-medium text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input
                                placeholder="Ejemplo@gmail.com"
                                type="email"
                                className="text-gray-900 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 "
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="">
                        <label className="text-base font-medium text-gray-900">Password</label>
                        <div className="mt-2">
                            <input
                                placeholder="Mayúsculas, números y minusculas"
                                type="password"
                                className="text-black flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                name="password"
                                value={userData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-base font-medium text-gray-900">Repeat Password</label>
                        <div className="mt-2">
                            <input
                                placeholder="Repeat Password"
                                type="password"
                                className="text-gray-900 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                value={repeatPassword}
                                onChange={handleRepeatPasswordChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                            type="submit"
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;
