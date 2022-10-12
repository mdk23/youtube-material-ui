import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'

import {Videos} from './index'
import { useParams } from 'react-router-dom'

function SearchFeed() {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  console.log(videos);
  useEffect(() => {
    fetchFromAPI(`search?q=${searchTerm}&part=snippet`)
      .then((data) => setVideos(data?.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
          <Typography variant='h4' fontWeight='bold' mb='12px'sx={{color:'white'}}>
              Search Rersults for: <span style={{color:'#FC1503'}}>{searchTerm}</span>
          </Typography>
        
          <Box display='flex' p='2'>
                <Box sx={{mr: { sm: '150px' }}}/>
                
                { videos && (<Videos videos={videos}/>) }
          </Box>    
    </Box>
  )
}

export default SearchFeed