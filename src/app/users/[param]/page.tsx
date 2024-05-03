import { UserReqres } from "@/types/UsersJsonHolder";
import { fetchApi } from "@/utils/Api"


async function Profiles({ params }) {

    const profile:UserReqres = await fetchApi(params.param);

    return (
        <main className="p-20 font-mono">
            <p className="text-center text-3xl tracking-widest mb-8">Perfil</p>

            <div key={profile.id} className="flex flex-col-reverse items-center gap-8">
                <p className="text-yellow-300 text-xl bg">{profile.email}</p>
                <h2 className="text-pink-500 text-xl">{profile.last_name}</h2>
                <h1 className="text-pink-500 text-2xl">{profile.first_name}</h1>
                <img src={profile.avatar} className="rounded-full border-2 border-yellow-300 "></img>
            </div>


        </main>
    )

}

export default Profiles