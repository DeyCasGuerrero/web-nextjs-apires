

import NextJsIcon from "../../icons/NextJSIcon";

export default function InformationSection() {


    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white flex justify-around flex-wrap max-sm:flex-col max-sm:p-4 max-md:justify-normal overflow-hidden" id="info">
            <NextJsIcon width={300} height={300} className="max-sm:w-full mb-8"></NextJsIcon>

            <div className="flex flex-col gap-8 w-full max-w-xl">
                <details name="cookies" open className="border border-black shadow-lg bg-slate-800 p-6 rounded-md cursor-pointer">
                    <summary className="transition-all duration-300 ease-in-out cursor-pointer" data-value="1">¿Qué es Next.js?</summary>
                    <p>Next.js es un framework de JavaScript que permite hacer server-rendering de aplicaciones basadas en JavaScript. Es un pequeño framework construido sobre React.js que ayuda a reducir la fatiga de los desarrolladores.</p>
                </details>
                <details name="cookies" className="border border-black shadow-lg bg-slate-800 p-6 rounded-md cursor-pointer">
                    <summary className="transition-all duration-300 ease-in-out cursor-pointer" data-value="2">¿Cómo crear una app con Next.js?</summary>
                    <p>Para crear una app en Next.js, debes buscar en tu navegador "create app Next.js", ahí encontrarás toda la documentación. Si no quieres leer toda la documentación, entonces solo coloca este comando en tu terminal: "npx create-next-app@latest".</p>
                </details>
                <details name="cookies" className="border border-black shadow-lg bg-slate-800 p-6 rounded-md cursor-pointer">
                    <summary className="transition-all duration-300 ease-in-out cursor-pointer" data-value="3">¿Por qué debería usar Next.js?</summary>
                    <p>Next.js es una herramienta poderosa que se integra con React y ofrece ventajas significativas para el desarrollo web. Por ejemplo, mejora el rendimiento y la experiencia del usuario, tiene tipos de aplicaciones web, mejora del SEO, etc.</p>
                </details>
                <details name="cookies" className="border border-black shadow-lg bg-slate-800 p-6 rounded-md cursor-pointer">
                    <summary className="transition-all duration-300 ease-in-out cursor-pointer" data-value="4">¿Qué es el RSC y el RCC?</summary>
                    <p>Los Server Components (RSC) son una característica avanzada de Next.js que permite escribir componentes de interfaz de usuario que pueden renderizarse en el servidor, mientras que la Renderización del Cliente (RCC) se refiere al proceso en el que el cliente (navegador) toma el HTML generado en el servidor y lo utiliza para mostrar una vista previa rápida y no interactiva de la ruta.</p>
                </details>
            </div>
        </section>

    )
}