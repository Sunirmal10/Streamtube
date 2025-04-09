import React, {createContext, useState, useEffect, useContext, useRef} from "react";

const VidContext = createContext();


const VidProvider = ({children}) => {

    // Note: margin-true && moveLeft-false && showSlim-false for showing default side-bar //

 const [margin, setMargin] = useState(true);

 const [moveLeft, setMoveLeft] = useState(false);

 const [showSlim, setShowSlim] = useState(false);

 const [more, setMore] = useState(false)

 const moreRef = useRef();
 const btnRef = useRef();

 const getTimeAgo = (inputDate) => {
  const now = new Date();
  const then = new Date(inputDate);
  const differenceInSeconds = Math.floor((now - then) / 1000); // Convert milliseconds to seconds

  const years = Math.floor(differenceInSeconds / (365 * 24 * 60 * 60));
  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;

  const months = Math.floor(differenceInSeconds / (30 * 24 * 60 * 60));
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;

  const days = Math.floor(differenceInSeconds / (24 * 60 * 60));
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;

  const hours = Math.floor(differenceInSeconds / (60 * 60));
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;

  const minutes = Math.floor(differenceInSeconds / 60);
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;

  if (differenceInSeconds < 60) return `${differenceInSeconds} second${differenceInSeconds > 1 ? 's' : ''} ago`;
};

 useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && btnRef.current && !moreRef.current.contains(event.target) && !btnRef.current.contains(event.target)) {
        setMore(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
 

 
 const showMore = () => {
    setMore(!more)
  }

 const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <VidContext.Provider value={{btnRef, more, moreRef, setMore, showMore, selectedCategory, setSelectedCategory , showSlim, setShowSlim, margin, setMargin, moveLeft, setMoveLeft, getTimeAgo}}>
            {children}
        </VidContext.Provider>
    )
};

export {VidContext, VidProvider};

// const {user} = useContext(VidContext)
