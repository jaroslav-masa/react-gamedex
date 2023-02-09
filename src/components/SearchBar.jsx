import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React from 'react'

const SearchBar = () => {
  return (
    <Paper component='form' onChange={() => {}} sx={{postion: "absolute", translate: "12.5%",borderRadius: 20, pl: 2, boxShadow: "none", mr: {sm: 5}}}>
        <input class="search-bar" placeholder='Today I will play...' value="" onChange={() => {}} />
        <IconButton type="submit" sx={{ p: "8px" }}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar