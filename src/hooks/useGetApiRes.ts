import { useEffect, useState } from "react";
import { Project, News} from "@/types/UserType";

export function useProjectData(): Project[] {
    const [projects, setProjects] = useState<Project[]>([]);
    const apiUrl = `${process.env.NEXT_PUBLIC_APIRES_URL}/api/proyecto/all`;

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then((data: Project[]) => {
                setProjects(data);
                console.log("entro a actualizar el estado")
            })
            .catch(error => {
                console.error('Error al obtener proyectos:', error);
            });
    }, [apiUrl]); // Agregar apiUrl como dependencia

    return projects;
}

export function useNewData(): News[] {
    const [news, setNews] = useState<News[]>([]);
    const apiUrl = `${process.env.NEXT_PUBLIC_APIRES_URL}/api/noticias/all`;

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then((data: News[]) => {
                setNews(data);
                console.log("entro a actualizar el estado")
            })
            .catch(error => {
                console.error('Error al obtener news:', error);
            });
    }, [apiUrl]); // Agregar apiUrl como dependencia

    return news;
}
