import { Box } from '@mui/system'
import React from 'react'
import { Navbar, ContentFeed } from './components/' 

const App = () => {
  return (
    <Box>
      <Navbar sx={{position: "fixed"}}/>
      <ContentFeed />
    </Box>
  )
}

export default App