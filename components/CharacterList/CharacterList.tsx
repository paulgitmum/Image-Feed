"use client"
import React, { useState } from 'react';
import { CharacterListProps } from '@/app/api/utils/types/types';
import { Box, Typography, ListItemButton } from '@mui/material';
import PaginationPage from '../common/PaginationPage';

const CharacterList: React.FC<CharacterListProps> = ({ allCharacters }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState<number>(1)
    const totalPage: number = Math.ceil(allCharacters.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allCharacters.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography variant='h5' sx={{ mt: 5, color: 'gray', mb: 2 }}> Rick and Morty Characters</Typography>
            <Box sx={{ display: 'flex', margin: 5, flexWrap: 'wrap' }}>
                {currentItems.map((character) => (
                    <Box sx={{ display: 'flex' }} key={character.id} >
                        <ListItemButton >
                            <img src={character.image} alt={character.name} style={{ width: '150px', height: '150px', borderRadius: '5px' }} />
                        </ListItemButton>
                    </Box>
                ))}
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <PaginationPage currentPage={currentPage} totalPage={totalPage} handlePageChange={handlePageChange} />
            </Box>
        </Box>
    )
}

export default CharacterList;