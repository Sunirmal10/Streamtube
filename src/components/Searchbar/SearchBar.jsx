import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import { IoIosSearch,IoMdClose } from "react-icons/io";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [displayClose, setDisplayClose] = useState('none');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm)  {
      navigate(`/search/${searchTerm}`);

      
    }
  }

  const handleSearch = (e) => {
    setDisplayClose('block')
    setSearchTerm(e.target.value)
    e.target.value === '' && setDisplayClose('none')
  }
  
  const handleClose = () => {
    setSearchTerm('')
    setDisplayClose('none')
  }

  return (
    <Paper 
    component="form"
    onSubmit={handleSubmit}
    sx={{
      
      borderRadius: '1.25rem',
      border: '.0625rem solid #303030',
      pl: '.125rem',
      boxShadow: "none",
      height: '2.5rem',
      backgroundColor: '#121212',
      margin: '0',
      position: 'relative'
      
    }}>
      <input
      className='search-bar'
      placeholder='Search'
      value={searchTerm}
      onChange={(e)=>{
       handleSearch(e)}}/>
        <div className='close' onClick={handleClose} style={{display: displayClose , cursor: 'pointer'}}>
          <IoMdClose style={{color: 'white', fontSize:'1.5rem'}}/>
        </div>

      <IconButton type='submit' sx={{p: '.5rem',width: '3.7188rem', borderLeft: '.0625rem solid #303030',backgroundColor: "#222222", borderTopLeftRadius: '0',
      borderTopRightRadius: '1.25rem',
       borderBottomLeftRadius: "0",
       borderBottomRightRadius: '1.25rem',
        color: 'lightgrey'}}>
        <IoIosSearch/>
      </IconButton>

    </Paper>
  )
}

export default SearchBar
