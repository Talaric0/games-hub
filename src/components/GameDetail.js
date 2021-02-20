import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
//IMAGES
import playstation from "../img/playstation.svg";
import PS5_logo from "../img/PS5_logo.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import seriesx from "../img/seriesx.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

export default function GameDetail({ pathId }) {
  const history = useHistory();
  //exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const detail = useSelector((state) => state.detail);

  //stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(detail.game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    console.log(stars);
    return stars;
  };

  //get the platform
  const getPlatform = (platform) => {
    return (
      {
        "PlayStation 4": playstation,
        "PlayStation 5": PS5_logo,
        "Xbox Series S/X": seriesx,
        "Xbox S": xbox,
        "Xbox One": xbox,
        "Nintendo Switch": nintendo,
        PC: steam,
        iOS: apple,
      }[platform] || gamepad
    );
  };

  return (
    <>
      {!detail.isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>
                  {detail.game.name}
                </motion.h3>
                <p>Rating: {detail.game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {detail.game.platforms?.map((result) => {
                    return (
                      <img
                        key={result.platform.id}
                        src={getPlatform(result.platform.name)}
                        alt={result.platform.name}
                        title={result.platform.name}
                      />
                    );
                  })}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                src={smallImage(detail.game.background_image, 1280)}
                alt={detail.game.name}
                layoutId={`image ${pathId}`}
              />
            </Media>
            <Description>
              <p>{detail.game.description_raw}</p>
            </Description>
            <div className="gallery">
              <Carousel>
                {detail.screenshots?.map((screenshot) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={smallImage(screenshot.image, 1280)}
                        key={screenshot.id}
                        alt={detail.game.name}
                      />
                      <Carousel.Caption>
                        <p>{detail.game.name}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: #777777;
  }
`;

const Detail = styled(motion.div)`
  width: 70%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: #333;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 1.3rem;
    height: 1.3rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 2rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
