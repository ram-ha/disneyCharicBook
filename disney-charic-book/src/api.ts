const BASE_URL = `https://disney_api.nomadcoders.workers.dev/characters`;

export const fetchCharacterList = async () => {
    return await fetch(`${BASE_URL}`).then((response) => response.json());
}
export const fetchDetails = async (charicId: string) => {
    return await fetch(`${BASE_URL}/${charicId}`).then((res) => res.json());
};