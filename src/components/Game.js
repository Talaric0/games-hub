import React from "react";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

export default function Game({ game }) {
  const { name, released, background_image, id, short_screenshots } = game;

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id, short_screenshots));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={background_image} alt={name} />
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
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;
