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
        <VidContext.Provider value={{btnRef, more, moreRef, setMore, showMore, selectedCategory, setSelectedCategory , showSlim, setShowSlim, margin, setMargin, moveLeft, setMoveLeft}}>
            {children}
        </VidContext.Provider>
    )
};

export {VidContext, VidProvider};

// const {user} = useContext(VidContext)
