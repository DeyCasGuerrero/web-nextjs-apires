"use client"
import { useState } from "react";
import { User } from "@/types/UserType";
import { useRegisterUser } from "@/hooks/usePostApiRest";
import { useRouter } from "next/navigation";

function Register() {

    const [userData, setUserData] = useState<User>({
        nombre: '',
        correo: '',
        contraseña: ''
    });

    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const { registerUser } = useRegisterUser();

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

        if (!userData.nombre || !userData.correo || !userData.contraseña || !repeatPassword) {
            alert('Por favor, complete todos los campos del formulario.');
            return;
        }

        if (userData.contraseña !== repeatPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        await registerUser(userData);
    };


    // const [showMenssage, SetShowMenssage]=useState<Boolean>(isValid)

    return (

        <div className="">
            <section className="rounded-md p-2 bg-white">
                <div className="flex items-center justify-center my-3">
                    <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <div className="mb-2"></div>
                        <h2 className="text-2xl font-bold leading-tight">
                            Sign up to create account
                        </h2>
                        <p className="mt-2 text-base text-gray-600">
                            Already have an account? Sign In
                        </p>
                        <form className="mt-5" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        User Name
                                    </label>
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
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            className="text-gray-900 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            name="correo"
                                            value={userData.correo}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            placeholder="Password"
                                            type="password"
                                            className="text-gray-900 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            name="contraseña"
                                            value={userData.contraseña}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-base font-medium text-gray-900">
                                        Repeat Password
                                    </label>
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
                </div>
            </section>
        </div>
    )

}

export default Register