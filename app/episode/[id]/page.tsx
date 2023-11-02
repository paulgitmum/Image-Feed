

import { fetchEpisodeCharacters } from '../../api/utils/api';
import Characters from '@/components/Characters/Characters';
import { Box } from "@mui/material";
import { EpisodeData } from '@/app/api/utils/types/types';

type Params = {
    params: {
        id: string
    }
}
async function page({ params: { id } }: Params) {
    const data: Promise<EpisodeData> = fetchEpisodeCharacters(id)
    const characters = (await data).characters;
    return (
        <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center',}}>
            <Box >
                <Characters characters={characters} />
            </Box>
        </Box>
    )
}

export default page