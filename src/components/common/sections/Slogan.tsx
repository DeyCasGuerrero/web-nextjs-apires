

export default function Slogan() {

    return (
        <main className="flex min-h-screen overflow-hidden flex-col items-center justify-center p-8 bg-black text-white " style={{ background: 'url("https://i.pinimg.com/originals/da/e3/6a/dae36a74337de05e249ce5afcec907c1.gif") 0% 0%', imageRendering: 'pixelated', filter: 'brightness(80%)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <h1 className="text-white tracking-widest text-8xl text-left uppercase font-bold  max-sm:text-center max-sm:text-6xl max-sm:tracking-tighter">PAGINA PARA EL FRAMEWORK NEXT.JS</h1>
            <p className="text-white text-right text-5xl font-mono uppercase max-sm:text-4xl max-sm:tracking-tighter" data-section="home" data-value="second-phrase"> ENCUENTRA LO QUE NECESITES EN ESTÁ PAGINA </p>
        </main>
    )
}