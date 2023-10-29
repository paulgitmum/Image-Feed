import {CharactersApiResponse} from './types/types'
import { ApiResponse, EpisodeData } from './types/types'

const BASE_URL: string = 'https://rickandmortyapi.com/api/';

export async function fetchCharacters(): Promise<CharactersApiResponse> {

    const response = await fetch(`${BASE_URL}/character`);
    if (!response.ok) {
        throw new Error('failed to fetch data')
    }
    return response.json();

}

export async function getEpisodes(): Promise<ApiResponse> {
    const response = await fetch(`${BASE_URL}/episode`);
    if (!response.ok) {
        throw new Error('failed to fetch data')
    }
    return response.json();
}

export async function fetchEpisodeCharacters(id: string):Promise<EpisodeData> {
    const response = await fetch(`${BASE_URL}/episode/${id}`);
    if (!response.ok) {
        throw new Error('failed to fetch data')
    }
    return response.json();
}


