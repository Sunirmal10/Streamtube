import React, {useContext} from 'react'
import {Box, IconButton, Stack, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../../utils/constants';
import SearchBar from '../Searchbar/SearchBar';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircleOutlined, KeyboardVoiceRounded, MoreVertOutlined } from '@mui/icons-material';
import { BsYoutube } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { VidContext } from "../Context/VidContext";
import More from './/More';


const Navbar = () => {

  const {btnRef, showMore, more, margin, showSlim, moveLeft, setShowSlim, setMargin, setMoveLeft} = useContext(VidContext)


  const handleSide = () => {

    setMargin(!margin);
    setMoveLeft(!moveLeft);
    setShowSlim(!showSlim);

  }
  


return (  <Stack
  direction="row"
  alignItems="center"
  sx={{position: 'sticky',
  background: '#0f0f0f',
  top: 0,
  padding: '0.315rem',
  px: {sm: '0.8rem'},
  left: 0,
  right: 0,
  zIndex: 10,
  justifyContent: 'space-between'}}>


    <Box display={'flex'} gap={'.75rem'}>
     <IconButton onClick={handleSide} className='menu' sx={{color: 'white', marginBottom: '.4375rem'}}>
      <MenuIcon/>
    </IconButton>

    <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '.1875rem', marginBottom: '.625rem', position: "relative"}}>
    <div style={{
      backgroundColor: 'white',
      padding: 0,
      position: "absolute",
      height: "1rem",
      width: "0.8rem",
      left: "0.5rem"
    }}></div>
    <BsYoutube style={{color:'red', fontSize: '1.875rem', marginTop: '.28rem', zIndex:"1"}}/>
    
   
    {/* <img src={logo} alt='YouTube' height={45}/> */}
    <Typography sx={{display:'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1.25rem', fontWeight: '500',
    
     fontFamily: 'Oswald', letterSpacing: '-0.025rem'}}>
      YouTube
    </Typography>
    </Link>
    </Box>
    <Box display={'flex'} gap={'.5rem'}>
    <SearchBar/>
    <div className='circle' style={{display: 'flex', border:'none', justifyContent: 'center', alignItems: 'center', width: '2.8125rem', height: '2.8125rem', borderRadius: '50%', backgroundColor: '#181818', fontSize: 'medium',}}>
      <IconButton sx={{ color: 'white'}}>
    <KeyboardVoiceRounded/>
      </IconButton>
    </div>
    </Box>

    <Box display={'flex'} sx={{mr: '1.25rem', gap: '.4375rem'}}>
    <IconButton sx={{color: 'white' }} onClick={showMore} ref={btnRef} >
      <MoreVertOutlined/>
    </IconButton>
     {more && <More/>}
    <IconButton>
      <div className='sign-in' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#39a1ff', gap: '.3125rem', fontWeight: 'lighter', borderRadius: '1.125rem', border: '.0625rem solid #303030', padding: '.2813rem', width:'5.625rem'
      }}>
        <AccountCircleOutlined/>
        <span>Sign in</span>
      </div>
    </IconButton>
    </Box>
   
  </Stack>
  )
}

export default Navbar
