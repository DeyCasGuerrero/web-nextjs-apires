"use client"
import { Project } from '@/types/UserType';
import { useProjectData } from '@/hooks/useGetApiRes';
import Link from 'next/link';
import GitHubIcon from '../icons/GitHubIcon';


function ProyectList() {

    const projects: Project[] = useProjectData();
    return (

        <>
            {projects.map((project) => (
                <div key={project.id_proyecto} className='text-white border-t-2 mt-5 border-yellow-300'>
                    <br />
                    <h1 className='font-bold tracking-widest text-left text-2xl text-yellow-300'>{project.id_proyecto}. {project.titulo}</h1>
                    <p className='font-mono text-justify '>{project.contexto}</p>
                    <br/>
                    <div className='items-center flex gap-x-4'>
                        <Link href={project.linkRepositorio} target="_blank">
                            <p className='font-extrabold tracking-widest text-left cursor-pointer hover:underline hover:text-yellow-300'>Entrar a GitHub</p>
                        </Link>
                        <GitHubIcon height={40} width={40} className='animate-bounce'></GitHubIcon>
                    </div>
                    <br />
                    {project.imagen ? (
                        <img
                            className="rounded-xl bg-gradient-to-br from-black via-transparent to-black "
                            src={project.imagen}
                            alt={project.titulo}
                        />
                    ) : (
                        <p>No hay imagen disponible</p>
                    )}
                </div>

            ))}


        </>
    )

}

export default ProyectList