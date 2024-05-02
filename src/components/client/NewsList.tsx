"use client"
import { News } from "@/types/UserType"
import { useNewData } from "@/hooks/useGetApiRes"
import Link from "next/link";

function NewsList() {

    const news: News[] = useNewData();

    return (
        <>
            {news.map(newItem => (

                <div className="bg-white w-64 h-auto rounded-lg shadow-2xl" key={newItem.id_noticias}>
                    <div className="flex p-2 gap-1">
                        <div className="">
                            <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                        </div>
                        <div className="circle">
                            <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                        </div>
                        <div className="circle">
                            <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                        </div>
                    </div>
                    <div className="p-5 text-center flex flex-col justify-around items-start gap-4 text-black">
                        <h1 className="uppercase font-extrabold text-base">{newItem.titular}</h1>
                        <p className="text-justify font-sans">{newItem.contenido}</p>
                        <Link href={newItem.link} target="_blank" className="bg-slate-600 p-2 rounded-lg text-white uppercase transition-colors hover:bg-black ">
                            Entrar
                        </Link>
                    </div>
                </div>


            ))}

        </>
    )
}

export default NewsList