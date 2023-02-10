import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const SideBar = () => {
  return (
    <Stack width="100vh" sx={{borderRight: "solid 1px #aaa"}}>
      <Box>
        
      </Box>
      <Typography variant="body2" color="#aaa">
        &copy; Jaroslav Maša 2023
      </Typography>
    </Stack>
  )
}

export default SideBar