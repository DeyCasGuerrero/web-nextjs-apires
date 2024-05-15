
function UserInfo ({ userData, userImage }){

    const handleLogout = async () => {
        localStorage.removeItem('authenticatedUser');
    };

    return(
        <div className="flex gap-x-2 items-center">
        <p className="font-bold tracking-tight bg-yellow-300 p-2 rounded-md max-sm:hidden">
            {userData?.nombre || "Nombre de usuario"}
        </p>
        {userImage ? (
            <img src={userImage} alt="Foto de perfil" className="w-14 h-14 rounded-full cursor-pointer hover:shadow-md hover:scale-110 transition duration-300 focus:outline-none" />
        ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer" />
        )}
        <button className="bg-sky-700 ml-8 p-4 rounded-full hover:shadow-md hover:scale-105 transition duration-300 focus:outline-none max-md:ml-0" onClick={handleLogout}>
            LogOut
        </button>
    </div>
    )
}

export default UserInfo;