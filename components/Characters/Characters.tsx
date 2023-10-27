"use client"
import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid, Paper } from '@mui/material';
import {  CharacterList, CharctersProps } from '@/app/api/utils/api';

const Characters: React.FC<CharctersProps> = ({ characters }) => {
    const [characterList, setCharacterList] = useState<CharacterList[]>([])

    useEffect(() => {
        const fetchCharacters = async () => {
            const characterPromises = characters.map(async (url: string) => {
                const res = await fetch(url);
                const data = await res.json();
                return {
                    id: data.id,
                    name: data.name,
                    image: data.image
                }
            })
            const characterData = await Promise.all(characterPromises);
            setCharacterList(characterData)
        }
        fetchCharacters();
    }, [characters])

    return (
        <Box>
            <Box style={{ marginTop: '20px', height: '80vh'}}>
                <Grid container spacing={3}>
                    {characterList.map((character) => {
                        return <Grid item xs={2} key={character.id} sx={{ alignItems:'center'}}>
                            <Paper elevation={2}>
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    style={{ width: '100%', height: 'auto', borderRadius:'5px' }}
                                />
                            </Paper>
                            <Typography sx={{color:'black'}}>{character.name}</Typography>
                        </Grid>
                    })}
                </Grid>
            </Box>
        </Box>
    )
}

export default Characters