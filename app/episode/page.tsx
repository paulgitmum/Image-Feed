
import { getEpisodes } from '@/app/api/utils/api';
import { ApiResponse } from '@/app/api/utils/types/types';
import EpisodeList from '@/components/List/EpisodeList';
import { Box, Typography } from "@mui/material";

const Sidebar: React.FC = async () => {
    const data: Promise<ApiResponse> = getEpisodes()
    const episodes = (await data).results;
    return (
        <Box sx={{ ml: 2 }}>
            <Box>
                <Box>
                    <Typography variant='h5' sx={{ mt: 5, color: 'gray', mb: 2 }}>Episodes</Typography>
                </Box>
                <EpisodeList episodes={episodes} />
            </Box>
        </Box>
    )
}

export default Sidebar