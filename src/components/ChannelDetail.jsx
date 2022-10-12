
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';

import { useParams } from 'react-router-dom';

import {Videos,ChannelCard} from './index';
import { fetchFromAPI } from '../utils/fetchFromAPI';

function ChannelDetail() {
  const { id }=useParams();
  
  const [channelDetail,setChannelDetail]=useState(null);
  const [videos,setVideos]=useState([]);


    useEffect(()=>{
      fetchFromAPI(`channels?id=${id}&part=snippet%2Cstatistics`)
      .then((data)=>setChannelDetail(data?.items[0]))
    
      fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      .then((data)=>setVideos(data?.items))
    
    },[id]);

  return (
      <Box minHeight='95vh'>
          
          <Box>
              <div  style={{
                  background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%,rgba(0,212,255,1) 100%)',
                  zIndex:10,
                  height:'300px'
                }}/>

                <ChannelCard channelItem={channelDetail} marginTop='-100px'/>
          </Box>

           <Box display='flex' p='2'>
                <Box sx={{mr: { sm: '150px' }}}/>
                
                <Videos videos={videos}/> 
          </Box>     

      </Box>
  )
}

export default ChannelDetail