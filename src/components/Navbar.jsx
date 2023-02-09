import React from 'react'
import { Link} from '@mui/material'
import { Stack } from '@mui/system'
import { SearchBar, ProfileAvatar } from './'
import { logo } from "../utils/commons"

const Navbar = () => {
    return (
        <Stack sx={{padding: "1.5vh", display: "flex", justifyContent: "space-between", alignItems: "center"}} direction="row">
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="logo" height={45} />
            </Link>
            <SearchBar/>
            <ProfileAvatar />
        </Stack>
    )
}

export default Navbar