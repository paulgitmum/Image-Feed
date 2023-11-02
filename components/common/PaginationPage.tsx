import React from 'react'
import { Pagination } from '@mui/material';
import { PaginationProps } from '../../app/api/utils/types/types';

const PaginationPage:React.FC<PaginationProps> = ({ currentPage, totalPage, handlePageChange }) => {
    return (
        <Pagination
            count={totalPage}
            page={currentPage}
            onChange={handlePageChange}
        />
    )
}
export default PaginationPage