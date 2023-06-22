import { Stack } from '@mui/material'
import React, { useContext } from 'react'
import { list10, list7, list8, list9 } from '../utils/constants'
import { VidContext } from './VidContext'

const More = () => {

    const {more, moreRef} = useContext(VidContext);

  return (
    <div className='more' style={{fontFamily: 'Roboto'}} ref={moreRef}>
      <div style={{paddingTop: '0.7rem', paddingBottom: '0.5rem', borderBottom: '.0625rem solid grey'}}>
        {
            list7.map((item)=>(
                <div className='span-more'>
                <span>
                    {item.icon}
                </span>
                <span>
                    {item.name}
                </span>
                </div>
            ))
        }
      </div>
      <div style={{paddingTop: '0.5rem', paddingBottom: '0.5rem', borderBottom: '.0625rem solid grey'}}>
        {
            list8.map((item)=>(
                <div className='div-more'>
                     <div className='span-more'>
                <span>
                    {item.icon}
                </span>
                <span>
                    {item.name}
                </span>
               
                </div>
                <span>
                    {item.icon2}
                </span>
                </div>
               
            ))
        }
      </div>
      <div style={{paddingTop: '0.5rem', paddingBottom: '0.5rem', borderBottom: '.0625rem solid grey'}}>
        {
            list9.map((item)=>(
                <div className='span-more'>
                <span>
                    {item.icon}
                </span>
                <span>
                    {item.name}
                </span>
                </div>
            ))
        }
      </div>
      <div style={{paddingTop: '0.5rem', paddingBottom: '0.5rem'}}>
        {
            list10.map((item)=>(
                <div className='span-more'>
                <span>
                    {item.icon}
                </span>
                <span>
                    {item.name}
                </span>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default More
