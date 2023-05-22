import Menu from "./Menu";
import styled from "styled-components";
import {COLORS} from "../../constants/index";

export const MenuButton = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  border: none;
  background: none;
  :hover {
    background-color: lightgrey;
  }
  :focus {
    border-top:solid 1px  ${COLORS.primary};
    border-bottom:solid 1px  ${COLORS.primary};
  }
`