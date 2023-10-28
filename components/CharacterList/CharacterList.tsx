
import { CharacterListProps } from '@/app/api/utils/api';
import { Box, Typography, Grid } from '@mui/material';

const CharacterList: React.FC<CharacterListProps> = ({ allCharacters }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb:5 }}>
            <Typography variant='h5' sx={{ mb: 2 }}>Rick and Morty Characters</Typography>
            <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
            >
                {
                    allCharacters.map((character) => (
                        <Grid key={character.id} item>
                            <img src={character.image} style={{ width: '150px', height: 'auto', borderRadius: '5px' }} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default CharacterList;