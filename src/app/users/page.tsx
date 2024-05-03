import { fetchApi } from "@/utils/Api"
import { UserReqres } from "@/types/UsersJsonHolder"
import Button from "@/components/common/Button";
import Link from "next/link";

async function Users() {

    const usersJsonHolder = await fetchApi();
    return (
        <main className="bg-slate-950 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 md:p-20 gap-8 md:gap-x-10 md:gap-y-10 max-sm:grid-cols-1 max-sm:p-1">
            {usersJsonHolder.map((user: UserReqres) => (
                <div key={user.id} className="bg-black rounded-2xl p-5 flex flex-col items-center justify-center overflow-hidden">
                    <h1 className="font-bold tracking-wider text-xl md:text-2xl text-yellow-300">{user.first_name}</h1>
                    <h2 className="text-lg md:text-xl font-serif">{user.last_name}</h2>
                    <p className="font-mono tracking-widest text-lg md:text-xl text-pink-700 max-sm:tracking-tighter ">{user.email}</p>
                    {user.avatar ? (
                        <img
                            className="rounded-xl bg-gradient-to-br from-black via-transparent to-black"
                            src={user.avatar}
                            alt={user.first_name}
                        />
                    ) : (
                        <p>No tiene imagen de perfil</p>
                    )}

                    <Link href={`users/${user.id}`}>
                        <Button 
                            color="text-blue-500"
                            bg="bg-gray-200"
                            buttonText="Entrar perfil">
                        </Button>
                    </Link>
                </div>
            ))}
        </main>

    )
}

export default Users