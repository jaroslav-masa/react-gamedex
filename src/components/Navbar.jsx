import React from 'react'
import { Link } from '@mui/material'
import { Stack } from '@mui/system'
import { SearchBar } from './'
import { logo } from '../utils/commons'
import { blue } from '@mui/material/colors'


const Navbar = () => {
    return (
        <Stack sx={{padding: "1.5vh", marginRight: 1, display: "flex", justifyContent: "space-between", alignItems: "center"}} direction="row">
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} width="40px" draggable="false" alt="GameDex Logo"/>
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar