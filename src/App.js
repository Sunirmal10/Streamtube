import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Box, Stack} from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';
import ChannelDetail from './components/ChannelDetail';
import SideBar from './components/SideBar';
import SlimSideBar from './components/SlimSideBar';
import { VidProvider } from './components/VidContext';

function App() {
  return (
    <VidProvider>

   <Router>
    <Box sx={{backgroundColor: '#0f0f0f'}}>
     <Navbar/>
     <Stack direction={'row'}>
      <SideBar/>
      <SlimSideBar/>
     <Routes>
        <Route path="/" exact element={<Feed/>} />
        <Route path="/video/:id" element={<VideoDetail/>} />
        <Route path="/channel/:id" element={<ChannelDetail/>} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} />
      </Routes>
     </Stack>
     
    </Box>
   </Router>
    </VidProvider>
  );
}

export default App;
