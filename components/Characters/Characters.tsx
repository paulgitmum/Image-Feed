"use client"
import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid } from '@mui/material';
import {  CharacterList, CharctersProps } from '@/app/api/utils/types/types';

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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid
            container
            spacing={3}
            alignItems="left"
            justifyContent="center"
        >
            {
                characterList.map((character) => (
                    <Grid key={character.id} item>
                        <img src={character.image} alt={character.name} style={{ width: '150px', height: 'auto', borderRadius: '5px' }} />
                        <Typography sx={{color:'black', fontSize:'12px'}}>{character.name}</Typography>
                    </Grid>
                ))
            }
        </Grid>
    </Box>
    )
}

export default Characters