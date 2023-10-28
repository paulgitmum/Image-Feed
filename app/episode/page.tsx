
import { getEpisodes } from '@/app/api/utils/api';
import { ApiResponse } from '@/app/api/utils/api';
import EpisodeList from '@/components/List/EpisodeList';
import { Box, List, Typography } from "@mui/material";

const Sidebar: React.FC = async () => {
    const data: Promise<ApiResponse> = getEpisodes()
    const episodes = (await data).results;
    return (
        <Box>
            <Box>
                <Typography variant='h5' sx={{ mt: 2, ml: 2 }}>Episodes</Typography>
                <List
                    dense sx={{ marginTop: 5, width: '100%', maxWidth: '350',  position: 'relative', overflow: 'auto', maxHeight: 500, background: '#f0f3f0' }}>
                    {
                        episodes.map((episode) => <EpisodeList episode={episode}></EpisodeList>)
                    }
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar