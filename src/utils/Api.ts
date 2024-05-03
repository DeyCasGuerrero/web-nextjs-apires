export async function fetchApi(userId?:number) {
    try {
        let apiUrl = `${process.env.API_URL}`;

        if (userId) {
            apiUrl += `/${userId}`;
        }

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API');
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        return null;
    }
}