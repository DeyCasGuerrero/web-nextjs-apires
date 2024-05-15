"use client"
import { useAuth } from "@/hooks/useAuth"


export default function Profile() {
    const { session, userImage } = useAuth();

    return (
        <>
            <main className="min-h-screen flex justify-center items-center p-8 bg-black text-white ">
                <div className=" bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 h-96 relative font-bold">
                        <h1 className="text-5xl  italic tracking-wider uppercase mb-4 max-md:text-xl max-md:text-center">Perfil de usuario</h1>
                        <br></br>
                        <img className="w-32 h-32 rounded-full mx-auto mb-4 mt-5 animate-bounce" src={userImage} alt="perfil" />
                        <div className="text-center">
                            <h1 className="text-3xl text-center">{session?.user?.name}</h1>
                            <h2 className="text-base">{session?.user?.email}</h2>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}