

import { fetchEpisodeCharacters } from '../../api/utils/api';
import Characters from '@/components/Characters/Characters';
import { Box, Typography } from "@mui/material";
import { EpisodeData } from '@/app/api/utils/api';

type Params = {
    params: {
        id: string
    }
}
async function page({ params: { id } }: Params) {
    const data: Promise<EpisodeData> = fetchEpisodeCharacters(id)
    const characters = (await data).characters;
    console.log('name', characters)
    return (
        <Box style={{ marginTop: '20px', height: '80vh', overflowY: 'scroll' }}>
            <Typography sx={{ mb:1}} >{`${characters.length} Characters in this episode`}</Typography>
            <Box >
                <Characters characters={characters} />
            </Box>
        </Box>
    )
}

export default page