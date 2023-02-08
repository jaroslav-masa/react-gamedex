import React from 'react'
//import { Link} from '@mui/material'
import { Stack } from '@mui/system'
import { SearchBar } from './'
//import { logo } from "../utils/commons"

const Navbar = () => {
    return (
        <Stack sx={{padding: "1.5vh"}}>
            {/*<Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="logo" height={45} />
            </Link>*/}
            <SearchBar />
        </Stack>
    )
}

export default Navbar