"use client"
import NextJsIcon from "../../icons/NextJSIcon"
import Link from "next/link"
import TwitterIcon from "../../icons/TwitterIcon"
import GoogleIcon from "../../icons/GoogleIcon"
import ProyectList from "../../client/ProjectsList"
import { useAuthGmail } from "@/hooks/useAuth"

export default function EventSection() {

    const { session } = useAuthGmail();

    return (

        <>
            {session?.user ? (

                <section id="proyecto" className="bg-gradient-to-r from-slate-900 to-slate-700 flex items-center p-12 justify-around">

                    <aside className="bg-black w-80 h-96 p-10 rounded-xl flex flex-col items-center gap-8 border-t-4 border-yellow-300">
                        <NextJsIcon width={100} height={100}></NextJsIcon>
                        <div className="text-white flex flex-col items-center justify-center gap-6 ">
                            <h2 className="font-bold text-xl  underline">NEXT JS</h2>
                            <Link href="https://nextjs.org/docs" target="_blank">
                                <p className="font-mono tracking-wider text-center no-underline cursor-pointer hover:underline hover:text-yellow-300">Entrar a su documentación</p>
                            </Link>
                        </div>
                    </aside>

                    <div className="bg-black w-2/5 rounded-xl border-t-2 border-yellow-300 p-8 flex flex-col ">
                        <h2 className=" uppercase text-center text-4xl text-yellow-300">PROYECTOS</h2>
                        <br />
                        <h1 className='text-white text-center font-mono text-2xl'>Proyectos en Nextjs hechos por mi en mi GitHub</h1>
                        <ProyectList></ProyectList>
                    </div>

                    <div className="bg-black text-white w-72 h-96 p-8 rounded-xl border-t-2 border-yellow-300 flex flex-col items-center gap-8 justify-center">
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
                </div>
            )}
        </>
    )
}