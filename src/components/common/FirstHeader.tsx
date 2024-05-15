"use client"
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import NextJsIcon from "@/components/icons/NextJSIcon";
import { signOut } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { User } from "@/types/UserType";

export default function Header() {
    const router = useRouter();
    const { session, userImage } = useAuth();
    const [userData, setUserData] = useState<User | null>(null);
    useEffect(() => {
        const storedUserData = localStorage.getItem('authenticatedUser');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/" });
        localStorage.removeItem('authenticatedUser');

    };

    return (
        <>
            <header className="bg-black flex p-3 justify-between items-center">
                <div className="flex items-center gap-8 text-white font-bold max-sm:gap-1">

                    <Link href="/">
                        <NextJsIcon width={70} height={70}></NextJsIcon>
                    </Link>
                    <p className="text-2xl tracking-widest">Next.js</p>
                </div>

                {session?.user || userData ? (
                    <div className="flex gap-x-2 items-center">
                        <p className="font-bold tracking-tight bg-yellow-300 p-2 rounded-md max-sm:hidden">{session?.user ? session.user.name : userData?.nombre}</p>
                        {userImage ? (
                            <Link href="profile">
                                <img src={userImage} alt="Foto de perfil"  width={100} height={100}  className="w-14 h-14 rounded-full cursor-pointer  hover:shadow-md hover:scale-110 transition duration-300 focus:outline-none" />
                            </Link>
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer" />
                        )}

                        <button className="bg-sky-700 ml-8 p-4 rounded-full hover:shadow-md hover:scale-105 transition duration-300 focus:outline-none max-md:ml-0" onClick={handleLogout}>
                            LogOut
                        </button>
                    </div>
                ) : (
                    <p className="text-white font-bold uppercase hover:text-yellow-200 hover:underline">
                        <Link href="form">
                            Iniciar sesión
                        </Link>
                    </p>
                )}


            </header>
        </>
    );
}
