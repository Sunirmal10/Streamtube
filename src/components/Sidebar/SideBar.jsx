import { IconButton, Stack } from "@mui/material";
import React, { useContext } from "react";
import { VidContext } from "../Context/VidContext";
import { footNotes, list,list2, list4, list5, list6 } from "../../utils/constants";
import { AccountCircleOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SideBar = () => {

  const {moveLeft, selectedCategory, setSelectedCategory} = useContext(VidContext)

  
  const navigate = useNavigate();

  const getDate = ()=> {
    const date = new Date();
     const year = date.getFullYear()
     return year
  }

  return (
    <Stack direction={'column'} sx={{color: '#000000', zIndex: '10', backgroundColor: '#0f0f0f', pr: '.5rem', mr: '.5rem', pb:'0.5rem', position:'fixed', width: '14rem', overflow: 'auto', height: '90%', left: moveLeft ? '-14rem' : '0'
     }}>
     <Stack
        direction={"column"}
        sx={{ alignItems: "center", px: ".3rem", py: '0.6rem', borderBottom: '.0625rem solid grey', gap: '0.2rem'}}
      >
        {list.map((cat) => (
          <button 
           className="side-btn"           
           onClick={() => 
            {
              navigate('/')
            cat.name !== "Subscriptions" && setSelectedCategory(cat.name)
          }}
           style={
             cat.name === selectedCategory
             ? { background: "#272727", color: "#FFFFFF" }
             : { color: "#FFFFFF", background: '#0f0f0f' }
            }
            key={cat.name}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </Stack>
     <Stack
        direction={"column"}
        sx={{ alignItems: "center", px: ".25rem", py: '0.7rem', borderBottom: '.0625rem solid grey'}}
      >
        {list2.map((cat) => (
          <button 
           className="side-btn"           
            style={
               { background: "#0f0f0f", color: "#ffffff", fontWeight: "400" }
               
            }
            key={cat.name}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </Stack>
     <Stack
        direction={"column"}
        sx={{ alignItems: "start", px: ".25rem", py: '0.7rem', fontFamily:'Roboto',borderBottom: '.0625rem solid grey'}}
      >
       <span className="short-heading">Sign in to like videos, comment, and subscribe.</span>
       <span  className="short-heading">
       <IconButton>
      <div className='sign-in' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#39a1ff', gap: '.3125rem', fontWeight: 'lighter', borderRadius: '18px', border: '.0625rem solid #303030', padding: '.28rem', width:'5.625rem'
      }}>
        <AccountCircleOutlined/>
        <span>Sign in</span>
      </div>
    </IconButton>
       </span>
      </Stack>
     <Stack
        direction={"column"}
        sx={{ alignItems: "start", px: ".25rem",fontFamily:'Roboto', py: '0.7rem', borderBottom: '.0625rem solid grey'}}
      >
        <span className="short-heading">Explore</span>
        {list4.map((cat) => (
          <button 
           className="side-btn"  
           onClick={() => 
            {
              navigate('/')
            setSelectedCategory(cat.name)
          }}
            style={
              cat.name === selectedCategory
              ? { background: "#272727", color: "#FFFFFF" }
              : { color: "#FFFFFF", background: '#0f0f0f' }
            }
            key={cat.name}  
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </Stack>
      <Stack
        direction={"column"}
        sx={{ alignItems: "start", px: ".25rem",fontFamily:'Roboto', py: '0.7rem', borderBottom: '.0625rem solid grey'}}
      >
      
          <button 
           className="side-btn"           
            style={
               { background: "#0f0f0f", color: "#ffffff", fontWeight: "400" }
               
            }
            
          >
            <span><AddCircleOutlineOutlined/></span>
            <span>Browse channels</span>
          </button>
  
      </Stack>
     <Stack
        direction={"column"}
        sx={{ alignItems: "start", fontFamily:'Roboto', px: ".25rem", py: '0.7rem', borderBottom: '.0625rem solid grey'}}
      >
        <span className="short-heading">More from StreamTube</span>
        {list5.map((cat) => (
          <button 
           className="side-btn"           
            style={
               { background: "#0f0f0f", color: "#ffffff", fontWeight: "400" }
               
            }
            key={cat.name}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </Stack>
     <Stack
        direction={"column"}
        sx={{ alignItems: "center", px: ".25rem", py: '0.7rem', borderBottom: '.0625rem solid grey'}}
      >
        {list6.map((cat) => (
          <button 
           className="side-btn"           
            style={
               { background: "#0f0f0f", color: "#ffffff", fontWeight: "400" }
               
            }
            key={cat.name}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </Stack>
     <Stack
        direction={"column"}
        sx={{ alignItems: "start", fontFamily: 'Roboto' , fontSize: 'small', fontWeight: '500'
        , px: ".25rem", py: '0.7rem'}}
      >
       
       {
        footNotes.map((item, i)=>(
          <span
          className="end-heading"
          key={i}
          >
          <span>{item.term1}</span>
          <span>{item.term2}</span>
          <span>{item.term3}</span>
          </span>
        ))
       }
        <span className="copyright">© {getDate()} StreamTube</span>
      </Stack>
    </Stack>
  )
}

export default SideBar
