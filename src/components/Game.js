import React from "react";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
//util
import { smallImage } from "../util";
import { popup } from "../animations";

export default function Game({ game }) {
  const { name, released, background_image, id, short_screenshots } = game;

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id, short_screenshots));
  };

  const stringPathId = id.toString();

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(background_image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.6rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease !important;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.1) !important;
  }
`;
