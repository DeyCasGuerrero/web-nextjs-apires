import { fetchApi } from "@/utils/Api"
import { UserReqres } from "@/types/UsersJsonHolder"

async function Users() {

    const usersJsonHolder = await fetchApi();
    return (
        <main className="bg-slate-950 text-white grid grid-cols-3 p-20 gap-x-10 gap-y-10">
            {usersJsonHolder.map((user: UserReqres) => (
                <div key={user.id} className="bg-black rounded-2xl p-5 flex items-center justify-center flex-col">
                    <h1 className="font-bold tracking-wider text-2xl text-yellow-300 ">{user.first_name}</h1>
                    <h2 className=" text-xl font-serif">{user.last_name}</h2>
                    <p className="font-mono tracking-widest text-xl text-pink-700">{user.email}</p>
                    {user.avatar ? (
                        <img
                            className="rounded-xl bg-gradient-to-br from-black via-transparent to-black "
                            src={user.avatar}
                            alt={user.first_name}
                        />

                    ) : (
                        <p>No tiene imagen de perfil</p>
                    )}

                </div>
            ))}
        </main>
    )
}

export default Users