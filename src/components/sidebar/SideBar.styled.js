import styled from "styled-components";

export const SideBarContainer = styled.div`
  margin-top: 5%;
  width: 18%;
  height: 60%;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  color: #67696b;
  border-radius: 20px;
  border: .2px solid #d3caca;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 1px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: gray;
  }
`