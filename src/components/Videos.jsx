import { Box, Stack } from '@mui/material'
import React from 'react'
import {VideoCard,ChannelCard} from './index';

function Videos({videos, direction}) {
  
  return (
    <Stack direction={direction ||'row'} flexWrap='wrap' justifyContent='start' gap={2}>
       {
        videos.map((video,index)=>(
          <Box key={index}> 
              {video?.id?.videoId && <VideoCard video={video}/> }
              {video?.id?.channelId && <ChannelCard channelItem={video}/>}
          </Box>
        ))
       }
    </Stack>
  )
}

export default Videos
