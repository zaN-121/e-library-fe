import styled from "styled-components";

export const MainSideContainer = styled.div`
  margin-top: 5%;
  width: 78%;
  height: 90%;
  background-color: white;
  border-radius: 20px;
  border: .2px solid #d3caca;
  padding: 30px;
  overflow-y: auto;
  position: relative;
  ::-webkit-scrollbar {
    width: 0.1px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: gray;
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 1px; /* Sesuaikan dengan lebar scrollbar Anda */
    background-color: #fff; /* Atur warna latar belakang pseudo-element */
    border-radius: 5px; /* Sesuaikan dengan border radius yang Anda inginkan */
    z-index: 1;
  }
`