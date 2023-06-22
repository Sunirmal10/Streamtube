import React, { useState, useRef } from "react";
import { IconButton, Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const TopicBar = ({ selectedCategory, setSelectedCategory }) => {
  const [showArrow, setShowArrow] = useState("none");

  const containerRef = useRef(null);

  const navigate = useNavigate();

  const handleRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 70;
      setShowArrow("flex");
    }
  };
  const handleLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 70;
      containerRef.current.scrollLeft === 0 && setShowArrow("none");
    }
  };

  return (
    <Stack
      direction="row"
      ref={containerRef}
      sx={{pb: '0.2rem',
        alignItems: "center", 
        overflow: "hidden", 
        width:'auto'}}
    >
      <div
        style={{
          display: showArrow,
          position: "sticky",
          top: '0',
          left: "0",
          zIndex: "1",
          border: "none",
          justifyContent: "center",
          alignItems: "center",
          width: "6rem",
          background:
            "linear-gradient(to right,#0f0f0f, #0f0f0f,#0f0f0f,#0f0f0f,#0f0f0f, #0f0f0f, transparent)",
          height: "2.625rem",
        }}
      >
        <IconButton
          className="circle"
          sx={{ color: "white" }}
          onClick={handleLeft}
        >
          <ChevronLeft />
        </IconButton>
      </div>
      <Stack
        direction={"row"}
        sx={{ alignItems: "center", gap: "0.8rem", px: "0.25rem" }}
      >
        {categories.map((cat) => (
          <button
            className="category-btn"
            onClick={() => {
              navigate('/')
              setSelectedCategory(cat.name)}}
            style={
              cat.name === selectedCategory
                ? { background: "#FFFFFF", color: "#0f0f0f", fontWeight: "400" }
                : { color: "#FFFFFF" }
            }
            key={cat.name}
          >
            <span>{cat.name}</span>
          </button>
        ))}
      </Stack>

      <div
        style={{
          display: "flex",
          position: "sticky",
          right: "0",
          zIndex: "1",
          border: "none",
          justifyContent: "center",
          alignItems: "center",
          width: "5.9375rem",
          background:
            "linear-gradient(to left, #0f0f0f, #0f0f0f, #0f0f0f,#0f0f0f,#0f0f0f, #0f0f0f, transparent)",
          height: "2.625rem",
        }}
      >
        <IconButton
          className="circle"
          sx={{ color: "white" }}
          onClick={handleRight}
        >
          <ChevronRight />
        </IconButton>
      </div>
    </Stack>
  );
};

export default TopicBar;
