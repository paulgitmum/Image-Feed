
import { EpisodeData, getEpisodes } from '@/app/api/utils/api';
import { ApiResponse } from '@/app/api/utils/api';
import EpisodeList from '@/components/List/EpisodeList';
import { Box, List, Typography } from "@mui/material";

const Sidebar: React.FC = async () => {
    const data: Promise<ApiResponse> = getEpisodes()
    const episodes = (await data).results;
    console.log("episodes", episodes)
    return (
        <Box>
            <Box>
                <Typography variant='h5' sx={{ mt: 2, ml: 2 }}>Episodes</Typography>
                <EpisodeList episodes={episodes}/>
            </Box>
        </Box>
    )
}

export default Sidebar