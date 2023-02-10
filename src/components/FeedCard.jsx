import { Card, Chip, Divider, Skeleton, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react'

const FeedCard = ( { app } ) => {
    const [appData, setAppData] = useState([]);
    
    var appId;
    [].concat(app).map((app, appIndex) => {
        appId = app;
    });
    useEffect(() => {
        fetch(`http://localhost:3999/api/getAppInfo/${appId}`)
        .then(res => res.json())
        .then(data => setAppData(data))
    });
    
    var appName, appDeveloper, appImage, appReleaseDate, appGenres, appRating = "NO DATA";

    const appDataArray = appData.length !== 0 ? Object.values(appData) : null;
    const DATA = appDataArray != null && appDataArray[0].data;
    //DATA && console.log(DATA);
    if (DATA) {
        appName = DATA.name;
        appDeveloper = DATA.developers;
        appImage = DATA.header_image;
        appReleaseDate = DATA.release_date.date;
        appGenres = DATA.genres[0].description;
        appRating = DATA.metacritic ? DATA.metacritic.score : "No Data";
    }
    if (DATA) return(
        <Card sx={{width: "100%", borderRadius: "7px"}}>
            <Box sx={{background: `url(${appImage})`, backgroundPosition: "center"}} width="100%" height={"18vh"} />
            <Divider/>
            <Stack>
                <Box sx={{ p: 1 }}>
                    <Typography variant="h6">
                        {appName}
                    </Typography>
                    <Typography variant="body">
                        Developer: {appDeveloper}
                    </Typography>
                </Box>
                <Box sx={{ p: 1 }} display="flex" gap={1}>
                    <Chip label={appGenres}/>
                </Box>
                <Divider />
                <Box sx={{p: 1}} display="flex" justifyContent="space-between">
                    <Chip label={"Score: "+appRating}/>
                    <Chip label={appReleaseDate}/>
                </Box>
            </Stack> 
        </Card> 
    );
}

  

export default FeedCard