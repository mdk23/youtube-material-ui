 
import React from 'react'

import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components';
 

function App() {
  return (
    <Box sx={{backgroundColor: '#000'}}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Feed/>}/>
              <Route path='/video/:id' element={<VideoDetail/>}/>
              <Route path='/channel/:id' element={<ChannelDetail/>}/>
              <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
          </Routes>        
        </BrowserRouter>
    </Box>
  );
};

export default App;