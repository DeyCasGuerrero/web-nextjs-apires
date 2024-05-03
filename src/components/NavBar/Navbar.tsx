"use client"
import Link from 'next/link';
import { useAuthGmail } from '@/hooks/useAuth';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Navbar() {

    const { session } = useAuthGmail();
    const [isClick, setisClick] = useState(false);

    const toggleNavBar = () => {
        setisClick(!isClick);
    }

    return (
        <nav className={`bg-black flex items-center p-5 justify-between overflow-hidden ${isClick ? 'fixed  inset-0 z-50 flex-col justify-start' : ''}`}>


            <div className="flex text-white gap-32 uppercase font-mono text-lg max-lg:hidden">
                <Link href="/" legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300">INICIO</a></Link>

                <Link href="#info" legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300">INFO</a></Link>

                <Link href="#news" legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300">NOTICIAS</a></Link>

                <Link href="#proyecto" legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300">PROYECTOS</a></Link>

                {session?.user ? (
                    <Link href="/users" legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300">MIEMBROS</a></Link>
                ) : (
                    <div></div>
                )}
            </div>

            <div className='lg:hidden items-center'>
                <button
                    className='inline-flex items-center justify-center p-2 rounded-md text-white
                    hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={toggleNavBar}
                >
                    {!isClick ? (
                        <FontAwesomeIcon width={50} height={50} icon={faBars} />
                    ) : (
                        <FontAwesomeIcon width={50} height={50} icon={faX} />
                    )}

                </button>

            </div>

            {isClick && (
                <div className='absolute inset-x-0 top-20 flex items-center'>
                    <div className='p-16 sm:px-3 rounded-lg text-xl font-mono w-full '>
                        <Link href={`/`} legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300 block hover:bg-slate-700 p-3 rounded-2xl">INICIO</a></Link>

                        <Link href="#info" legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300 block mt-8  hover:bg-slate-700 p-3 rounded-2xl">INFO</a></Link>

                        <Link href="#news" legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300 block mt-8  hover:bg-slate-700 p-3 rounded-2xl">NOTICIAS</a></Link>

                        <Link href="#proyecto" legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300 block mt-8  hover:bg-slate-700 p-3 rounded-2xl">PROYECTOS</a></Link>

                        {session?.user ? (
                            <Link href={`/users`} legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300 block mt-8  hover:bg-slate-700 p-3 rounded-2xl">MIEMBROS</a></Link>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            )}
        </nav>

    )

}

export default Navbar