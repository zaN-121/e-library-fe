import styled from "styled-components";
import {COLORS, SIZES} from "../../constants/index";

export const SubMenuButton = styled.button`
  margin-top: 2px;
  width: 100%;
  height: 30px;
  display: flex;
  border: none;
  background: none;
  padding-left: ${SIZES.L};
  color: gray;
  :hover {
    background-color: lightgray;
  }
  :focus {
    border-top:solid 1px  ${COLORS.primary};
    border-bottom:solid 1px  ${COLORS.primary};
  }
`