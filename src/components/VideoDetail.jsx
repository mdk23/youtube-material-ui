import React, { useState,useEffect } from 'react'

import { useParams,Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import {Videos} from './index'
import { CheckCircle } from '@mui/icons-material'

 

function VideoDetail() {
  const[videoDetail,setVideoDetail]=useState(null);
  const [videos,setVideos]=useState([])

  const {id}=useParams();
  
 
  //if(!videoDetail?.snippet) return 'Loading...' caso ainda nao tenha retornado os dados 
  
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data?.items[0])); 
  
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setVideos(data?.items)); 
  
  
  },[id]);
  
  
  return (
    <Box minHeight='95vh'>
      
      <Stack direction={{ xs:'column', md:'row'}}>
          
          <Box flex={1}>

              <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
                  <ReactPlayer url={`https://youtube.com/watch?v=${id}`}  controls className='react-player'/>
                  
                  <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                    {videoDetail?.snippet?.title}
                  </Typography>
                  
                  <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}>
                      <Link to={`/channel/${videoDetail?.snippet?.channelId}`} >
                        <Typography sx={{color:'#fff'}} variant={{ sm:'subtitle1', md:'h6'}}
                        >{videoDetail?.snippet?.channelTitle} 
                          <CheckCircle sx={{fontsize:'2px', color:'grey', ml:'5px' }}/>
                        </Typography> 
                      </Link> 

                      <Stack direction='row' gap='20px' alignItems='center'>
                        <Typography variant='body1' sx={{opacity: 0.8}}>
                            {parseInt(videoDetail?.statistics?.viewCount).toLocaleString() } Views
                        </Typography>

                        <Typography variant='body1' sx={{opacity: 0.8}}>
                            {parseInt(videoDetail?.statistics?.likeCount).toLocaleString() } Views
                        </Typography>
                      </Stack>

                  </Stack>
              </Box>

          </Box>


          <Box px={2} py={{md:1,xs:5} } justifyContent='center' alignItems='center'>
              <Videos videos={videos} direction='column'/>
          </Box>

      </Stack>


    </Box>
  )
}

export default VideoDetail


 
 