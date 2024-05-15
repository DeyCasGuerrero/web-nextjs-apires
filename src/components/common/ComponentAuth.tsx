import Link from "next/link";

const SessionInfo = ({ session, signOut, userImage }) => (
    <div className="flex gap-x-2 items-center">
        <p className="font-bold tracking-tight bg-yellow-300 p-2 rounded-md max-sm:hidden">
            {session?.user ? session.user.name : "Nombre de usuario"}
        </p>
        <Link href={`/profile`}>
            <img src={userImage} alt="Foto de perfil" className="w-14 h-14 rounded-full cursor-pointer hover:shadow-md hover:scale-110 transition duration-300 focus:outline-none" />
        </Link>
        <button className="bg-sky-700 ml-8 p-4 rounded-full hover:shadow-md hover:scale-105 transition duration-300 focus:outline-none max-md:ml-0" onClick={async () => {
            await signOut({ callbackUrl: "/" });
        }}>
            LogOut
        </button>
    </div>
);

export default SessionInfo;
