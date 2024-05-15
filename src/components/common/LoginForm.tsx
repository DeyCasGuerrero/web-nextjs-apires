"use client"
import { useEffect, useState } from "react";
import { useAuth, handleGoogleSignIn, handleGitHubSignIn } from "@/hooks/useAuth"; 
import { useSignIn } from "@/hooks/usePostApiRest"; 
import { useRouter } from "next/navigation";
import Link from "next/link"; 
import { User } from "@/types/UserType"; 
import GitHubIcon from "../icons/GitHubIcon";
import GoogleIcon from "../icons/GoogleIcon";


export default function LoginForm() {
    const router = useRouter();
    const { session } = useAuth();
    const { signUser, errorSignIn, isSignedIn, authenticatedUser } = useSignIn();

    const [credentials, setCredentials] = useState<User>({
        email: '',
        password: '',
    });

    useEffect(() => {
        // Si el usuario está autenticado, guarda los datos en el localStorage
        if (authenticatedUser) {
            localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser));
        } else {
            // Si el usuario cierra sesión, elimina los datos del localStorage
            localStorage.removeItem('authenticatedUser');
        }
    }, [authenticatedUser]);

    useEffect(() => {
        if (isSignedIn) {
            router.push("/");
        }
    }, [isSignedIn, router]);

    
    if (session) {
        router.back();
        return null
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // evitar que se recargue y manejar personalización en ts
        await signUser(credentials)
    }

    return (

        <div>
            <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
                <div className="mb-2 flex justify-center"></div>
                <h2 className="text-center text-2xl font-bold leading-tight text-black">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Sign up for free!
                </p>
                <form className="mt-8" method="POST" action="#" onSubmit={handleSubmit}>
                    <div className="space-y-5">
                        <div>
                            <label className="text-base font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    className="flex text-black h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-1"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-base font-medium text-gray-900">
                                    Password
                                </label>
                                <a
                                    className="text-sm font-semibold text-black hover:underline"
                                    title=""
                                    href="#"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <div className="mt-2">
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    className="flex text-black h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm "
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <button
                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                            type="submit"
                        >
                            Get started
                        </button>

                    </div>
                </form>

                {errorSignIn && <p>{errorSignIn}</p>}

                <div className="mt-3 space-y-3">
                    <button
                        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                        type="button"
                        onClick={handleGoogleSignIn}
                    >
                        <span className="mr-2 inline-block">
                            <GoogleIcon size={26}></GoogleIcon>
                        </span>
                        Sign in with Google
                    </button>
                </div>
                <div className="mt-3 space-y-3">
                    <button
                        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                        type="button"
                        onClick={handleGitHubSignIn}
                    >
                        <span className="mr-2 inline-block">
                            <GitHubIcon size={24} color="#000"></GitHubIcon>
                        </span>
                        Sign in with Github
                    </button>
                </div>
                <div className="text-sm text-center mt-[1.6rem] ">
                    <p className="text-black">Dont have an account yet? </p>
                    <Link href="register" className="text-sm text-[#7747ff]" >Sign up for free!</Link>
                </div>
            </div>
        </div>
    )
}