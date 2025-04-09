import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Box, Stack} from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Feed from './components/Feed/Feed';
import VideoPage from './components/Videos/VideoPage';
import SearchFeed from './components/Feed/SearchFeed';
import ChannelPage from './components/Channel/ChannelPage';
import SideBar from './components/Sidebar/SideBar';
import SlimSideBar from './components/Sidebar/SlimSideBar';
import { VidProvider } from './components/Context/VidContext';

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
        <Route path="/video/:id" element={<VideoPage/>} />
        <Route path="/channel/:id" element={<ChannelPage/>} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} />
      </Routes>
     </Stack>
     
    </Box>
   </Router>
    </VidProvider>
  );
}

export default App;
