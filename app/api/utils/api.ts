

export type Info = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}
export type EpisodeData = {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string
}


export type ApiResponse = {
    info: Info;
    results: EpisodeData[];
}


export type Origin = {
    name: string;
    url: string;
}
export type Location = {
    name: string;
    url: string;
}

export type Character = {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    location: string;
    image: string;
    episode: string[];
    url: string;
    created: string;
}
export type CharactersApiResponse = {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

export type CharacterList = {
    id: string,
    name: string,
    image: string
}

export type CharacterListProps = {
    allCharacters: CharacterList[];
}

export type CharctersProps = {
    characters: string[];
}


const BASE_URL: string = 'https://rickandmortyapi.com/api/';

export async function fetchCharacters(): Promise<CharactersApiResponse> {

    const response = await fetch(`${BASE_URL}/character`);
    if (!response.ok) {
        throw new Error('failed to fetch data')
    }
    return response.json();

}

export async function getEpisodes() {
    const response = await fetch(`${BASE_URL}/episode`);
    if (!response.ok) {
        throw new Error('failed to fetch data')
    }
    return response.json();
}

export async function fetchEpisodeCharacters(id: string) {
    const response = await fetch(`${BASE_URL}/episode/${id}`);
    if (!response.ok) {
        throw new Error('failed to fetch data')
    }
    return response.json();
}

