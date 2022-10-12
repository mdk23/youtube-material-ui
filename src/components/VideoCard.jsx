import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import {demoThumbnailURL,demoVideoURL,demoVideoTitle,demoChannelURL,demoChannelTitle} from '../utils/constants'

function VideoCard( { video:{id:{videoId}, snippet} }){
    
    return (
    <Card sx={{ width:{xs:'100%',sm:'360px' ,md:'320px'},boxShadow:'none', borderRadius:0 }}>
        <Link to={videoId? `/video/${videoId}` : demoVideoURL}>
            <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailURL }
              alt={snippet?.title}
              sx={{width: {
                xs:'100%',sm:'360px',md:'320px'
              }, height:180}}  
            />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e', height:'100px'}}>
            <Link to={videoId? `/video/${videoId}`: demoVideoURL}>
               <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                    {
                        /*Mostra somente 60 caracteres do titulo*/
                        snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)   
                    }
               </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelURL}>
               <Typography variant='subtitle2' fontWeight='bold' color='#BEBEBE'>
                    {
                        /*Mostra somente 60 caracteres do titulo*/
                        snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)    
                    }
                    <CheckCircle sx={{ml:'5px', fontSize:'16px'}}/>
               </Typography>
            </Link>

        </CardContent>
    </Card>
  )
}

export default VideoCard
    