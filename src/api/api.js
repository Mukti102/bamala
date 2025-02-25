export const BASE_URL_PHOTO = "https://admin.bamala.org/storage/";
export const BASE_URL = "https://admin.bamala.org/api";


export const fetchData = async (endpoint, params) => {
    const url = `${BASE_URL}${endpoint}${params}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}