"use client"
import NextJsIcon from "../../icons/NextJSIcon"
import Link from "next/link"
import TwitterIcon from "../../icons/TwitterIcon"
import GoogleIcon from "../../icons/GoogleIcon"
import ProyectList from "../../client/ProjectsList"
import { useAuth } from "@/hooks/useAuth"
import Animation from "@/components/animations/Animation"
import { useState, useEffect } from "react"
import { User } from "@/types/UserType"

export default function EventSection() {

    const { session } = useAuth();
    const [userData, setUserData] = useState<User | null>(null);
    useEffect(() => {
        const storedUserData = localStorage.getItem('authenticatedUser');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    const handleLogout = async () => {
        localStorage.removeItem('authenticatedUser');
    };


    return (
<>
    {(session?.user || userData) ? (
        <section id="proyecto" className="bg-gradient-to-r from-slate-900 to-slate-700 overflow-hidden flex items-start p-12 max-sm:p-6 justify-around max-sm:flex-col max-sm:gap-y-8">
            <aside className="bg-black w-80 h-96 p-10 rounded-xl flex flex-col items-center gap-8 border-t-4 border-yellow-300 max-sm:w-full">
                <NextJsIcon width={100} height={100}></NextJsIcon>
                <div className="text-white flex flex-col items-center justify-center gap-6 ">
                    <h2 className="font-bold text-xl  underline">NEXT JS</h2>
                    <Link href="https://nextjs.org/docs" target="_blank">
                        <p className="font-mono tracking-wider text-center no-underline cursor-pointer hover:underline hover:text-yellow-300">Entrar al link de la documentación</p>
                    </Link>
                </div>
            </aside>

            <div className="bg-black w-2/5 rounded-xl border-t-2 border-yellow-300 p-8 flex flex-col max-sm:w-full max-sm:p-4">
                <h2 className=" uppercase text-center text-4xl text-yellow-300">PROYECTOS</h2>
                <br />
                <h1 className='text-white text-center font-mono text-2xl'>Proyectos en Nextjs hechos por mi en mi GitHub</h1>
                <ProyectList></ProyectList>
            </div>

            <div className="bg-black text-white w-72 h-96 p-8 rounded-xl border-t-2 border-yellow-300 flex flex-col items-center gap-8 justify-center max-sm:w-full">
                <p className="font-mono text-2xl underline text-yellow-300">NEXTJS LINKS</p>

                <Link href="https://twitter.com/nextjs" target="_blank" >
                    <div className="flex items-center gap-5">
                        <TwitterIcon width={50} height={50}></TwitterIcon>
                        <p className="font-mono font-bold text-xl hover:underline hover:text-yellow-300">Twitter</p>
                    </div>
                </Link>

                <Link href="https://nextjs.org/" target="_blank"  >
                    <div className="flex items-center gap-5">
                        <GoogleIcon width={50} height={50}></GoogleIcon>
                        <p className="font-mono font-bold text-xl hover:underline hover:text-yellow-300">WebSite</p>
                    </div>
                </Link>
            </div>
        </section>
    ) : (
        <div className="flex items-center flex-col gap-20 justify-center p-20 uppercase text-3xl font-extrabold">
            <p className="text-yellow-300 text-3xl font-extrabold underline">PROYECTOS</p>
            <p> INICIA SESIÓN PARA VISUALIZAR LOS PROYECTOS</p>
            <Animation text="¡La magia está a punto de comenzar!" time={2000}></Animation>
        </div>
    )}
</>
    )
}