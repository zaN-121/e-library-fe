import styled from "styled-components";

export const Thumbnail = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 150px;
  width: 100%;
  background-repeat: no-repeat;
  :hover {
    position: absolute;
    height: 300px;
    widht: 200%;
    z-index: 9999;
    background-size: contain;
    transition: height 1s;
    
  }
`