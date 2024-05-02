
import Link from 'next/link';

function Navbar() {

    return (
        <nav className="bg-black flex items-center p-5 justify-between " >

            <div className="flex text-white gap-32 uppercase font-mono text-lg " >
                <Link href={`/`} legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300">INICIO</a></Link>

                <Link href="#info" legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300">INFO</a></Link>

                <Link href="#news" legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300">NOTICIAS</a></Link>

                <Link href="#proyecto" legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300">PROYECTOS</a></Link>

                <Link href={`/users`} legacyBehavior><a className="hover:text-yellow-200 hover:scale-110 transition duration-300">MIEMBROS</a></Link>
            </div>
        </nav>
    )

}

export default Navbar