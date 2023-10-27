
import {  CharacterListProps } from '@/app/api/utils/api';
import { Box, Typography, Grid, Paper } from '@mui/material';

const CharacterList: React.FC<CharacterListProps> = ({ allCharacters }) => {

    return (
        <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
             <Typography variant='h5'> Rick and Marty Characters</Typography>
            <Box style={{ marginTop: '20px', height: '80vh', overflowY: 'scroll' }}>
                <Grid container spacing={3}>
                    {allCharacters.map((character) => {
                        return <Grid item xs={2} key={character.id}>
                            <Paper elevation={2}>
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    style={{ width: '100%', height: 'auto', borderRadius:'5px'}}
                                />
                            </Paper>
                        </Grid>
                    })}
                </Grid>
            </Box>
        </Box>
    )
}

export default CharacterList;