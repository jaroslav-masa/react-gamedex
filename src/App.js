import { Box } from '@mui/system'
import React from 'react'
import { Navbar, ContentFeed, ProfileDetail, GameDetail } from './components/' 
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { grey } from '@mui/material/colors'

const App = () => {
  return (
    <BrowserRouter>
      <Box bgcolor={grey[900]} height="100vh">
        <Navbar sx={{position: "fixed"}}/>
        <Routes>
          <Route path='/' exact element={<ContentFeed/>} />
          <Route path='/player/:id' element={<ProfileDetail/>} />
          <Route path='/game/:appId' element={<GameDetail/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App