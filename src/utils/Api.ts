export async function fetchApi() {
    try {
        const apiUrl = `${process.env.API_URL}`;
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