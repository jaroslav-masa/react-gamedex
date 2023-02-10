import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Sidebar } from './';
import FeedCard from './FeedCard';

const ContentFeed = () => {
  const [storeData, setStoreData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3999/api/getapps")
      .then(res => res.json())
      .then(data => setStoreData(data["response"]))
  }, []);
  //console.log(storeData)
  const storeDataArray = storeData && Object.values(storeData);
  return (
    <Stack direction="row" display="flow">
      <Sidebar/>
      <Box direction="row" display="flex" flexWrap={'wrap'} justifyContent="space-around" rowGap={5} sx={{overflowY: "auto" }}>
        {storeDataArray.length ? storeDataArray.map((apps, index) => {
          return [].concat(apps).map((app, appIndex) => {
            return(
              <Box key={appIndex} sx={{width: "35vh", height: "32vh"}}>
                <FeedCard app={[app.appid]}/>
              </Box>
            )
         })
        }) : null}
      </Box>
    </Stack>
  )
}
export default ContentFeed