import styled from "styled-components";
import {COLORS} from "../../../../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  //border: solid 1px red;
  background-color: #f1f0f0;
  border-radius: 20px;
  font-size: 48px;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.quaternary};
`

export const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`