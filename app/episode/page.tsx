
import { getEpisodes } from '@/app/api/utils/api';
import { ApiResponse } from '@/app/api/utils/api';
import List from '@/components/List/List';
import { Box} from "@mui/material";

const Sidebar: React.FC = async () => {
    const data: Promise<ApiResponse> = getEpisodes()
    const episodes = (await data).results;
    return (
        <Box>
            <Box style={{position: 'absolute',marginTop: 0,marginLeft: 0,height: '100vh',display: 'flex',flexDirection: 'column',overflowY: 'hidden'
            }}>
                <Box style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', }}>
                    <ul style={{
                        marginBottom: 6,
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {
                            episodes.map((episode) => <List episode={episode}/>
                            )
                        }
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar