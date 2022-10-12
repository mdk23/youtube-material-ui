import React from 'react'
import { CardContent, CardMedia, Typography,Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import {demoProfilePicture} from '../utils/constants'



function ChannelCard({channelItem,marginTop}) {  
 
    return (
    <Box sx={{ boxShadow:'none', borderRadius:'20px',
            display:'flex', justifyContent:'center',alignItems:'center',
            width:{xs:'356px',md:'320px' },height:'326px',margin:'auto',marginTop: marginTop
            
    }}>
        <Link to={`/channel/${channelItem?.id?.channelId}`}>
            <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
                <CardMedia 
                    image={channelItem?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelItem?.snippet?.title}
                    sx={{height:'180px', width:'180px', borderRadius:'40%',
                    mb:2, border: '1px solid grey'
                }}
                />
               <Typography variant='h6'>
                    {channelItem?.snippet?.title}
                    <CheckCircle sx={{ml:'5px', fontSize:'16px'}}/> 
                </Typography>
                {
                    channelItem?.statistics?.subscriberCount &&(
                        <Typography >
                            {parseInt(channelItem?.statistics?.subscriberCount).toLocaleString()} Subcribers
                        </Typography>
                    )
                } 
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard
