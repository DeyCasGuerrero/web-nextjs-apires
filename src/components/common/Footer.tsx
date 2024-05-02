import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-slate-300 to-slate-500 py-8 px-4 text-white">
            <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-400 p-4 rounded-lg">
                    <p className="text-lg mb-2 font-semibold">Información de Contacto</p>
                    <p className="mb-2">Dirección: Anexo Andrés Avelino Cáceres 1, Piura 20001</p>
                    <p className="mb-2">Teléfono: (123) 456-7890</p>
                    <p>Correo: info@Next.Js-isi.com</p>
                </div>
                <div className="bg-slate-600 p-4 rounded-lg">
                    <p className="text-lg mb-2 font-semibold">Enlaces Útiles</p>
                    <ul className="mb-2">
                        <li><Link href="" className="text-white underline">Políticas</Link></li>
                        <li><Link href="" className="text-white underline">Términos de Uso</Link></li>
                    </ul>
                    <p>¡Síguenos en las redes sociales!</p>
                </div>
            </div>
            <p className="mt-8 text-center text-sm">&copy; 2023 Facultad de Ingeniería de Sistemas e Informática</p>
        </footer>


    )
}