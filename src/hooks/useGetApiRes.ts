import { useEffect, useState } from "react";
import { User ,Project, News} from "@/types/UserType";


/*export function useFetchUsers():User[]{
    const [users , setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/usuario/all')
            .then(response => response.json())
            .then((data: User[]) => {
                setUsers(data);
            })
            .catch(error => {
                console.error('Error al obtener el usuario:', error);
            });
    }, []);

    return users;
}*/ 


export function useProjectData ():Project[]{
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('https://alluring-emotion-production.up.railway.app/api/proyecto/all')
            .then(response => response.json())
            .then((data: Project[]) => {
                setProjects(data);
                console.log("entro a actualizar el estado")
            })
            .catch(error => {
                console.error('Error al obtener proyectos:', error);
            });
    }, []);

    return projects;
};


export function useNewData ():News[]{
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        fetch('https://alluring-emotion-production.up.railway.app/api/noticias/all')
            .then(response => response.json())
            .then((data: News[]) => {
                setNews(data);
                console.log("entro a actualizar el estado")
            })
            .catch(error => {
                console.error('Error al obtener news:', error);
            });
    }, []);

    return news;
};

