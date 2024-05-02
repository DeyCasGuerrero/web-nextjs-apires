"use client"
import NewsList from "../../client/NewsList";
import { useAuthGmail } from "@/hooks/useAuth";


export default function NewSection() {

    const { session } = useAuthGmail();

    return (
        <>
            {session?.user ? (
                <section id="news" className="flex items-center justify-center flex-col p-20 gap-y-12 overflow-hidden bg-gradient-to-r from-slate-300 to-slate-500">
                    <p className="text-center font-bold uppercase text-3xl text-black">noticias</p>
                    <p className="text-center font-bold uppercase text-xl tracking-widest text-black">ENTERATE DE LAS ULTIMAS NOTICIAS DE NEXT.JS</p>
                    <div className="flex justify-around gap-14">
                        <NewsList></NewsList>
                    </div>
                </section>

            ) : (
                <section id="news" className="flex items-center justify-center flex-col p-20 gap-y-12 overflow-hidden bg-gradient-to-r from-slate-300 to-slate-500">
                    <p className="text-center font-bold uppercase text-3xl text-black">noticias</p>
                    <p className="text-center font-bold uppercase text-xl tracking-widest text-black">ENTERATE DE LAS ULTIMAS NOTICIAS DE NEXT.JS</p>
                    <div className="flex justify-around gap-14">
                        <p className="text-4xl uppercase"> INICIA SESIÓN PARA VISUALIZAR LAS NOTICIAS</p>
                    </div>
                </section>

            )}


        </>
    )
}