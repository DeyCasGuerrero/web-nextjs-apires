"use client"
import Animation from "@/components/animations/Animation";
import NewsList from "../../client/NewsList";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react"
import { User } from "@/types/UserType"

export default function NewSection() {

    const { session } = useAuth();
    const [userData, setUserData] = useState<User | null>(null);
    useEffect(() => {
        const storedUserData = localStorage.getItem('authenticatedUser');

        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);


    return (
        <>
            {(session?.user || userData) ?(
                <section id="news" className="flex items-center justify-center flex-col p-8 md:p-20 gap-y-8 md:gap-y-12 overflow-hidden bg-gradient-to-r from-slate-300 to-slate-500">
                    <p className="text-center font-bold uppercase text-4xl un md:text-4xl text-black">Noticias</p>
                    <p className="text-center font-bold uppercase text-lg md:text-xl tracking-widest text-black">Enterate de las últimas noticias de Next.js</p>
                    <div className="flex flex-col md:flex-row justify-center md:justify-around gap-8 md:gap-14">
                        <NewsList></NewsList>
                    </div>
                </section>


            ) : (
                <section id="news" className=" uppercase text-3xl font-extrabold flex items-center justify-center flex-col p-20 gap-y-12 overflow-hidden bg-gradient-to-r from-slate-300 to-slate-500">
                    <p className="text-center font-bold uppercase text-4xl underline text-black">noticias</p>
                    <p className="text-center font-bold uppercase text-xl tracking-widest text-black">ENTERATE DE LAS ULTIMAS NOTICIAS DE NEXT.JS</p>

                    <p className="text-4xl uppercase"> INICIA SESIÓN PARA VISUALIZAR LAS NOTICIAS</p>
                    <Animation text="¡La magia está a punto de comenzar!" time={2000}></Animation>

                </section>

            )}


        </>
    )
}