import Image from 'next/image'
import styles from './page.module.css'
import { fetchCharacters } from '@/app/api/utils/api';
import CharacterList from '@/components/CharacterList/CharacterList';
import { CharactersApiResponse } from '@/app/api/utils/api';

const Home: React.FC = async () => {
  const data: Promise<CharactersApiResponse> = fetchCharacters()
  const allCharacters = (await data).results;
  return <CharacterList allCharacters={allCharacters} />
}
export default Home;